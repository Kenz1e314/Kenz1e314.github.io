//Getting items from the document
let paragraph = document.getElementById("paragraph");
let notes = document.getElementById("notes");
let buttonA = document.getElementById("buttonA");
let buttonB = document.getElementById("buttonB");
let buttonC = document.getElementById("buttonC");
let buttonD = document.getElementById("buttonD");
let buttonE = document.getElementById("buttonE");
let buttons = document.querySelectorAll(".button");
let startButton = document.getElementById("startButton");
let pieChart = document.getElementById("pieChart");

//Questions
let q1 = "<b><i>Question 1:  You wake up in your dormitory and look at your clock. To your shock, you realize that you overslept and you may miss your first class of the day! What do you do?</i></b> <br><br>a. FREAK OUT!!!!! <br>b. Freak out, but get it under control <br>c. Calmly think, “I can do this.” <br>d. Fake being sick  <br>e. Eh, I’ll skip class";
let q2 = "<b><i>Question 2:  What do you have to do to get ready, and how do you do it?</i></b> <br><br>a. I’m almost completely ready to start with – I do most things the night before. <br>b. I’m not really ready, but I am going to leave as is! <br>c. I’m going to get ready just enough to meet dress code. <br>d. I’ll get ready quickly, but thoroughly. <br>e. I’ll take my time – appearance is important.";
let q3 = "<b><i>You have to go down a flight of stairs. How do you approach the situation?</i></b> <br><br>a. Slide down the banister! <br>b. Run down the stairs as fast as I can <br>c. Run down, but holding the rail as I go <br>d. Quickly walk down <br>e. Casually walk down";
let q4 = "<b><i>You reach the end of the stairs and start going down the hallway. How fast are you going? Note: School rules say no running, but the rule has a history of being broken.</i></b> <br><br>a. Sprinting <br>b. Running <br>c. Speed-walking <br>d. Walking with purpose <br>e. Casually walking";
let q5 = "<b><i>As you are going down the hall, a friend says hi to you. How do you respond?</i></b> <br><br>a. Just wave to them – they can probably figure out that I’m late for class <br>b. Tell them I have to go, but do not slow down or stop <br>c. Slow down to talk with them while walking <br>d. Completely stop to talk with them, but try to make the conversation quick <br>e. Stop to talk with them and do not pay attention to the time";
let q6 = "<b><i>You run into your worst enemy, who makes a mean remark about you as you pass them. What do you do?</i></b> <br><br>a. Ignore them <br>b. Say, “Same at you” or another automatic response <br>c. Think of a good comeback (this will slow you down a bit) <br>d. Get into an argument with them <br>e. Get into a physical fight with them";
let q7 = "<b><i>A person that you’ve had a crush on for a while says hi to you in the hallway. How do you respond?</i></b> <br><br>a. Ignore them <br>b. Tell them, “Get out of my way!” <br>c. Tell them, “Sorry, I can’t talk right now. Can we talk later?” <br>d. Slow down to talk with them, but keep walking <br>e. Completely stop to talk to them";
let q8 = "<b><i>You are getting pretty close to class just as you realize that you left your homework in your dormitory! What do you do?</i></b> <br><br>a. Go to class anyways – being on time without it is better than being late with it <br>b. Go back to get it <br>c. Give up <br>d. Call a friend to get it for you and go to class <br>e. Call a friend and tell them to distract the teacher while you go get your homework";
let q9 = "<b><i>You see several flights of stairs going up ahead of you. You know that they lead to class, but there may be another way. What do you do?</i></b> <br><br>a. Sprint up the stairs <br>b. Marathon up the stairs <br>c. Try to find another way up – another path, an elevator, using a grappling hook, etc. <br>d. Walk up <br>e. Give up";
let questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9];


//Score Scripts
let tie = "<b><u>You had a tie for ";
let hawk = "<b>Congratulations!  You are a hawk!</b>";
let python = "<b>Congratulations!  You are a python!</b>";
let cheetah = "<b>Congratulations!  You are a cheetah!</b>";
let turtle = "<b>Congratulations!  You are a turtle!</b>";
let seal = "<b>Congratulations!  You are a seal!</b>";
let wolf = "<b>Congratulations!  You are a wolf</b>!";
let owl = "<b>Congratulations!  You are an owl!</b>";
let pillars = [hawk, python, cheetah, turtle, seal, wolf, owl];

let h = "hawk";
let p = "python";
let c = "cheetah";
let t = "turtle";
let s = "seal";
let w = "wolf";
let o = "owl";
let names = [h, p, c, t, s, w, o];

let message = "";


//Scores
let oneA = [ 0, -1, -1,  1,  1,  0,  3];
let oneB = [ 1, -1, -1,  0,  2,  2,  2];
let oneC = [ 0,  2,  3,  2,  2,  0,  1];
let oneD = [ 3,  3,  0,  1, -1, -1, -1];
let oneE = [ 1,  2,  2,  2,  0, -1, -2];
let one = [oneA, oneB, oneC, oneD, oneE];

let twoA = [ 2, -2, -2,  0,  1,  2,  3];
let twoB = [-1,  2,  1, -2, -1, -1, -1];
let twoC = [-1, -1,  0, -1,  2,  1,  3];
let twoD = [ 1,  0,  1,  1,  2,  2,  0];
let twoE = [-1,  1, -2,  3,  0, -1, -1];
let two = [twoA, twoB, twoC, twoD, twoE];

let threeA = [ 0,  3,  3,  2, -1, -1, -1];
let threeB = [ 2,  2,  2,  0,  0,  0,  1];
let threeC = [ 2, -1,  0,  0,  1,  1,  2];
let threeD = [ 1,  0,  0,  1,  3,  2,  3];
let threeE = [-1, -2, -1,  3,  0,  0,  0];
let three = [threeA, threeB, threeC, threeD, threeE];

let fourA = [-1,  3,  3, -1, -1, -1, -1];
let fourB = [ 1,  2,  2, -1, -1,  0, -1];
let fourC = [ 2,  0,  0,  2,  2,  2,  2];
let fourD = [ 0, -1, -1,  2,  2,  3,  2];
let fourE = [-2,  0, -2,  1,  1,  0,  0];
let four = [fourA, fourB, fourC, fourD, fourE];

let fiveA = [ 2,  0,  0, -1,  2,  3,  2];
let fiveB = [ 1,  0,  2, -2,  3,  3,  2];
let fiveC = [ 1,  2,  2,  2,  1,  0,  0];
let fiveD = [ 0,  1,  1,  3,  2, -1, -1];
let fiveE = [-2,  0,  0,  2, -1, -2, -2];
let five = [fiveA, fiveB, fiveC, fiveD, fiveE];

let sixA = [ 2, -1, -2, -1,  3,  3,  2];
let sixB = [ 1,  0,  2,  1, -1,  2,  3];
let sixC = [ 3,  2,  1,  1, -1,  0,  1];
let sixD = [ 1,  2,  0,  2, -2,  0,  0];
let sixE = [-1,  2,  3, -1, -2, -2, -1];
let six = [sixA, sixB, sixC, sixD, sixE];

let sevenA = [ 2,  2, -1, -2,  0,  2,  2];
let sevenB = [ 1,  2, -1, -2, -2,  1,  2];
let sevenC = [ 2,  0,  1, -1,  3,  2,  2];
let sevenD = [-1, -1,  2,  2,  2,  0, -1];
let sevenE = [-2, -1,  1,  2,  1, -1, -1];
let seven = [sevenA, sevenB, sevenC, sevenD, sevenE];

let eightA = [ 1,  1,  1,  0,  1,  1,  1];
let eightB = [-1, -1,  1, -2,  0,  1,  2];
let eightC = [ 0,  1, -2,  1,  2,  0,  0];
let eightD = [ 2,  2,  1,  3,  1,  2,  1];
let eightE = [ 3,  2,  2,  2, -1,  1,  1];
let eight = [eightA, eightB, eightC, eightD, eightE];

let nineA = [ 0,  2,  3,  0,  0,  0, -1];
let nineB = [ 2,  0,  2,  0,  2,  3,  2];
let nineC = [ 3,  3,  2,  1,  1,  1,  0];
let nineD = [ 1, -1,  1,  2,  2,  2,  1];
let nineE = [ 0,  0,  1,  2,  0,  0, -1];
let nine = [nineA, nineB, nineC, nineD, nineE];


//Calculating Scores
let compiledList = [one, two, three, four, five, six, seven, eight, nine];
let totals = [];
let finalTally = function(){
    let final = [0, 0, 0, 0, 0, 0, 0];
    for(col=0; col<totals[0].length; col++){
        for(row=0; row<totals.length; row++){
            final[col] += totals[row][col];
        }
        //adjusting for pie chart
        final[col] += 10;
    }
    //paragraph.innerHTML = final;
    console.log(final);

    
    /** Assessing highest score(s) */
        //finding max score
        let max = final[0];
        for(i=1; i<final.length; i++){
            if(final[i] > max){
                max = final[i];
            }
        }
        console.log(max);
        //recording the index/indices at which this score occurs
        let index = [];
        for(j=0; j<final.length; j++){
            if(final[j] == max){
                index.push(j);//Thanks to Chat GPT for pointing out that I accidentally put final[j] instead of j the first time around
            }
        }
        console.log(index);
        //Creating a message based on the highest score(s)
        message = "";
        if(index.length == 1){
            message += pillars[index[0]];
        } else {
            message += tie;
            for(k=0; k<index.length-1; k++){
                message = message + " " + names[index[k]] + ",";
            }
            message = message + " and " + names[index[index.length-1]] + ".</b></u>";
            message += "<br><br>";
            for(l=0; l<index.length; l++){
                message += pillars[index[l]] + "<br><br>";
            }
        }
        paragraph.innerHTML = message;

    //PIE CHART
    /*CODE FROM W3 SCHOOLS*/
    //Load Google Charts
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    // Draw the chart and set the chart values
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
        ['Pillar', 'Score'],
        ['Hawk', final[0]],
        ['Python', final[1]],
        ['Cheetah', final[2]],
        ['Turtle', final[3]],
        ['Seal', final[4]],
        ['Wolf', final[5]],
        ['Owl', final[6]]
        ]);

        // Optional; add a title and set the width and height of the chart
        let options = {'title':'Score by Pillar', 'width':350, 'height':350};

        // Display the chart inside the <div> element with id="piechart"
        let chart = new google.visualization.PieChart(document.getElementById('pieChart'));
        chart.draw(data, options);
    }
    /*END CODE FROM W3 SCHOOLS*/
    pieChart.style.display = "block";

}

//Running the Program
startButton.onclick = function(){
    //Resetting some stuff
    console.clear();
    totals = [];    
    notes.style.display = "block";
    buttonA.style.display = "inline-block";
    buttonB.style.display = "inline-block";
    buttonC.style.display = "inline-block";
    buttonD.style.display = "inline-block";
    buttonE.style.display = "inline-block";
    pieChart.style.display = "none";

    //Setting Up
    let question = 1;
    paragraph.innerHTML = questions[0];
    startButton.innerHTML = "Start Over";

    let nextQuestion = function(){
        if(question < 9){
            question++;
            paragraph.innerHTML = questions[question-1];
        } else{
            paragraph.innerHTML = "Computing scores...";
            notes.style.display = "none";
            buttonA.style.display = "none";
            buttonB.style.display = "none";
            buttonC.style.display = "none";
            buttonD.style.display = "none";
            buttonE.style.display = "none";

            finalTally();
        }
    }

    buttonA.onclick = function(){
        totals.push(compiledList[question-1][0]);
        console.log(compiledList[question-1][0]);
        nextQuestion();
    }
    buttonB.onclick = function(){
        totals.push(compiledList[question-1][1]);
        console.log(compiledList[question-1][1]);
        nextQuestion();
    }
    buttonC.onclick = function(){
        totals.push(compiledList[question-1][2]);
        console.log(compiledList[question-1][2]);
        nextQuestion();
    }
    buttonD.onclick = function(){
        totals.push(compiledList[question-1][3]);
        console.log(compiledList[question-1][3]);
        nextQuestion();
    }
    buttonE.onclick = function(){
        totals.push(compiledList[question-1][4]);
        console.log(compiledList[question-1][4]);
        nextQuestion();
    }

}


//Failed/convoluted code
/* let choice = function(arrayName, event){
    let button = event.target; //accesses the button element that triggered the function
    if(button.id == "buttonA"){ results.push(arrayName[0]);  }//not sure if isPressed will work...
    if(button.id == "buttonB"){ results.push(arrayName[1]);  }
    if(button.id == "buttonC"){ results.push(arrayName[2]);  }
    if(button.id == "buttonD"){ results.push(arrayName[3]);  }
    if(button.id == "buttonE"){ results.push(arrayName[4]);  }
}
let questionOne = function(){
    paragraph.innerHTML = "blahblahblah";
    buttonA.innerHTML = "A:  ";
    buttonB.innerHTML = "B:  ";
    buttonC.innerHTML = "C:  ";
    buttonD.innerHTML = "D:  ";
    buttonE.innerHTML = "E:  ";

    buttons.forEach(button=>{//need to figure this out
        button.addEventListener("click," choice(one));
        questionTwo();
    });
}

*/
    /*for(let question = 1; question <= 9; question++){
        paragraph.innerHTML = questions[question-1];

        console.log("Hello!");
    }*/

