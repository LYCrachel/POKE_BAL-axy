var caughtCount = 0;
var scene = new THREE.Scene();
var container = document.getElementById('container'), 
    renderer, 
    camera, 
    pokeball,
    count;

var innerColor;
var middleColor;

window.onload = function init() {

	innerColor = 0xffffff;
	middleColor = 0xffffff;
	count = 250;
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    //renderer.setClearColor(0xD8BFD8, 1);
    renderer.shadowMap.enabled = true;

    camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 1000);
    camera.position.z = 100;
    camera.position.x = -30;
    camera.position.y = 20;
    camera.lookAt(scene.position);
    scene.add(camera);

    container.appendChild(renderer.domElement);
    //document.getElementById("info").innerHTML = "";

    setLight();
	drawScene();
	render();

}

window.addEventListener('resize', onResize);


function onResize() {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);    
}

function drawScene(){
	drawPlane();
	drawPokeball(18, 50);
}

function setLight() {

    let spotLight = new THREE.SpotLight(0xffffff);
	spotLight.position.set(50, 50, 50);

	spotLight.castShadow = true;
	spotLight.shadow.mapSize.width = 128;
	spotLight.shadow.mapSize.height = 128;
	spotLight.shadow.camera.near = 100;
	spotLight.shadow.camera.far = 100;
	spotLight.shadow.camera.fov = 20;
	//scene.add(spotLight);

	let spotLight2 = new THREE.SpotLight(0xffffff);
	spotLight2.position.set(-50, 50, 50);

	spotLight2.castShadow = true;
	spotLight2.shadow.mapSize.width = 128;
	spotLight2.shadow.mapSize.height = 128;
	spotLight2.shadow.camera.near = 100;
	spotLight2.shadow.camera.far = 100;
	spotLight2.shadow.camera.fov = 20;
	//scene.add(spotLight2);

	let ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    let directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
    directionalLight.position.set(0, 0, 50);
    directionalLight.castShadow = true;
    directionalLight.shadow.darkness = 1;
    directionalLight.shadow.camera.right = 3;
    directionalLight.shadow.camera.left = -3;
    // directionalLight.shadow.camera.top  = 5;
    // directionalLight.shadow.camera.bottom = -5;
    scene.add(directionalLight);

}

function render() {

	if (!caughtCount){

		pokeball.translateX(0.5);
		pokeball.translateY(0.4);
		pokeball.translateZ(0.4);
		pokeball.rotation.x += 0.03;
		pokeball.rotation.y += 0.05;
		pokeball.rotation.z += 0.01;

	}

    renderer.render(scene, camera);
    requestAnimationFrame(render);
}



