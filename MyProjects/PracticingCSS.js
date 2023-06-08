let submitButton = document.getElementById("submitButton");
submitButton.onclick = function(){
    window.setTimeout(buttonClick, 3000);
    console.log("Please work");
    function buttonClick(){
        alert("Hello!");
    }
}

let body = document.getElementById("body");
body.onload = function(){
    window.setTimeout(shutPage, 300000);
    function shutPage(){
        body.innerHTML = "Sorry, you timed out.";
        body.style.setProperty('animation', 'none');
        body.style.setProperty('background-color', 'white');
    }
}

let div4 = document.getElementById("div4");
let changeStyle = document.getElementById("changeStyle");
changeStyle.onclick = function(){
    console.log("changeStyle");
    //document.getElementById("image").src = "sunset.jpg";
    div4.style.setProperty('background-color', 'rgb(255, 255, 255)');
    div4.innerHTML = '<p>Hello!  Click 6.1 to reset.</p> <br> <p><img id="image" src = "sunset.JPG"></img></p>';
}

let sixOne = document.getElementById("sixOne");
sixOne.onclick = function(){
    console.log("Back to normal");
    div4.style.setProperty('background-color', 'lightblue');
    div4.innerHTML = '<p>Four:  Lorem ipsum random text going on and on and on and on....</p><p><a href = "madeup"><img id = "image" src = "ornament.JPG"></a></p>';
}

let toggle = document.getElementById("toggle");
toggle.onclick = function(){
    if (div4.style.display === "none"){
        div4.style.display = "block";
    } else {
        div4.style.display = "none";
    }
}

let changeButtonStyle = document.getElementById("changeButtonStyle");
changeButtonStyle.onclick = function(){
    //button.style.setProperty('background-color', 'green');
    div6.style.gridRowStart = 7;
    div6.style.gridRowEnd = 12;
}

let threeOne = document.getElementById("threeOne");
threeOne.onclick = function(){
    div3.style.visibility = "hidden";
}
