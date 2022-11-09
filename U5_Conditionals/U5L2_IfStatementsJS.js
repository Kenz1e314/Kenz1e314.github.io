//Conditional 1:  If a person is at least 18, they can vote
let age=20;
if (age >= 18){
    console.log("You are old enough to vote");
}

//2:  If your CS grade is 90 or above, you can go to the mall
let CS_grade = 95;
if (CS_grade >= 90){
    console.log("You can go to the mall");
}

//3:  Old enough to drive
age = 14;
if (age < 16){
    console.log("You cannot drive.");
}

//Personal Practice
let submitButton = document.getElementById("submitButton");
let response = document.getElementById("response");

submitButton.onclick = function(){
    let answerAge = document.getElementById("answerAge").value;
    if (answerAge >= 18){
        response.innerText = "You are old enough to vote";
    } else if (answerAge < 18){
        response.innerText = "You are not old enough to vote";
    } else {
        response.innerText = "Invalid answer.  Please try again.";
    }
}
