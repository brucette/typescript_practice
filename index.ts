
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
    userFirstEntry = event.currentTarget.value;
});

secondWord?.addEventListener("change", (event) => {
    userSecondEntry = event.currentTarget.value;
});

thirdWord?.addEventListener("change", (event) => {
    userThirdEntry = event.currentTarget.value;
});


// Calculator variables 
const calcView: HTMLElement = document.querySelector(".window") as HTMLElement;
// console.log(calcView.innerHTML)
const numbers: NodeList = document.querySelectorAll(".number");
// console.log(numbers)
const operators = document.querySelectorAll(".operator");
// console.log(operators)
const enter = document.querySelector(".enter");

let firstNumber: Number;
let operator: unknown;
let secondNumber: Number;
let accumulator: Number;


numbers.forEach((item) => {
    item.addEventListener("click", () => {
        // calcView.innerHTML += "";
        // console.log(item.nodeValue)
        // console.log(typeof item.innerHTML)
        calcView.innerHTML = item.innerHTML;
        operators.forEach(btn => {
            btn.classList.remove("green")
        });
    });
});

operators.forEach((item) => {
    item.addEventListener("click", () => {
        firstNumber = Number(calcView.innerHTML);
        operators.forEach(btn => {
            btn.classList.remove("green")
        });
        item.classList.add("green");

        if (firstNumber) {
            
            
        }
        
        console.log(item)
        
        calcView.innerHTML = item.innerHTML;
        operator = item.innerHTML;
    })
});