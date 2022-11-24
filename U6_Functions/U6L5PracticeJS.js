//Calculating area of rectangle
    //let length = document.getElementById("length");--not actually needed for this project
    //let width = document.getElementById("width");--not actually needed for this project
let submitlw = document.getElementById("submitlw");
let areaOutput = document.getElementById("area-output");

submitlw.onclick = function(){
    let l = document.getElementById("length").value;//do NOT define value at the top of the code--you want the code to look at the value when the button is pressed each time
    let w = document.getElementById("width").value;
    let area = l*w;
    areaOutput.value = area;
}

//Calculating volume of sphere
let submitr = document.getElementById("submitr");
let volumeOutput = document.getElementById("volume-output");

submitr.onclick = function(){
    let r = document.getElementById("radius").value;
    let volume = (4/3)*Math.PI*r**3;
    volumeOutput.value = volume;
}

//Calculating area of circle
let areaCircle = document.getElementById("area-circle");
let submitrCircle = document.getElementById("submitr-circle");
let areaOutputCircle = document.getElementById("area-output-circle");

submitrCircle.onclick = function(){
    let radius = document.getElementById("radius-circle").value;
    let areaCircle = Math.PI*radius**2;
    areaOutputCircle.value = areaCircle;
}