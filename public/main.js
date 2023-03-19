
// "../node_modules/three/build/three.module.js
// import * as THREE from "C:/Users/91931/AppData/Local/Microsoft/TypeScript/4.9/node_modules/@types/three/index"

// import { content } from '@/tailwind.config';
import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js'
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm//controls/OrbitControls'
// https://unpkg.com/three@<version>/examples/jsm/
// import star from "/stars.jpg"

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,1000)
camera.position.set(-10,30,30);
const renderer = new THREE.WebGL1Renderer();
console.log(scene)
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();
console.log(orbit)

scene.add(camera)

// const spheregeometry = new THREE.SphereGeometry(5);
// const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff,wireframe:false})
// const sphere = new THREE.Mesh(spheregeometry,sphereMaterial)

// scene.add(sphere)

const textureLoader = new THREE.TextureLoader()
scene.background = textureLoader.load('/stars.jpg');


renderer.render(scene,camera)
