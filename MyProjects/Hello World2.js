const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.height = 400;
canvas.width = 400;

let Objects = function(xPos, yPos, speedX, speedY){
    this.xPos = xPos;
    this.yPos = yPos;
    this.speedX = speedX;
    this.speedY = speedY;
}

let speed = 3;

let Object1 = new Objects(0, 100, 3, -3);
let Object2 = new Objects(400, 300, 3, 3);
let Object3 = new Objects(400, 100, 3, 3);
let Object4 = new Objects(0, 300, 3, -3);

let Object5 = new Objects(200, 0, 3, 3);
let Object6 = new Objects(400, 200, -3, 3);
let Object7 = new Objects(200, 400, -3, -3);
let Object8 = new Objects(0, 200, 3, -3);

let Object9 = new Objects(0, 300, -3, 3);
let Object10 = new Objects(400, 100, -3, -3);
let Object11 = new Objects(400, 300, -3, -3);
let Object12 = new Objects(0, 100, -3, 3);

let Object13 = new Objects(200, 0, -3, -3);
let Object14 = new Objects(400, 200, 3, -3);
let Object15 = new Objects(200, 400, 3, 3);
let Object16 = new Objects(0, 200, -3, 3);

function drawCircle(x, y, size){
    ctx.fillStyle = 'white';
    ctx.lineWidth = 0;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI*2);
    ctx.endPath;
    ctx.fill();
}

function sky2(){
    const gradient = ctx.createRadialGradient(200, 300, 54.28, 200, 300, 264);
    gradient.addColorStop(0, 'rgb(249.86, 170.74, 109.42)');
    gradient.addColorStop(1, 'rgb(145, 60, 130)')
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSun(){
    ctx.fillStyle = 'rgb(255, 255, 0)';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 0;
    ctx.beginPath();
    ctx.arc(200, 330, 50, 0, 2*Math.PI);
    ctx.closePath;
    ctx.fill();
}

function hill1(){
    ctx.lineWidth = 0;
    let region = new Path2D();
    region.moveTo(-20,400);
    region.bezierCurveTo(20,200, 150,300, 250,400);
    region.closePath();
    ctx.fillStyle = 'rgb(7, 133, 11)';
    ctx.fill(region);
    //ctx.stroke();
}

function hill2(){
    ctx.lineWidth = 0;
    let region2 = new Path2D();
    region2.moveTo(175,400);
    region2.bezierCurveTo(300,200, 370,190, 480,400);
    region2.closePath();
    ctx.beginPath;
    ctx.fillStyle = 'rgb(6, 143, 12)';
    ctx.fill(region2);
}



function animate(){

    function speedInScreen(Objects){
        drawCircle(Objects.xPos, Objects.yPos, 12.5);
        Objects.xPos += Objects.speedX;
        Objects.yPos += Objects.speedY;
        if (Objects.xPos < 0){
            Objects.speedX *= -1;
        }
        if (Objects.yPos < 0){
            Objects.speedY *= -1;
        }
        if (Objects.xPos > 400){
            Objects.speedX *= -1;
        }
        if (Objects.yPos > 400){
            Objects.speedY *= -1;
        }

    };

    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    sky2();
    drawSun();
    hill1();
    hill2();

    speedInScreen(Object1);
    speedInScreen(Object2);
    speedInScreen(Object3);
    speedInScreen(Object4);
    
    speedInScreen(Object5);
    speedInScreen(Object6);
    speedInScreen(Object7);
    speedInScreen(Object8);
    
    speedInScreen(Object9);
    speedInScreen(Object10);
    speedInScreen(Object11);
    speedInScreen(Object12);
    
    speedInScreen(Object13);
    speedInScreen(Object14);
    speedInScreen(Object15);
    speedInScreen(Object16);


    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    const alignX = canvas.width / 2;
    ctx.textAlign = 'center';
    ctx.fillText("Hello, world!", alignX, 200);
    requestAnimationFrame(animate);
};
animate();