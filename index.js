var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specials = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
//password outputs
var firstPw = document.querySelector(".first-pw");
var secondPw = document.querySelector(".second-pw");
//choose what kind of password you want
var upperCh = document.getElementById("upperCh");
var lowerCh = document.getElementById("lowerCh");
var numbersCh = document.getElementById("numbersCh");
var symbolsCh = document.getElementById("symbolsCh");
upperCh.checked = true;
lowerCh.checked = true;
numbersCh.checked = true;
symbolsCh.checked = true;
// password length input and display
var value = document.getElementById("value");
var input = document.getElementById("pw-input");
var passwordLength = parseInt(input.value, 10); // gets the input's initial value(which is 15) as a number
value.textContent = passwordLength.toString(); // gives input's initial value as an output
// update password length when input value changes
input.addEventListener("input", function () {
    passwordLength = input.valueAsNumber; // when there is a change, updates the element
    value.textContent = passwordLength.toString(); // updates the output
});
function randomPassword() {
    var characters = getCharacters();
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    return password;
}
function generatePw() {
    var characters = getCharacters();
    if (characters.length < 1) { // if there are no checked characters execute an alert
        alert("Please select at least one character type!");
        return; // return out and don't generate any password, don't execute any line of codes below this
    }
    firstPw.textContent = randomPassword();
    secondPw.textContent = randomPassword();
    // to prevent multiple alerts, created a new function to give an alert outside of our function, because we have 2 outputs so when we click inside this function, it creates multiple alerts at a time.
    firstPw.addEventListener("click", handleClick);
    secondPw.addEventListener("click", handleClick);
}
function handleClick() {
    navigator.clipboard.writeText(this.textContent);
    alert("Password copied to clipboard!");
}
function getCharacters() {
    var characters = [];
    if (upperCh.checked) {
        characters = characters.concat(upperCase);
    }
    if (lowerCh.checked) {
        characters = characters.concat(lowerCase);
    }
    if (numbersCh.checked) {
        characters = characters.concat(numbers);
    }
    if (symbolsCh.checked) {
        characters = characters.concat(specials);
    }
    return characters;
}
