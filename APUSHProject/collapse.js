let KC1 = document.getElementById("KC1");
let KC1Bullet = document.getElementById("KC1Bullet");
let KC2 = document.getElementById("KC2");
let KC2Bullet = document.getElementById("KC2Bullet");
let KC3 = document.getElementById("KC3");
let KC3Bullet = document.getElementById("KC3Bullet");

KC1.onclick = function(){
    if (KC1Bullet.style.display === "block"){
        KC1Bullet.style.display = "none";
    } else {
        KC1Bullet.style.display = "block";
    }
}

KC2.onclick = function(){
    if (KC2Bullet.style.display === "block"){
        KC2Bullet.style.display = "none";
    } else {
        KC2Bullet.style.display = "block";
    }
}

KC3.onclick = function(){
    if (KC3Bullet.style.display === "block"){
        KC3Bullet.style.display = "none";
    } else {
        KC3Bullet.style.display = "block";
    }
}