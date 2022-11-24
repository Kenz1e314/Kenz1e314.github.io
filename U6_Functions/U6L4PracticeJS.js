let clickMeBtn = document.getElementById("my-Btn"); //gets button w/ id "myBtn" from html document (but renames it as clickMeBtn)
clickMeBtn.onclick = function(){
    console.log("Hello, World!");
}

let heading = document.getElementById("heading");
heading.onclick = function(){
   heading.innerHTML = "<h4>Hello!  You clicked me! <button id='secretBtn'>Click me</button></h4>";
   let secretBtn = document.getElementById("secretBtn");
   secretBtn.onclick = function(){
       console.log("Hello"); 
   }
}


//Assessment
let myButton = document.getElementById("my-button");
myButton.onclick = function(){
    console.log("You clicked the button!");
}

