// Basic runtime: i18n, nav, estimator mock, 3D hero scaffold, assistant
(function() {
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  const state = {
    lang: localStorage.getItem('lang') || 'en',
    step: 1,
    totalSteps: 3,
  };

  // i18n
  async function loadLocale(lang) {
    const res = await fetch(`/scripts/i18n/${lang}.json`);
    if (!res.ok) return;
    const dict = await res.json();
    applyI18n(dict, lang);
  }
  function applyI18n(dict, lang) {
    document.documentElement.lang = lang === 'ar' ? 'ar' : lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    $$('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = key.split('.').reduce((o,k) => (o||{})[k], dict);
      if (typeof value === 'string') {
        el.textContent = value;
      } else if (value && typeof value === 'object') {
        // special: hero.headline has en/ja strings
        if ('en' in value || 'ja' in value) {
          // do nothing here; the EN/JA span structure already exists
        }
      }
    });
    $$('.lang-btn').forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang)));
  }

  // Language switcher
  $$('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.lang = btn.dataset.lang;
      localStorage.setItem('lang', state.lang);
      loadLocale(state.lang);
    });
  });

  // Year
  const year = new Date().getFullYear();
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = String(year);

  // Estimator wizard
  const form = $('#quote-form');
  const nextBtn = $('#wizard-next');
  const backBtn = $('#wizard-back');
  const bookBtn = $('#wizard-book');
  const bar = $('#wizard-bar');
  const steps = $$('.wizard-step');
  const estimateEl = $('#estimate-range');

  function updateWizard() {
    steps.forEach(step => {
      const n = Number(step.dataset.step);
      step.hidden = n !== state.step;
    });
    backBtn.disabled = state.step === 1;
    nextBtn.hidden = state.step === state.totalSteps;
    bookBtn.hidden = state.step !== state.totalSteps;
    bar.style.width = `${(state.step-1)/(state.totalSteps-1)*100}%`;
    estimateEl.textContent = estimateRange();
  }
  function estimateRange() {
    // mock calculation
    const data = new FormData(form);
    let base = 12000; // JPY
    if (data.get('residence') === 'house') base += 5000;
    const floors = Number(data.get('floors') || 1);
    base += Math.max(0, floors-1) * 1000;
    if (data.get('elevator') !== 'on' && floors > 1) base += 3000;
    const items = data.getAll('items');
    base += items.length * 2000;
    if (data.get('disposal') === 'on') base += 4000;
    const low = Math.round(base * 0.9);
    const high = Math.round(base * 1.2);
    return `¥${low.toLocaleString()} – ¥${high.toLocaleString()}`;
  }
  if (form) {
    form.addEventListener('input', updateWizard);
    nextBtn.addEventListener('click', () => { if (state.step < state.totalSteps) { state.step++; updateWizard(); }});
    backBtn.addEventListener('click', () => { if (state.step > 1) { state.step--; updateWizard(); }});
    bookBtn.addEventListener('click', () => {
      const modal = $('#booking-modal');
      if (modal) modal.hidden = false;
    });
  }

  // Booking modal
  $$('#booking-modal [data-close]').forEach(el => el.addEventListener('click', closeModal));
  function closeModal(){ $('#booking-modal').hidden = true; }
  $('#booking-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulate conversion event
    gtag('event', 'book_submit', { method: 'form' });
    alert('Thanks! We will contact you shortly.');
    closeModal();
  });

  // Sticky buttons
  $('#hero-quote')?.addEventListener('click', () => { document.getElementById('estimator-title')?.scrollIntoView({behavior:'smooth'}); });
  $('#open-estimator')?.addEventListener('click', () => { document.getElementById('estimator-title')?.scrollIntoView({behavior:'smooth'}); });
  $('#sticky-quote')?.addEventListener('click', () => { document.getElementById('estimator-title')?.scrollIntoView({behavior:'smooth'}); });

  // Leaflet mini map
  function initMap() {
    const el = document.getElementById('mini-map');
    if (!el) return;
    const map = L.map(el, { zoomControl: false, attributionControl: false }).setView([35.445, 139.64], 9);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', { maxZoom: 19 }).addTo(map);
    const region = L.circle([35.445, 139.64], { radius: 35000, color: '#EAB308', weight: 2, fillColor: '#EAB308', fillOpacity: 0.1 });
    region.addTo(map);
  }

  // Three.js Hero (lightweight placeholder)
  function initHero3D() {
    const canvas = document.getElementById('hero3dCanvas');
    if (!canvas || !window.THREE) return;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.set(0, 1.4, 3.2);

    const light = new THREE.DirectionalLight(0xffffff, 1.0);
    light.position.set(2, 3, 4);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    const boxGeo = new THREE.BoxGeometry(1.6, 0.8, 0.8);
    const mat = new THREE.MeshStandardMaterial({ color: 0x0F172A, metalness: 0.2, roughness: 0.6 });
    const truck = new THREE.Mesh(boxGeo, mat);
    truck.castShadow = true;
    scene.add(truck);

    const routeMat = new THREE.LineBasicMaterial({ color: 0xEAB308 });
    const points = [new THREE.Vector3(-1.2, -0.4, -0.6), new THREE.Vector3(-0.4, -0.2, -0.2), new THREE.Vector3(0.4, -0.1, 0.1), new THREE.Vector3(1.0, 0.0, 0.5)];
    const routeGeo = new THREE.BufferGeometry().setFromPoints(points);
    const route = new THREE.Line(routeGeo, routeMat);
    scene.add(route);

    let rotX = 0, rotY = 0, dragging = false, prevX = 0, prevY = 0;
    canvas.addEventListener('pointerdown', e => { dragging = true; prevX = e.clientX; prevY = e.clientY; });
    window.addEventListener('pointerup', () => { dragging = false; });
    window.addEventListener('pointermove', e => {
      if (!dragging) return;
      rotY += (e.clientX - prevX) * 0.005;
      rotX += (e.clientY - prevY) * 0.005;
      prevX = e.clientX; prevY = e.clientY;
    });

    function resize(){
      const w = canvas.clientWidth || canvas.parentElement.clientWidth;
      const h = canvas.clientHeight || canvas.parentElement.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h; camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', resize); resize();

    function animate() {
      requestAnimationFrame(animate);
      truck.rotation.x = rotX; truck.rotation.y = rotY;
      renderer.render(scene, camera);
    }
    animate();
  }

  // GSAP animations
  function initScrollAnims() {
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.skyline', { yPercent: -10, ease: 'none', scrollTrigger: { scrub: true } });
    gsap.from('.stat .num', { textContent: 0, duration: 1.2, ease: 'power3', stagger: 0.2, scrollTrigger: { trigger: '.hero-stats', start: 'top 80%' } });
    gsap.utils.toArray('.card').forEach((el) => {
      gsap.from(el, { y: 20, opacity: 0, duration: .6, ease: 'power2', scrollTrigger: { trigger: el, start: 'top 90%' } });
    });
  }

  // Assistant (placeholder)
  function initAssistant(){
    const fab = $('#assistant-fab');
    const panel = $('#assistant');
    const form = $('#assistant-form');
    const log = $('#assistant-log');
    const voiceBtn = $('#assistant-voice');
    $('#assistant-close')?.addEventListener('click', () => panel.hidden = true);
    fab?.addEventListener('click', () => panel.hidden = !panel.hidden);
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = $('#assistant-text').value.trim();
      if (!q) return;
      appendMsg('user', q);
      gtag('event', 'assistant_message', { q });
      // simple scripted replies; integrate backend later
      const reply = routeAssistant(q);
      setTimeout(() => appendMsg('bot', reply), 200);
      form.reset();
    });
    voiceBtn?.addEventListener('click', () => {
      const pressed = voiceBtn.getAttribute('aria-pressed') === 'true';
      voiceBtn.setAttribute('aria-pressed', String(!pressed));
    });

    function appendMsg(role, text){
      const div = document.createElement('div');
      div.className = `assistant-msg ${role}`;
      div.textContent = text;
      log.appendChild(div);
      log.scrollTop = log.scrollHeight;
    }
    function routeAssistant(q){
      const s = q.toLowerCase();
      if (s.includes('price') || s.includes('quote') || s.includes('料金') || s.includes('見積')) {
        document.getElementById('estimator-title')?.scrollIntoView({behavior:'smooth'});
        return 'I can start a quick estimate. Fill From/To, floors, items, then tap Book.';
      }
      if (s.includes('phone') || s.includes('電話')) return 'Call 080-2031-3680 or 080-4747-0109.';
      if (s.includes('line')) return 'LINE: open the green LINE icon in the contact dock.';
      if (s.includes('same-day') || s.includes('当日')) return 'Same-day may be available in Kanto — please share your pickup area and time.';
      return 'I can help with moving, disposal, or used appliances. Ask me for a quote!';
    }
  }

  // Init
  window.addEventListener('DOMContentLoaded', async () => {
    await loadLocale(state.lang);
    updateWizard();
    initMap();
    initHero3D();
    initScrollAnims();
    initAssistant();
  });
})();
