//Option 1:  Text Adventure
console.log("camelCase");

let opt0 = document.getElementById("opt1");
let opt1 = document.getElementById("opt2");
let response = document.getElementById("response");
let buttons = document.getElementById("buttons");

/**Round1*/opt0.onclick = function(){//incorrect--nowGracie
    response.value = "You take the left path and see another note:  'You chose incorrectly.  If you miss one more, you are out.  Your second clue:  The password is either camelCase or PascalCase, and it is hidden in a nearby console.  Pick 0 (left) for camelCase or 1 (right) for PascalCase.'";
    /**Round2*/opt0.onclick = function(){//correct--onGracie
        response.value = "You take the left path and see another note:  'You got the second clue right, but cannot afford to miss any more.  Here is your next clue:  Answer 0 (left) if the value of red for the heading 'Text Adventure' is less than 200 and 1 (right) if it is greater than 200.'";
        /**Round3*/opt0.onclick = function(){//correct--onGracie
            response.value = "You take the left path and see a new message:  'Congratulations.  You only have one step left to complete the game, and that is to enter the password.  However, if you get it wrong, you will automatically lose.  To find the password, find the identity of 'Text Adventure' and type it in this text box.  Press the 0 button to submit.'";
            /**Round4*/opt0.onclick = function(){
                if (response.value == "password"){
                    response.value = "You type 'password' into the panel on the door in front of you, and the door swings open.  Congratulations, you have escaped the maze!";
                    buttons.innerHTML = "";
                } else {
                    response.value = "You type your answer into the panel on the door in front of you.  The panel turns red and shows a message:  'Sorry, that is wrong.  You have lost.'";
                    buttons.innerHTML = "";
                }
            }
        }
        /**Round3*/opt1.onclick = function(){//incorrect--out
            response.value = "You take the right path and to your dismay see a sign that says, 'Dead end.  You lost the game.'";
            buttons.innerHTML = "";
        }
    }
    /**Round2*/opt1.onclick = function(){//incorrect--out
        response.value = "You take the right path and to your dismay see a sign that says, 'Dead end.  You lost the game.'";
        buttons.innerHTML = "";
    }
}

/**Round1*/opt1.onclick = function(){ //correct
    response.value = "You take the right path and see another note:  'Your first choice was correct.  Here is your second clue:  The password is either camelCase or PascalCase, and it is hidden in a nearby console.  Pick 0 (left) for camelCase or 1 (right) for PascalCase.";
    /**Round2*/opt0.onclick = function(){//correct
        response.value = "You take the left path and see another note:  'You got the second clue right.  Here is your next clue:  Answer 0 (left) if the value of red for the heading 'Text Adventure' is less than 200 and 1 (right) if it is greater than 200.'";
        /**Round3*/opt0.onclick = function(){//correct
            response.value = "You take the left path and see a new message:  'Congratulations.  You only have one step left to complete the game, and that is to enter the password.  However, if you get it wrong, you will automatically lose.  To find the password, find the identity of 'Text Adventure' and type it in this text box.  Press the 0 button to submit.'";
            /**Round4*/opt0.onclick = function(){
                if (response.value == "password"){
                    response.value = "You type 'password' into the panel on the door in front of you, and the door swings open.  Congratulations, you have escaped the maze!";
                    buttons.innerHTML = "";
                } else {
                    response.value = "You type your answer into the panel on the door in front of you.  The panel turns red and shows a message:  'Sorry, that is wrong.  You have lost.'";
                    buttons.innerHTML = "";
                }
            }
        }
        /**Round3*/opt1.onclick = function(){//incorrect--nowGracie
            response.value = "You take the right path and see a new message attached to a door:  'Your third choice was incorrect.  Fortunately for you, you only have one step left to complete the game, and that is to enter the password.  However, if you get it wrong, you will automatically lose.  To find the password, find the identity of 'Text Adventure' and type it in this text box.  Press the 0 button to submit.'";
            /**Round4*/opt0.onclick = function(){
                if (response.value == "password"){
                    response.value = "You type 'password' into the panel on the door in front of you, and the door swings open.  Congratulations, you have escaped the maze!";
                    buttons.innerHTML = "";
                } else {
                    response.value = "You type your answer into the panel on the door in front of you.  The panel turns red and shows a message:  'Sorry, that is wrong.  You have lost.'";
                    buttons.innerHTML = "";
                }
            }
        }
    }

    /**Round2*/opt1.onclick = function(){//incorrect--nowGracie
        response.value = "You take the right path and see another note:  'You chose incorrectly.  If you miss one more, you are out.  Your third clue:  Answer 0 (left) if the value of red for the heading 'Text Adventure' is less than 200 and 1 (right) if it is greater than 200.'";
        /**Round3*/opt0.onclick = function(){ //correct--onGracie
            response.value = "You take the left path and see a new message attached to a door:  'Congratulations.  You only have one step left to complete the game, and that is to enter the password.  However, if you get it wrong, you will automatically lose.  To find the password, find the identity of 'Text Adventure' and type it in this text box.  Press the 0 button to submit.'";
            /**Round4*/opt0.onclick = function(){
                if (response.value == "password"){
                    response.value = "You type 'password' into the panel on the door in front of you, and the door swings open.  Congratulations, you have escaped the maze!";
                    buttons.innerHTML = "";
                } else {
                    response.value = "You type your answer into the panel on the door in front of you.  The panel turns red and shows a message:  'Sorry, that is wrong.  You have lost.'";
                    buttons.innerHTML = "";
                }
            }
        }
        /**Round3*/opt1.onclick = function(){//incorrect--out
            response.value = "You take the right path and to your dismay see a sign that says, 'Dead end.  You lost the game.'";
        }
    }
}


//Challenge
let submitBtn = document.getElementById("submitBtn");
let outputAnswer = document.getElementById("outputAnswer");
submitBtn.onclick = function(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let d = b**2 - (4*a*c);
    let ivalue = Math.sqrt(-d);

    if (d >= 0){
        let answerPos = (-b + Math.sqrt(d)) / (2*a);
        let answerNeg = (-b - Math.sqrt(d)) / (2*a);
        outputAnswer.value = answerPos + ", " + answerNeg;
    } else if (d < 0){
        //let answerPosi = (-b + (Math.sqrt(-d)+"i")) / 2*a;
        //let answerNegi = (-b - (Math.sqrt(-d)+"i")) / 2*a;
        let answerPosi = "(" + -b + " + " + ivalue + "i) / " + 2*a;
        let answerNegi = "(" + -b + " - " + ivalue + "i) / " + 2*a;
        outputAnswer.value = answerPosi + ", " + answerNegi;
    }


}