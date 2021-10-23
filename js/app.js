// Get the HTML component first (by specific Id) in which you want to render your world
var main = document.getElementById("main");

// Create your scene
const scene = new THREE.Scene();

// Choose/Create and set your camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 50).setLength(100);

// Create the renderer which will draw your world on web browser
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// Pass the renderer to the HTML component of your app you have chossen earlier
main.appendChild(renderer.domElement);

// This will create imaginary oorbits around your world.
// Orbit controls allow the camera to orbit around a target.
controls = new THREE.OrbitControls(camera, renderer.domElement)

// this grid helper will help you in alligning your objects
//you can remove this peice of code after your are done with designing your world
var plane = new THREE.GridHelper(100, 10);
scene.add(plane);

// WOW! now you are done with all necessary setup

// This initialize function will initialize all your objects to your world
// All of your objects are created in the definition part of your init function
initialize();
// This animate fuction will recall itself on every next frame and
// it is supposed responsible to show every animation in your world.
animate();

// Now dive into your world and start creating creating your awesome world
// Declare all the object variables here first
var cube;
// Now initialize above objects in the function below
function initialize() {
  // My first 3D Object
  const cubeGeometry = new THREE.BoxGeometry(5, 5, 5);
  const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.y += 5;
  scene.add(cube);
}

// Specify all animation effect in the animation function you are seeing below
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  render();
}

function render() {
  renderer.render(scene, camera);
}
