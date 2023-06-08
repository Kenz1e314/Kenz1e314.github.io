/**let numbers = [17];
let returnV = document.getElementById("returnV");

while(numbers[numbers.length-1] != 1 && numbers[numbers.length-1] != 2 && numbers[numbers.length-1] != 4){
    if (numbers[numbers.length-1]%2 == 0){
        let newV2 = numbers[numbers.length-1] / 2;
        console.log(newV2);
        numbers.push(newV2);
    }
    if (numbers[numbers.length-1]%2 != 0){
        let newV3 = (numbers[numbers.length-1]*3)+1;
        console.log(newV3);
        numbers.push(newV3);
    }
}
returnV.innerHTML = numbers;*/



let form = document.getElementById("form");//see HTML note on form
let input = document.getElementById("input");
//let submit = document.getElementById("submit");
let returnV = document.getElementById("returnV");

let numbers = [];

form.onsubmit = function(event){//see HTML note on form
    event.preventDefault();//this prevents the form from submitting and thus prevents the page from refreshing--see HTML note on form
    console.clear();
    let inputValue = input.value;
    numbers = [inputValue];
    while(numbers[numbers.length-1] != 1 && numbers[numbers.length-1] != 2 && numbers[numbers.length-1] != 4){
        if (numbers[numbers.length-1]%2 == 0){
            let newV2 = numbers[numbers.length-1] / 2;
            console.log(newV2);
            numbers.push(newV2);
        }
        if (numbers[numbers.length-1]%2 != 0){
            let newV3 = (numbers[numbers.length-1]*3)+1;
            console.log(newV3);
            numbers.push(newV3);
        }
        
        //This code is designed to prevent the page from getting stuck in an infinite loop.
        let count = 0;
        count++;
        if(count > 1000){   break;   }
    }
    //return numbers;
    returnV.innerHTML = numbers.toString();
}




/*for(i=0; i<=100; i++){
    if (numbers[i]%2 === 0){
        let newV2 = numbers[i] / 2;
        console.log(newV2);
        //returnV.innerText(numbers);
        numbers.push(newV2);
    }
    if (numbers[i]%2 !== 0){
        let newV3 = (numbers[i]*3)+1;
        console.log(newV3);
        //returnV.innerText(numbers);
        numbers.push(newV3);
    }
}*/
