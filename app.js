const veggieData = [
  { name: 'Broccoli', calories: 34, fiber: '2.6 g', vitamins: 'C, K, A', benefits: 'Cruciferous veggie packed with antioxidants.', aliases: ['broccoli'] },
  { name: 'Spinach', calories: 23, fiber: '2.2 g', vitamins: 'A, C, K, folate', benefits: 'Leafy green high in iron and vitamins.', aliases: ['spinach'] },
  { name: 'Kale', calories: 35, fiber: '2.6 g', vitamins: 'A, C, K', benefits: 'Dense in nutrients with anti-inflammatory benefits.', aliases: ['kale'] },
  { name: 'Carrot', calories: 41, fiber: '2.8 g', vitamins: 'A, K, B6', benefits: 'Great for eye health thanks to beta-carotene.', aliases: ['carrot', 'carrots'] },
  { name: 'Tomato', calories: 18, fiber: '1.2 g', vitamins: 'C, K, potassium', benefits: 'Hydrating fruit rich in lycopene.', aliases: ['tomato', 'roma tomato', 'cherry tomato'] },
  { name: 'Bell Pepper', calories: 20, fiber: '1.7 g', vitamins: 'C, B6, folate', benefits: 'Colorful peppers packed with vitamin C.', aliases: ['bell pepper', 'sweet pepper', 'red pepper', 'green pepper', 'yellow pepper'] },
  { name: 'Zucchini', calories: 17, fiber: '1.0 g', vitamins: 'A, C, manganese', benefits: 'Low-calorie squash great for grilling.', aliases: ['zucchini', 'courgette'] },
  { name: 'Cucumber', calories: 16, fiber: '0.5 g', vitamins: 'K, C, potassium', benefits: 'Cooling veggie with very high water content.', aliases: ['cucumber'] },
  { name: 'Cauliflower', calories: 25, fiber: '2.0 g', vitamins: 'C, K, B6', benefits: 'Versatile cruciferous veggie for low-carb swaps.', aliases: ['cauliflower'] },
  { name: 'Eggplant', calories: 25, fiber: '3.0 g', vitamins: 'B1, B6, K', benefits: 'Contains nasunin, a potent antioxidant.', aliases: ['eggplant', 'aubergine'] },
  { name: 'Sweet Potato', calories: 86, fiber: '3.0 g', vitamins: 'A, C, B6', benefits: 'Complex carbs with natural sweetness.', aliases: ['sweet potato', 'yam'] },
  { name: 'Lettuce', calories: 15, fiber: '1.3 g', vitamins: 'A, K, folate', benefits: 'Crisp base for salads with minimal calories.', aliases: ['lettuce', 'romaine', 'iceberg', 'leaf lettuce'] },
  { name: 'Cabbage', calories: 25, fiber: '2.5 g', vitamins: 'C, K, folate', benefits: 'Budget-friendly cruciferous option.', aliases: ['cabbage', 'green cabbage', 'red cabbage'] },
  { name: 'Green Beans', calories: 31, fiber: '2.7 g', vitamins: 'C, K, folate', benefits: 'Tender beans with a satisfying crunch.', aliases: ['green bean', 'green beans', 'string beans'] },
  { name: 'Asparagus', calories: 20, fiber: '2.1 g', vitamins: 'A, C, K, folate', benefits: 'Spring vegetable rich in folate.', aliases: ['asparagus'] }
];

const startCameraBtn = document.getElementById('startCamera');
const capturePhotoBtn = document.getElementById('capturePhoto');
const analyzePhotoBtn = document.getElementById('analyzePhoto');
const cameraStream = document.getElementById('cameraStream');
const snapshotCanvas = document.getElementById('snapshot');
const predictionDiv = document.getElementById('prediction');
const searchInput = document.getElementById('searchInput');
const veggieList = document.getElementById('veggieList');

let stream = null;
let mobilenetModel = null;

const ctx = snapshotCanvas.getContext('2d');

function sortByCalories(data) {
  return [...data].sort((a, b) => a.calories - b.calories);
}

function renderVeggieList(query = '') {
  const normalized = query.trim().toLowerCase();
  const filtered = sortByCalories(veggieData).filter((item) => {
    if (!normalized) return true;
    return [item.name, ...(item.aliases || [])]
      .some((alias) => alias.toLowerCase().includes(normalized));
  });

  veggieList.innerHTML = '';

  if (filtered.length === 0) {
    veggieList.innerHTML = '<li>No veggies found. Try another name.</li>';
    return;
  }

  const fragment = document.createDocumentFragment();
  filtered.forEach((item) => {
    const li = document.createElement('li');
    const left = document.createElement('span');
    left.textContent = item.name;
    const right = document.createElement('span');
    right.textContent = `${item.calories} kcal / 100g`;
    li.append(left, right);
    li.title = `${item.fiber} fiber • Vitamins: ${item.vitamins}`;
    li.dataset.veggie = item.name;
    fragment.appendChild(li);
  });

  veggieList.appendChild(fragment);
}

renderVeggieList();

searchInput.addEventListener('input', (event) => {
  renderVeggieList(event.target.value);
});

function updatePrediction(message) {
  predictionDiv.innerHTML = message;
}

async function ensureModelLoaded() {
  if (!mobilenetModel) {
    updatePrediction('<p>Loading AI model…</p>');
    mobilenetModel = await mobilenet.load({ version: 2, alpha: 1.0 });
  }
  return mobilenetModel;
}

async function startCamera() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
    cameraStream.srcObject = stream;
    await cameraStream.play();
    capturePhotoBtn.disabled = false;
    analyzePhotoBtn.disabled = true;
    updatePrediction('Camera ready! Capture a photo when you are happy with the view.');
  } catch (error) {
    console.error(error);
    updatePrediction('<p>Unable to access the camera. Please allow camera permissions or try a manual search.</p>');
  }
}

function capturePhoto() {
  if (!stream) {
    updatePrediction('<p>Please start the camera first.</p>');
    return;
  }

  ctx.drawImage(cameraStream, 0, 0, snapshotCanvas.width, snapshotCanvas.height);
  analyzePhotoBtn.disabled = false;
  updatePrediction('Photo captured! Tap "Analyze Photo" to let the AI identify the vegetable.');
}

function findBestVeggie(predictions) {
  for (const prediction of predictions) {
    const labelParts = prediction.className
      .split(',')
      .map((label) => label.trim().toLowerCase());

    for (const part of labelParts) {
      const match = veggieData.find((item) => {
        const aliases = [item.name, ...(item.aliases || [])].map((alias) => alias.toLowerCase());
        return aliases.includes(part);
      });
      if (match) {
        return { veggie: match, probability: prediction.probability };
      }
    }
  }
  return null;
}

function renderRecommendations(currentVeggie) {
  const alternatives = sortByCalories(veggieData)
    .filter((item) => item.name !== currentVeggie.name)
    .slice(0, 3);

  const recList = alternatives
    .map((item) => `<li><strong>${item.name}</strong> – ${item.calories} kcal / 100g</li>`)
    .join('');

  return `
    <h3>Light & Crunchy Alternatives</h3>
    <p>Looking for other low-calorie options? Try:</p>
    <ul class="recommendations">${recList}</ul>
  `;
}

async function analyzePhoto() {
  if (!ctx) {
    updatePrediction('<p>Canvas not ready yet.</p>');
    return;
  }

  const model = await ensureModelLoaded();
  const predictions = await model.classify(snapshotCanvas);
  const match = findBestVeggie(predictions);

  if (!match) {
    const bestGuess = predictions[0];
    updatePrediction(`
      <p><strong>Hmm…</strong> I am not fully sure what this is.</p>
      <p>Closest guess: <strong>${bestGuess.className}</strong> (${(bestGuess.probability * 100).toFixed(1)}% confidence).</p>
      <p>Try capturing again in better lighting or use the search below.</p>
    `);
    return;
  }

  const { veggie, probability } = match;
  updatePrediction(`
    <p><strong>${veggie.name}</strong> detected with ${(probability * 100).toFixed(1)}% confidence.</p>
    <p><strong>${veggie.calories} kcal</strong> per 100g • Fiber: ${veggie.fiber} • Vitamins: ${veggie.vitamins}</p>
    <p>${veggie.benefits}</p>
    ${renderRecommendations(veggie)}
  `);
}

function stopCamera() {
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    stream = null;
  }
  cameraStream.srcObject = null;
  capturePhotoBtn.disabled = true;
  analyzePhotoBtn.disabled = true;
}

window.addEventListener('beforeunload', stopCamera);

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    stopCamera();
  }
});

startCameraBtn.addEventListener('click', () => {
  stopCamera();
  startCamera();
});

capturePhotoBtn.addEventListener('click', capturePhoto);
analyzePhotoBtn.addEventListener('click', analyzePhoto);

veggieList.addEventListener('click', (event) => {
  const item = event.target.closest('li[data-veggie]');
  if (!item) return;

  const veggie = veggieData.find((entry) => entry.name === item.dataset.veggie);
  if (!veggie) return;

  updatePrediction(`
    <p><strong>${veggie.name}</strong> • ${veggie.calories} kcal per 100g</p>
    <p>Fiber: ${veggie.fiber} • Vitamins: ${veggie.vitamins}</p>
    <p>${veggie.benefits}</p>
    ${renderRecommendations(veggie)}
  `);
});
