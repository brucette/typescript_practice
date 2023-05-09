"use strict";
// 1. Create a simple form using HTML and CSS [𝗡𝗢 𝗳𝗿𝗮𝗺𝗲𝘄𝗼𝗿𝗸𝘀]
// 2. Add a button to submit the form once all fields are filled
// 3. After pressing submit, clear the form and display a message that disappears after [x] seconds
let userFirstEntry = "";
let userSecondEntry = "";
let userThirdEntry = "";
// Form variables
let formy = document.getElementById("theQuestion");
let firstWord = document.getElementById("first_input");
let secondWord = document.getElementById("second_input");
let thirdWord = document.getElementById("third_input");
let result = document.getElementById("result");
formy === null || formy === void 0 ? void 0 : formy.addEventListener("submit", (event) => {
    event.preventDefault();
    firstWord === null || firstWord === void 0 ? void 0 : firstWord.value = "";
    secondWord === null || secondWord === void 0 ? void 0 : secondWord.value = "";
    thirdWord === null || thirdWord === void 0 ? void 0 : thirdWord.value = "";
    result === null || result === void 0 ? void 0 : result.innerHTML = `${userFirstEntry} ${userSecondEntry} ${userThirdEntry}???  I see...! 🤔`;
    setTimeout(() => {
        result === null || result === void 0 ? void 0 : result.innerHTML = "";
    }, 4000);
    userFirstEntry = "";
    userSecondEntry = "";
    userThirdEntry = "";
});
firstWord === null || firstWord === void 0 ? void 0 : firstWord.addEventListener("change", (event) => {
    userFirstEntry = event.currentTarget.value;
});
secondWord === null || secondWord === void 0 ? void 0 : secondWord.addEventListener("change", (event) => {
    userSecondEntry = event.currentTarget.value;
});
thirdWord === null || thirdWord === void 0 ? void 0 : thirdWord.addEventListener("change", (event) => {
    userThirdEntry = event.currentTarget.value;
});
// Calculator variables 
const calcView = document.querySelector(".window");
// console.log(calcView.innerHTML)
const numbers = document.querySelectorAll(".number");
// console.log(numbers)
const operators = document.querySelectorAll(".operator");
// console.log(operators)
const enter = document.querySelector(".enter");
let firstNumber;
let operator;
let secondNumber;
let accumulator;
let answer;
const calculateAnswer = () => {
    if (operator === '+') {
        answer = Number(firstNumber) + Number(secondNumber);
    }
    else if (operator === '-') {
        answer = Number(firstNumber) - Number(secondNumber);
    }
    else if (operator === '/') {
        answer = Number(firstNumber) / Number(secondNumber);
    }
    else {
        answer = Number(firstNumber) * Number(secondNumber);
    }
};
numbers.forEach((item) => {
    item.addEventListener("click", () => {
        calcView.innerHTML = item.innerHTML;
        operators.forEach(btn => {
            btn.classList.remove("green");
        });
        if (!firstNumber) {
            firstNumber = item.innerHTML;
            console.log(firstNumber);
        }
        else if (!secondNumber) {
            secondNumber = item.innerHTML;
            console.log(secondNumber);
        }
    });
});
operators.forEach((item) => {
    item.addEventListener("click", () => {
        operators.forEach(btn => {
            btn.classList.remove("green");
        });
        item.classList.add("green");
        if (firstNumber && secondNumber) {
            console.log(answer);
            calculateAnswer();
            calcView.innerHTML = String(answer);
            firstNumber = answer;
            secondNumber = '';
            console.log('secondNumber', secondNumber);
            //calcView.innerHTML = item.innerHTML;
        }
        operator = item.innerHTML;
    });
});
enter === null || enter === void 0 ? void 0 : enter.addEventListener("click", () => {
    console.log(typeof operator);
    console.log(firstNumber);
    console.log(secondNumber);
    if (operator === '+') {
        answer = Number(firstNumber) + Number(secondNumber);
        calcView.innerHTML = String(answer);
    }
});
