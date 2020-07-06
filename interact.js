
// ----- interaction

window.addEventListener("mousedown", function(event){
    onClick(event);
});

function onClick(e){
    x = (e.clientX - window.innerWidth/2)/(window.innerWidth/20);
    y = (-e.clientY + window.innerHeight/2)/(window.innerHeight/20);

    pokeball.updateMatrixWorld();
    var ballWorld = pokeball.getWorldPosition();
    console.log("calculated mouse:", x, y);
    console.log("calculated mouse:", x, y);

    let diffX = Math.abs(x - ballWorld.x);
        diffY = Math.abs(y - ballWorld.y);
    if (diffX <= 3.5 || diffY <= 3.5){
        //console.log("inside chaging");
        scene.getObjectByName('InnerBtn').material.color.setHex('0x990000');
        //scene.getObjectByName('MiddleBtn').material.color.setHex('0xF0E68C');
        scene.getObjectByName('InnerBall').material.color.setHex('0xF0E68C');
        caughtCount = true;
        drawBackground(x, y, ballWorld.z);

    }
    else{
        //scene.getObjectByName('MiddleBtn').material.color.setHex('0xffffff');
        scene.getObjectByName('InnerBtn').material.color.setHex('0xffffff');
        scene.getObjectByName('InnerBall').material.color.setHex('0x000000');
        caughtCount = false;
    }
}
