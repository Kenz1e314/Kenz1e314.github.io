let answer = 6;
let guess = prompt("Guess a number between 1 and 10.");

if (guess == 6){
    alert("Congratulations!  You are correct.");
} else if (guess > 6){
    alert("Your guess was too high.");
} else if (guess < 6){
    alert("Your guess was too low.");
} else {
    alert("Invalid guess.  Please try again.");
}
