import * as THREE from './three';
import {GLTFLoader} from './three/examples/jsm/loaders/GLTFLoader.js';

// Creating the scene
const scene = new THREE.Scene();
// Adding the camera. The type is a perspective camera with a 75 field of view. the new parameter is the aspect ratio of the screen (so innerWidth divided by innerHeight)
// Finally the two last parameters are the clipping parameters, so will things be visible close by or far from the camera.
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
//Rendering area, we can also make is smaller when the application is very greedy with ressources. The goal is to not cause problems for performances in the future, of course. For now, it can be set up with innerWidth and innerHeight, which means it will simply fil the screen.
renderer.setSize( window.innerWidth, window.innerHeight );
// Then you append the renderer to the document so it becomes visible and starts "existing" on the screen for the eyes of the viewer.
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(1,1,1);
// Creating a shape with the geometry of a cube.
const material = new THREE.MeshBasicMaterial({color: 0X6699ff});
// Setting up a base material for our cube.
const cube = new THREE.Mesh(geometry,material);
//Creating a cube by assembling the material and the geometry.

scene.add(cube);
// Adding the cube to the scene.

const material2 = new THREE.LineBasicMaterial({color: 0xffff00});

const points = [];
points.push(new THREE.Vector3(-10,0,0));
points.push(new THREE.Vector3(-10,5,0));
points.push(new THREE.Vector3(-5,5,15));
points.push(new THREE.Vector3(0,5,0));
points.push(new THREE.Vector3(10,0,0));

const geometry2 = new THREE.BufferGeometry().setFromPoints((points));

const line = new THREE.Line(geometry2, material2);

scene.add(line)

// const loader = new GLTFLoader();

// loader.load('./dicestuff.glb', function (gltf){
//     scene.add(gltf.scene);
// }, undefined, function (error) {
//     console.error(error)
// });

camera.position.z = 15
// Positionning the camera properly.

function animate(){
    requestAnimationFrame(animate);
    // creating recursive animation.
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene,camera);
    // Rendering the scene through the camera.
}

animate();