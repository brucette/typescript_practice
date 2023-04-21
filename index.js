"use strict";
// 1. Create a simple form using HTML and CSS [𝗡𝗢 𝗳𝗿𝗮𝗺𝗲𝘄𝗼𝗿𝗸𝘀]
// 2. Add a button to submit the form once all fields are filled
// 3. After pressing submit, clear the form and display a message that disappears after [x] seconds
let userFirstEntry = "";
let userSecondEntry = "";
let userThirdEntry = "";
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
