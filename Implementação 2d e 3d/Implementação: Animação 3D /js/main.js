import * as THREE from 'three'
import { OrbitControls } from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'https://unpkg.com/three@0.138.0/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'https://unpkg.com/three@0.138.0/examples/jsm/loaders/MTLLoader.js'; // Corrigi o caminho do MTLLoader.

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    2000
);

camera.position.set(0, 0, 1000); 

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

const light1 = new THREE.PointLight(0xc4c4c4, 1);
light1.position.set(0, 300, 500);
scene.add(light1);
const light2 = new THREE.PointLight(0xc4c4c4, 1);
light2.position.set(500, 100, 0);
scene.add(light2);

const light3 = new THREE.PointLight(0xc4c4c4, 1);
light3.position.set(0, 100, -500);
scene.add(light3);

const light4 = new THREE.PointLight(0xF3F3F3, 1);
light4.position.set(-500, 300, 500);
scene.add(light4);

const light5 = new THREE.PointLight(0xF3F3F3, 1);
light5.position.set(-0, 0, 0);
scene.add(light5);

const light6 = new THREE.PointLight(0xc4c4c4, 1);
light6.position.set(350, 0, 0);
scene.add(light6);

const light7 = new THREE.PointLight(0xc4c4c4, 1);
light7.position.set(-350, 0, 0);
scene.add(light7);

//Holograma
const mtlloader = new MTLLoader();
mtlloader.setPath('./img/');
mtlloader.load('Hologramm.mtl', (materials) => {
    materials.preload();
    
    const objLoader = new OBJLoader();
    objLoader.setMaterials(materials); 
    objLoader.setPath('./img/'); 
    objLoader.load(
        'Hologramm.obj',
        (object) => {
            object.scale.set(10, 10, 10);
            scene.add(object);
        },
        (xhr) => {
            console.log(`Carregando objeto: ${(xhr.loaded / xhr.total) * 100}% carregados`);
        },
        (err) => {
            console.log(`Aconteceu um erro no obj: ${err}`);
        }
    );
}, (xhr) => {
    console.log(`Carregando material: ${(xhr.loaded / xhr.total) * 100}% carregados`);
},
(err) => {
    console.log(`Aconteceu um erro no material: ${err}`);
});
//Helicóptero
mtlloader.setPath('./img/');
mtlloader.load('Heli_bell.mtl', (materials) => {
    materials.preload();
    
    const objLoader = new OBJLoader();
    objLoader.setMaterials(materials); 
    objLoader.setPath('./img/'); 
    objLoader.load(
        'Heli_bell.obj',
        (object) => {
            object.scale.set(10, 10, 10);
            object.position.set(350, 0, 0)
            scene.add(object);
        },
        (xhr) => {
            console.log(`Carregando objeto: ${(xhr.loaded / xhr.total) * 100}% carregados`);
        },
        (err) => {
            console.log(`Aconteceu um erro no obj: ${err}`);
        }
    );
}, (xhr) => {
    console.log(`Carregando material: ${(xhr.loaded / xhr.total) * 100}% carregados`);
},
(err) => {
    console.log(`Aconteceu um erro no material: ${err}`);
});

//Carro Futurista
mtlloader.setPath('./img/');
mtlloader.load('Futuristi.mtl', (materials) => {
    materials.preload();
    
    const objLoader = new OBJLoader();
    objLoader.setMaterials(materials); 
    objLoader.setPath('./img/');
    objLoader.load(
        'Futuristi.obj',
        (object) => {
            object.scale.set(10, 10, 10);
            object.position.set(0, 0, 200)
            scene.add(object);
        },
        (xhr) => {
            console.log(`Carregando objeto: ${(xhr.loaded / xhr.total) * 100}% carregados`);
        },
        (err) => {
            console.log(`Aconteceu um erro no obj: ${err}`);
        }
    );
}, (xhr) => {
    console.log(`Carregando material: ${(xhr.loaded / xhr.total) * 100}% carregados`);
},
(err) => {
    console.log(`Aconteceu um erro no material: ${err}`);
});

// Configuração da geometria e criação da plataforma
const plataformaGeometry = new THREE.BoxGeometry(1100, 0, 1100);
const plataformaMaterial = new THREE.MeshBasicMaterial({ color: 0x888888 });
const plataforma = new THREE.Mesh(plataformaGeometry, plataformaMaterial);
scene.add(plataforma);

// Posicionamento da câmera
camera.position.z = 800;
camera.position.y = 600;
camera.position.x = 100;

function rotateObjects() {
    scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
            object.rotation.y += 0.001;
        }
    });
}

const animate = function animate() {
    requestAnimationFrame(animate);
    rotateObjects()
    controls.update();
    renderer.render(scene, camera);
}

animate();
