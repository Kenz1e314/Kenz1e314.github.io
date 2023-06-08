document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.height = 400;
canvas.width = 400;


class Circles{
    constructor(t){
        this.t = t;
    }
}
let Circle1 = new Circles(0);
let Circle2 = new Circles(Math.PI / 4);
let Circle3 = new Circles(Math.PI / 2);
let Circle4 = new Circles(Math.PI*3 / 4);
let Circle5 = new Circles(Math.PI);
let Circle6 = new Circles(Math.PI*5 / 4);
let Circle7 = new Circles(Math.PI*3 / 2);
let Circle8 = new Circles(Math.PI*7 / 4);

let CircleArray = [Circle1, Circle2, Circle3, Circle4, Circle5, Circle6, Circle7, Circle8];

function animate(){
    function drawCircles(x, y){
        ctx.fillStyle = "red";
        ctx.lineWidth = 0;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI*2);
        ctx.closePath;
        ctx.fill();
    }
    function animateCircles(Circles){
        drawCircles((100*Math.cos(2*Circles.t))*Math.cos(Circles.t) +200, (100*Math.cos(2*Circles.t))*Math.sin(Circles.t) +200);
        let slowFactor = 80;
        Circles.t += Math.PI / (8*slowFactor);
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);//delete this to trace the path

    for(i=0; i<CircleArray.length; i++){
        animateCircles(CircleArray[i]);
    }

    requestAnimationFrame(animate);
}
animate();
