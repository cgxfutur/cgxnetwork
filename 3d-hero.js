/**
 * SECOND CHANCE - 3D HERO
 * Interactive Three.js moving truck with route visualization
 */

(function() {
  'use strict';

  let scene, camera, renderer, truck, boxes = [];
  let routeLines = [];
  let isMouseOver = false;
  let mouseX = 0, mouseY = 0;
  let targetRotationX = 0, targetRotationY = 0;
  
  const init3DHero = () => {
    const container = document.getElementById('hero-3d');
    if (!container || typeof THREE === 'undefined') {
      console.warn('Three.js not loaded or container not found');
      return;
    }

    // Scene setup
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0F172A, 10, 50);

    // Camera
    camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 3, 10);
    camera.lookAt(0, 0, 0);

    // Renderer
    renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0F172A, 0);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(5, 10, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xEAB308, 0.4);
    directionalLight2.position.set(-5, 5, -5);
    scene.add(directionalLight2);

    // Create truck
    createTruck();

    // Create floating boxes
    createFloatingBoxes();

    // Create route lines
    createRouteLines();

    // Mouse interaction
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseenter', () => isMouseOver = true);
    container.addEventListener('mouseleave', () => isMouseOver = false);

    // Touch interaction for mobile
    container.addEventListener('touchmove', onTouchMove);

    // Handle resize
    window.addEventListener('resize', onWindowResize);

    // Start animation
    animate();
  };

  const createTruck = () => {
    const truckGroup = new THREE.Group();

    // Truck body (cargo area)
    const bodyGeometry = new THREE.BoxGeometry(2.5, 1.5, 1.2);
    const bodyMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffffff,
      shininess: 30
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 1;
    truckGroup.add(body);

    // Truck cab
    const cabGeometry = new THREE.BoxGeometry(1, 1.2, 1.2);
    const cabMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xEAB308,
      shininess: 50
    });
    const cab = new THREE.Mesh(cabGeometry, cabMaterial);
    cab.position.set(-1.5, 0.9, 0);
    truckGroup.add(cab);

    // Wheels
    const wheelGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.2, 16);
    const wheelMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x1E293B,
      shininess: 10
    });

    const wheelPositions = [
      [-1.2, 0.3, 0.7],
      [-1.2, 0.3, -0.7],
      [0.8, 0.3, 0.7],
      [0.8, 0.3, -0.7]
    ];

    wheelPositions.forEach(pos => {
      const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(pos[0], pos[1], pos[2]);
      truckGroup.add(wheel);
    });

    // Add accent stripes
    const stripeGeometry = new THREE.BoxGeometry(2.6, 0.1, 1.3);
    const stripeMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xEF4444,
      shininess: 80
    });
    const stripe = new THREE.Mesh(stripeGeometry, stripeMaterial);
    stripe.position.set(0, 1.3, 0);
    truckGroup.add(stripe);

    truckGroup.position.set(0, 0, 0);
    truck = truckGroup;
    scene.add(truck);
  };

  const createFloatingBoxes = () => {
    const boxGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.4);
    const materials = [
      new THREE.MeshPhongMaterial({ color: 0xEAB308, shininess: 30 }),
      new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 30 }),
      new THREE.MeshPhongMaterial({ color: 0xEF4444, shininess: 30 })
    ];

    for (let i = 0; i < 8; i++) {
      const box = new THREE.Mesh(
        boxGeometry, 
        materials[i % materials.length]
      );
      
      const angle = (i / 8) * Math.PI * 2;
      const radius = 4 + Math.random() * 2;
      
      box.position.set(
        Math.cos(angle) * radius,
        Math.random() * 3 - 1,
        Math.sin(angle) * radius
      );
      
      box.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      box.userData = {
        originalY: box.position.y,
        floatSpeed: 0.5 + Math.random() * 0.5,
        floatOffset: Math.random() * Math.PI * 2,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        }
      };
      
      boxes.push(box);
      scene.add(box);
    }
  };

  const createRouteLines = () => {
    const waypoints = [
      new THREE.Vector3(-6, 0, -3),  // Home
      new THREE.Vector3(-3, 2, 0),   // Elevator
      new THREE.Vector3(0, 1, 0),    // Truck
      new THREE.Vector3(3, 2, 1),    // Transport
      new THREE.Vector3(6, 0, 3)     // Recycling center
    ];

    const curve = new THREE.CatmullRomCurve3(waypoints);
    const points = curve.getPoints(50);
    
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0xEAB308,
      transparent: true,
      opacity: 0.3,
      linewidth: 2
    });
    
    const line = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(line);
    routeLines.push(line);

    // Add waypoint markers
    waypoints.forEach((point, index) => {
      const markerGeometry = new THREE.SphereGeometry(0.15, 16, 16);
      const markerMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xEAB308,
        emissive: 0xEAB308,
        emissiveIntensity: 0.5
      });
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      marker.position.copy(point);
      scene.add(marker);
      
      marker.userData = {
        pulseOffset: index * 0.5
      };
      routeLines.push(marker);
    });
  };

  const onMouseMove = (event) => {
    const container = document.getElementById('hero-3d');
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    targetRotationY = mouseX * 0.3;
    targetRotationX = mouseY * 0.2;
  };

  const onTouchMove = (event) => {
    if (event.touches.length > 0) {
      const container = document.getElementById('hero-3d');
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      mouseX = ((event.touches[0].clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((event.touches[0].clientY - rect.top) / rect.height) * 2 + 1;
      
      targetRotationY = mouseX * 0.3;
      targetRotationX = mouseY * 0.2;
    }
  };

  const onWindowResize = () => {
    const container = document.getElementById('hero-3d');
    if (!container) return;
    
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  };

  const animate = () => {
    requestAnimationFrame(animate);

    const time = Date.now() * 0.001;

    // Truck rotation (smooth follow mouse)
    if (truck) {
      if (isMouseOver) {
        truck.rotation.y += (targetRotationY - truck.rotation.y) * 0.05;
        truck.rotation.x += (targetRotationX - truck.rotation.x) * 0.05;
      } else {
        // Gentle auto-rotation when not hovering
        truck.rotation.y += (Math.sin(time * 0.3) * 0.5 - truck.rotation.y) * 0.02;
        truck.rotation.x += (Math.sin(time * 0.2) * 0.1 - truck.rotation.x) * 0.02;
      }
      
      // Gentle bobbing
      truck.position.y = Math.sin(time * 0.5) * 0.1;
    }

    // Animate floating boxes
    boxes.forEach(box => {
      // Float up and down
      box.position.y = box.userData.originalY + 
        Math.sin(time * box.userData.floatSpeed + box.userData.floatOffset) * 0.5;
      
      // Rotate
      box.rotation.x += box.userData.rotationSpeed.x;
      box.rotation.y += box.userData.rotationSpeed.y;
      box.rotation.z += box.userData.rotationSpeed.z;
    });

    // Animate waypoint markers (pulsing)
    routeLines.forEach(obj => {
      if (obj.geometry && obj.geometry.type === 'SphereGeometry' && obj.userData.pulseOffset !== undefined) {
        const scale = 1 + Math.sin(time * 2 + obj.userData.pulseOffset) * 0.2;
        obj.scale.set(scale, scale, scale);
      }
    });

    // Camera gentle movement
    camera.position.y = 3 + Math.sin(time * 0.3) * 0.2;
    camera.lookAt(0, 0.5, 0);

    renderer.render(scene, camera);
  };

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init3DHero);
  } else {
    init3DHero();
  }
})();