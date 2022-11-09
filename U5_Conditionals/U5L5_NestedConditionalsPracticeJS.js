let hint = document.getElementById("hint");
let hintAnswer = document.getElementById("hintAnswer");
hint.onclick = function(){
    hintAnswer.innerText = "Before starting, you should open the elements/console for this page.  Otherwise, you will have to close out of the prompts to access it.";
}


//First scenario: last binary digit of 31 (1, right, correct)
//Second scenario:  camelCase (0, left, correct) or PascalCase
//Third scenario:  is the red value less than 200 (0, left, correct) or greater than 200
//Fourth scenario:  What is the identity of 'Text Adventure'?  "password"--must get it right to win
console.log("camelCase");
let startButton = document.getElementById("startButton");
let endOfGame = document.getElementById("endOfGame");

startButton.onclick = function(){
    let background = alert("You are in a maze.  There are two identical paths in front of you, and at the crossroads you see a note:  'To navigate this maze, you will be given clues.  If you choose more than one incorrect answer, you will hit a dead end and lose; however, get no more than one wrong, and you will reach the end of the maze.'");
    let scen1 = prompt("'Your first clue:  if left is 0 and right is 1, which is the last binary digit of 31?  Please only include the number in your answer.'");
    if (scen1 == "0"){//incorrect--nowGracie
        let scen2 = prompt("You take the left path and see another note:  'You chose incorrectly.  If you miss one more, you are out.  Your second clue:  The password is either camelCase or PascalCase, and it is hidden in a nearby console.  Pick 0 (left) for camelCase or 1 (right) for PascalCase.")
        if (scen2 == "0"){//correct--onGracie
            let scen3 = prompt("You take the left path and see another note:  'You got the second clue right, but cannot afford to miss any more.  Here is your next clue:  Answer 0 (left) if the value of red for the heading 'Text Adventure' is less than 200 and 1 (right) if it is greater than 200.'");
                if (scen3 == "0"){//correct--onGracie
                    let scen4 = prompt("You take the left path and see a new message:  'Congratulations.  You only have one step left to complete the game, and that is to enter the password.  However, if you get it wrong, you will automatically lose.  To find the password, find the identity of 'Text Adventure'.'");
                    if (scen4 == "password"){
                        alert("You type 'password' into the panel on the door in front of you, and the door swings open.  Congratulations, you have escaped the maze!");
                    }else{
                        alert("You type '" + scen4 + "' into the panel on the door in front of you.  The panel turns red and shows a message:  'Sorry, that is wrong.  You have lost.'");
                    }
                }
                if (scen3 == "1"){//incorrect--out
                    let scen4 = alert("You take the right path and to your dismay see a sign that says, 'Dead end.  You lost the game.'");
                }
        }
        if (scen2 == "1"){//incorrect--out
            let scen3 = alert("You take the right path and to your dismay see a sign that says, 'Dead end.  You lost the game.'");
        }
    } else if (scen1 == "1"){//correct
        let scen2 = prompt("You take the right path and see another note:  'Your first choice was correct.  Here is your second clue:  The password is either camelCase or PascalCase, and it is hidden in a nearby console.  Pick 0 (left) for camelCase or 1 (right) for PascalCase.")
        if (scen2 == "0"){//correct
            let scen3 = prompt("You take the left path and see another note:  'You got the second clue right.  Here is your next clue:  Answer 0 (left) if the value of red for the heading 'Text Adventure' is less than 200 and 1 (right) if it is greater than 200.'");
            if (scen3 == "0"){//correct
                let scen4 = prompt("You take the left path and see a new message attached to a door:  'Congratulations.  You only have one step left to complete the game, and that is to enter the password.  However, if you get it wrong, you will automatically lose.  To find the password, find the identity of 'Text Adventure'.'");
                if (scen4 == "password"){
                    alert("You type 'password' into the panel on the door in front of you, and the door swings open.  Congratulations, you have escaped the maze!");
                }else{
                    alert("You type '" + scen4 + "' into the panel on the door in front of you.  The panel turns red and shows a message:  'Sorry, that is wrong.  You have lost.'");
                }
            }
            if (scen3 == "1"){//incorrect--nowGracie
                let scen4 = prompt("You take the right path and see a new message attached to a door:  'Your third choice was incorrect.  Fortunately for you, you only have one step left to complete the game, and that is to enter the password.  However, if you get it wrong, you will automatically lose.  To find the password, find the identity of 'Text Adventure'.'");
                if (scen4 == "password"){
                    let success = alert("You type 'password' into the panel on the door in front of you, and the door swings open.  Congratulations, you have escaped the maze!");
                }else{
                    let failure = alert("You type '" + scen4 + "' into the panel on the door in front of you.  The panel turns red and shows a message:  'Sorry, that is wrong.  You have lost.'");
                }
            }
        }
        if (scen2 == "1"){//incorrect--nowGracie
            let scen3 = prompt("You take the right path and see another note:  'You chose incorrectly.  If you miss one more, you are out.  Your third clue:  Answer 0 (left) if the value of red for the heading 'Text Adventure' is less than 200 and 1 (right) if it is greater than 200.'");
            if (scen3 == "0"){//correct--onGracie
                let scen4 = prompt("You take the left path and see a new message attached to a door:  'Congratulations.  You only have one step left to complete the game, and that is to enter the password.  However, if you get it wrong, you will automatically lose.  To find the password, find the identity of 'Text Adventure'.'");
                if (scen4 == "password"){
                    alert("You type 'password' into the panel on the door in front of you, and the door swings open.  Congratulations, you have escaped the maze!");
                }else{
                    alert("You type '" + scen4 + "' into the panel on the door in front of you.  The panel turns red and shows a message:  'Sorry, that is wrong.  You have lost.'");
                }
            }
            if (scen3 == "1"){//incorrect--out
                let scen4 = alert("You take the right path and to your dismay see a sign that says, 'Dead end.  You lost the game.'");
            }
        }
    }

    endOfGame.innerText = "Thanks for playing!  If you want to play the game again, just click the button again.";
}

