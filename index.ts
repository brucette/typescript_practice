
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

formy?.addEventListener("submit", (event) => {
    event.preventDefault();
    firstWord?.value = "";
    secondWord?.value = "";
    thirdWord?.value = "";
    result?.innerHTML = `${userFirstEntry} ${userSecondEntry} ${userThirdEntry}???  I see...! 🤔`
    setTimeout(() => {
        result?.innerHTML = "";
    }, 4000);
    userFirstEntry = "";
    userSecondEntry = "";
    userThirdEntry = "";

});


firstWord?.addEventListener("change", (event) => {
    userFirstEntry = event.currentTarget?.value;
});

secondWord?.addEventListener("change", (event) => {
    userSecondEntry = event.currentTarget?.value;
});

thirdWord?.addEventListener("change", (event) => {
    userThirdEntry = event.currentTarget?.value;
});

// ********* CALCULATOR ********

const initApp = () => {
    
    // Calculator variables 
    const calcView: HTMLElement = document.querySelector(".window") as HTMLElement;
    const numbers: NodeList = document.querySelectorAll(".number");
    const operators = document.querySelectorAll(".operator");
    const enter = document.querySelector(".enter");
    const clear = document.querySelector(".clear");

    let firstNumber: string;
    let operator: string;
    let secondNumber: string;
    let answer: number;

    const calculateAnswer = () => {
        if (operator === '+'){
        answer = Number(firstNumber) + Number(secondNumber);
        } else if (operator === '-') {
            answer = Number(firstNumber) - Number(secondNumber);
        } else if (operator === '/') {
            answer = Number(firstNumber) / Number(secondNumber);
        } else {
            answer = Number(firstNumber) * Number(secondNumber);
        }
        calcView.innerHTML = String(answer);
        firstNumber = String(answer);
    };

    const resetView = (newValue: string) => {
        calcView.innerHTML = '';
            setTimeout(() => {
                calcView.innerHTML = newValue
            }, 100);
    };

    const removeHighlight = () => {
        operators.forEach(btn => {
            btn.classList.remove("green")
        });
    };

    numbers.forEach((item) => {
        item.addEventListener("click", () => {
            calcView.innerHTML = item.innerHTML;
            operators.forEach(btn => {
                btn.classList.remove("green")
            });

            if (!firstNumber) {
                firstNumber = item.innerHTML;
                console.log('firstNumber', firstNumber)
            } else if (!secondNumber) {
                secondNumber = item.innerHTML;
                console.log('secondNumber', secondNumber)
            }
        });
    });

    operators.forEach((item) => {
        item.addEventListener("click", () => {
            
            removeHighlight();
            item.classList.add("green");

            if (firstNumber && secondNumber) {
                calculateAnswer();
                secondNumber = '';
            }
            operator = item.innerHTML;
            console.log('operator', operator)
        });
    });

    enter?.addEventListener("click", () => {

        if (firstNumber && operator && secondNumber) {
            calculateAnswer();
        } else if (firstNumber && operator && !secondNumber) {
            secondNumber = firstNumber;
            removeHighlight();
            calculateAnswer();
        }
        secondNumber = '';
        console.log('firstNumber', firstNumber)
        console.log('secondNumber', secondNumber)
        
    });

    clear?.addEventListener(("click"), () => {
        resetView(String(0));
        if (secondNumber) {
            secondNumber = '';
        } else if (operator) {
            operator = '';
            removeHighlight();
        } else if (firstNumber) {
            firstNumber = '';
        }
    });
};

document.addEventListener("DOMContentLoaded", initApp);