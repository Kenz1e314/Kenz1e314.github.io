let btnV = document.getElementById("btnV");
let btnA = document.getElementById("btnA");
//let btnACircle = document.getElementById("btnACircle");

btnV.onclick = function(){
    function calc_volume(side){
        let volume = side**3;
        alert("The volume of a cube with side length " +side+ " is " +volume+".");
    }
    calc_volume(4);
}

btnA.onclick = function(){
    function calc_area(height, length){
        let area = 0.5*height*length;
        alert("The area of a triangle with height " +height+ " and length " +length+ " is " +area+ ".");
    }
    calc_area(4, 3);
}



