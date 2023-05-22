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
    var _a;
    userFirstEntry = (_a = event.currentTarget) === null || _a === void 0 ? void 0 : _a.value;
});
secondWord === null || secondWord === void 0 ? void 0 : secondWord.addEventListener("change", (event) => {
    var _a;
    userSecondEntry = (_a = event.currentTarget) === null || _a === void 0 ? void 0 : _a.value;
});
thirdWord === null || thirdWord === void 0 ? void 0 : thirdWord.addEventListener("change", (event) => {
    var _a;
    userThirdEntry = (_a = event.currentTarget) === null || _a === void 0 ? void 0 : _a.value;
});
// ********* CALCULATOR ********
const initApp = () => {
    // Calculator variables 
    const calcView = document.querySelector(".window");
    const numbers = document.querySelectorAll(".number");
    const operators = document.querySelectorAll(".operator");
    const enter = document.querySelector(".enter");
    const clear = document.querySelector(".clear");
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
        calcView.innerHTML = String(answer);
        firstNumber = String(answer);
    };
    const resetView = (newValue) => {
        calcView.innerHTML = '';
        setTimeout(() => {
            calcView.innerHTML = newValue;
        }, 100);
    };
    const removeHighlight = () => {
        operators.forEach(btn => {
            btn.classList.remove("green");
        });
    };
    numbers.forEach((item) => {
        item.addEventListener("click", () => {
            calcView.innerHTML = item.innerHTML;
            operators.forEach(btn => {
                btn.classList.remove("green");
            });
            if (!firstNumber) {
                firstNumber = item.innerHTML;
                console.log('firstNumber', firstNumber);
            }
            else if (!secondNumber) {
                secondNumber = item.innerHTML;
                console.log('secondNumber', secondNumber);
            }
        });
    });
    operators.forEach((item) => {
        item.addEventListener("click", () => {
            removeHighlight();
            item.classList.add("green");
            if (firstNumber && secondNumber) {
                calculateAnswer();
                //firstNumber = String(answer);
                secondNumber = '';
            }
            // else if (firstNumber && !secondNumber) {}
            operator = item.innerHTML;
            console.log('operator', operator);
        });
    });
    enter === null || enter === void 0 ? void 0 : enter.addEventListener("click", () => {
        if (firstNumber && operator && secondNumber) {
            calculateAnswer();
        }
        else if (firstNumber && operator && !secondNumber) {
            secondNumber = firstNumber;
            removeHighlight();
            calculateAnswer();
        }
        secondNumber = '';
        console.log('firstNumber', firstNumber);
        console.log('secondNumber', secondNumber);
    });
    clear === null || clear === void 0 ? void 0 : clear.addEventListener(("click"), () => {
        resetView(String(0));
        if (secondNumber) {
            secondNumber = '';
        }
        else if (operator) {
            operator = '';
            removeHighlight();
        }
        else if (firstNumber) {
            firstNumber = '';
        }
    });
};
document.addEventListener("DOMContentLoaded", initApp);
