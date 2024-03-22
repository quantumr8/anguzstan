import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Countdown timer.
function countdown() {
    const now = new Date();
    let year = now.getFullYear();
    const countdownDate = new Date(year, 2, 21, 15, 21, 0, 0); // March 21 at 3:21 PM

    // If the date has passed, set countdown to the same date next year
    if (now > countdownDate) {
        countdownDate.setFullYear(year + 1);
    }

    const diff = countdownDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
}

// Update the countdown every second
setInterval(countdown, 1000);

// Set up scene, camera, and renderer.
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('map').appendChild(renderer.domElement);

// Load 3D model.
const loader = new GLTFLoader();

let model;
loader.load('models/korean_fire_extinguisher_01_4k.gltf', function (gltf) {
    model = gltf.scene;
    scene.add(gltf.scene);
}, undefined, function (error) {
    console.error(error);
});

// Animation loop.
function animate() {
    requestAnimationFrame(animate);

    // Rotate model.
    if (model) {
        model.rotation.y += 0.01;
    }

    renderer.render(scene, camera);
}

animate();