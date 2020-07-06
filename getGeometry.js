


function drawPokeball(POKE_SIZE, POKE_SEG) {
    pokeball = new THREE.Group();

    let UpperGeo = new THREE.SphereGeometry(POKE_SIZE, POKE_SEG, POKE_SEG, 0, Math.PI * 2, 0, (Math.PI / 2) * 0.97), 
        UpperClosingGeom = new THREE.CircleGeometry(POKE_SIZE, POKE_SEG), 
        UpperMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
    
    UpperMaterial.side = THREE.DoubleSide;

    let UpperBall = new THREE.Mesh(UpperGeo, UpperMaterial);

    let UpperClosing = new THREE.Mesh(UpperClosingGeom, UpperMaterial);
    UpperClosing.rotateX(THREE.Math.degToRad(90));
    UpperClosing.position.set(0, POKE_SIZE - POKE_SIZE * 0.95, 0);


    let LowerGeo = new THREE.SphereGeometry(POKE_SIZE, POKE_SEG, POKE_SEG, 0, Math.PI * 2, (Math.PI / 2) * 1.03, Math.PI / 2), 
        LowerClosingGeom = new THREE.CircleGeometry(POKE_SIZE, POKE_SEG), 
        LowerMatrial = new THREE.MeshLambertMaterial({color: 0xffffff});
    
    LowerMatrial.side = THREE.DoubleSide;

    let LowerBall = new THREE.Mesh(LowerGeo, LowerMatrial);

    let LowerClosing = new THREE.Mesh(LowerClosingGeom, LowerMatrial);
    LowerClosing.rotateX( THREE.Math.degToRad(90) );
    LowerClosing.position.set(0, -(POKE_SIZE - POKE_SIZE * 0.95), 0);

    let InnerGeom = new THREE.SphereGeometry(POKE_SIZE * 0.95, POKE_SEG, POKE_SEG), 
        InnerMaterial = new THREE.MeshLambertMaterial({color: 0x000000});

    let InnerBall = new THREE.Mesh(InnerGeom, InnerMaterial);
    InnerBall.name = 'InnerBall';

    let button = new THREE.Group();
    button.name = 'button';

    let OuterBtnGeom = new THREE.CylinderGeometry(5, 5, 3, POKE_SEG), 
        OuterBtnMaterial = new THREE.MeshLambertMaterial({color: 0x000000});

    let OuterBtn = new THREE.Mesh(OuterBtnGeom, OuterBtnMaterial);

    let MiddleBtnGeo = new THREE.CylinderGeometry(3, 3, 3, POKE_SEG), 
        MiddleBtnMaterial  = new THREE.MeshLambertMaterial({color: 0xffffff});

    let MiddleBtn  = new THREE.Mesh(MiddleBtnGeo, MiddleBtnMaterial);
    MiddleBtn.position.y = 0.8;
    MiddleBtn.name = 'MiddleBtn';

    let InnerBtnGeom = new THREE.CylinderGeometry(2, 2, 3, POKE_SEG), 
        InnerBtnMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});

    let InnerBtn = new THREE.Mesh(InnerBtnGeom, InnerBtnMaterial);
    InnerBtn.position.y = 1;
    InnerBtn.name = 'InnerBtn';

    button.rotateX(THREE.Math.degToRad(90));
    button.position.set(0, 0, POKE_SIZE * 0.93);
    button.add(OuterBtn);
    button.add(MiddleBtn);
    button.add(InnerBtn);

    pokeball.add(UpperBall);
    pokeball.add(UpperClosing);
    pokeball.add(LowerBall);
    pokeball.add(LowerClosing);
    pokeball.add(InnerBall);
    pokeball.add(button);
    scene.add(pokeball);

}

function drawPlane(){
    var circleGeo = new THREE.CircleGeometry(20, 32);
    var circleMaterial = new THREE.MeshBasicMaterial( {transparent: true, color: 0x000000, side: THREE.DoubleSide} );
    circleMaterial.opacity = 0.3;
    var circle = new THREE.Mesh(circleGeo, circleMaterial);
    circle.position.set(30, 33, 50);
    scene.add(circle);
}

function drawBackground(a, b, c){

    var x = a,
        y = b;

    var starGeo = new THREE.Shape();

    starGeo.moveTo(0, 4);
    starGeo.lineTo(3, -4);
    starGeo.lineTo(-2, -1);

    starGeo.lineTo(-4, 1);
    starGeo.lineTo(-1, 1);

    starGeo.lineTo(4, 1);
    starGeo.lineTo(-3, -4);

    var geometry = new THREE.ShapeGeometry(starGeo);
    var starColor = "#000000".replace(/0/g, function(){
        return (~~(Math.random() * 16)).toString(16);
    });
    var material = new THREE.MeshBasicMaterial({ color: starColor });
    var mesh = new THREE.Mesh(geometry, material) ;
    mesh.position.set(7 * a, 7 * b, c);
    var starRotate = Math.random() * 10;
    mesh.rotation.z = starRotate;
    scene.add( mesh );
    console.log("mesh pos:", mesh.position);

}
