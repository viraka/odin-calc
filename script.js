
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function  multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

var currOperator = "";
var firstNumber = "";
var secondNumber = "";
var display = document.getElementById("content");
var values = document.querySelectorAll(".value");
var operators = document.querySelectorAll(".operator");
var clear = document.getElementById("clear");
var backspace = document.getElementById("backspace");
var equals = document.getElementById("equals");

function operate(firstNumber,operation,secondNumber) {
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    console.log(typeof firstNumber+"o"+ typeof operation+"o"+ typeof secondNumber);
    
    if (operation == "+") {
        return add(firstNumber, secondNumber);
    }
    else if (operation == "-") {
        return subtract(firstNumber, secondNumber);
    }
    else if (operation == "*") {
        return multiply(firstNumber, secondNumber);
    }
    else if (operation == "/") {
        return divide(firstNumber, secondNumber);
    }
}

backspace.addEventListener("click", function() {
    if(display.innerText.slice(-1) == currOperator) {
        currOperator = "";
    }
    if(display.innerText == "undefined"){
        display.innerText = "";
    }
    display.innerText = display.innerText.slice(0, -1);
})

clear.addEventListener("click", function() {
    currOperator = "";
    display.innerText = "";
});

values.forEach(value => {
    value.addEventListener("click", function() {
        if(display.innerText == "undefined"){
            display.innerText = "";
        }   
        display.innerText += value.textContent;
    })
});

operators.forEach(operator => {
    operator.addEventListener("click", function() {
        if(currOperator == "" && display.innerText != "") {
            currOperator = operator.textContent;
            firstNumber = display.textContent;
            display.innerText = firstNumber + currOperator;
        }
        else if(currOperator != "" && display.innerText != "") {
            calculate();
            firstNumber = display.innerText;
            currOperator = operator.textContent;
            display.innerText = firstNumber + currOperator;
        }
    })
})

equals.addEventListener("click", calculate)

function calculate(){
    if(currOperator != "" && display.innerText != "") {
        secondNumber = display.innerText.slice(firstNumber.length + 1);
        console.log(firstNumber+"o"+ currOperator+"o"+secondNumber);

        if(currOperator == 'x') 
            currOperator = '*';
        if(currOperator == '÷') 
            currOperator = '/';

        display.innerText = operate(firstNumber, currOperator, secondNumber);
        currOperator = "";
    }
}

