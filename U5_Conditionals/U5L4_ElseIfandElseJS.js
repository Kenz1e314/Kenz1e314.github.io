let response = document.getElementById("response");

let password = prompt("What is your (NOT REAL) password?");
console.log(password);
alert("Your password is " + password + ".");//note:  when storing values w/ prompts, you may not be able to access those values right away.  This has to do something to do w/ the event loop
if (password == "myPassword"){
    alert("Correct.  You may enter.");
    response.innerText = "Correct.  You put in " + password + ".  The correct password is myPassword."
} else if(password == "mypassword" || password == "MyPassword" || password == "Mypassword"){
    response.innerText = "Incorrect.  Double check your capitalization."
} else if (password == "password"){
    response.innerText = "Incorrect.  Please tell me that isn't one of your real passwords."
}else{
    response.innerText = "Incorrect.  Please try again."
}
alert("Thank you for trying");
