
// 1. Create a simple form using HTML and CSS [𝗡𝗢 𝗳𝗿𝗮𝗺𝗲𝘄𝗼𝗿𝗸𝘀]
// 2. Add a button to submit the form once all fields are filled
// 3. After pressing submit, clear the form and display a message that disappears after [x] seconds

let formy = document.getElementById("theQuestion");
formy?.addEventListener("submit", () => {
    onFormSubmit
})

const onFormSubmit = (event) => {
    event.preventDefault();
}

let userFirstEntry = "moi";

const firstWord = document.getElementById("first_input")

if (firstWord)
    firstWord.addEventListener("change", (event) => {
    userFirstEntry = event.currentTarget.value;
    //console.log(event.target.value)
    console.log(event.currentTarget.value);
    console.log('userFirstEntry', userFirstEntry)
})
console.log(userFirstEntry)