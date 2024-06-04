import data from "./words_dictionary.json" assert {type: 'json'};

const button1 = document.getElementById('one');
const button2 = document.getElementById('two');
const button3 = document.getElementById('three');
const centerButton = document.getElementById('four');
const button5 = document.getElementById('five');
const button6 = document.getElementById('six');
const button7 = document.getElementById('seven');

let wordList = document.getElementById("words");

let display = document.getElementById("textDisplay");
let displayScore = document.getElementById("score");

const deleteButton = document.getElementById("delete");
const EnterButton = document.getElementById("enter");
const resetButton = document.getElementById("reset");

const errorMessage = document.getElementById("errorMessage");

let score = 0;
let wordEntered = [];

reset();

console.log(data);
console.log(data.length);
console.log(data.hasOwnProperty("apple"));

const update = (event) => {
    const button = document.getElementById(event.target.id);
    updateDisplay(button.innerHTML);
}

const del = () => {
    const abc = display.textContent.slice(0, -1);
    display.textContent = abc;
};

button1.addEventListener('click', update);
button2.addEventListener('click', update);
button3.addEventListener('click', update);
centerButton.addEventListener('click', update);
button5.addEventListener('click', update);
button6.addEventListener('click', update);
button7.addEventListener('click', update);

deleteButton.addEventListener("click", del);
EnterButton.addEventListener('click', enter);
resetButton.addEventListener('click', reset);


function getRandomAlphabet() {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const result = alphabets[Math.floor(Math.random() * alphabets.length)];
    return result;
}

function reset() {

    button1.innerText = getRandomAlphabet();
    button2.innerText = getRandomAlphabet();
    button3.innerText = getRandomAlphabet();
    centerButton.innerText = getRandomAlphabet();
    button5.innerText = getRandomAlphabet();
    button6.innerText = getRandomAlphabet();
    button7.innerText = getRandomAlphabet();
    clearDisplay();

}


function clearDisplay() {
    display.innerHTML = "";
}

function updateDisplay(word) {
    display.innerHTML += word;
}
function enter() {
    checkValidity();
}
function updateWords() {
    let word = display.innerHTML;
    wordList.innerHTML += word.toUpperCase();
    wordList.innerHTML += ',';


}
function displayError(error) {
    errorMessage.innerHTML = error;
}
function clearError() {
    errorMessage.innerHTML = "";
}
function checkValidity() {
    let word = display.innerHTML;
    word = word.toLowerCase();
    console.log(word.length);
    if (word.includes(centerButton.innerHTML.toLowerCase())) {
        if (word.length >= 3) {
            if (data.hasOwnProperty(word)) {
                if (!wordEntered.includes(word)) {
                    alert(`+${word.length} Points!`)
                    score += word.length;
                    wordEntered += word;
                    displayScore.innerHTML = `Score =  ${score}`;
                    updateWords();
                    alert(`Nice Job!`);
                    clearDisplay();
                    clearError();
                }
                else {
                    displayError(`ALREADY ENTERED!`);
                    display.style.color = 'red';
                }
            }
            else {
                displayError(`INVALID WORD!`)
                clearDisplay();
            }
        }
        else {
            displayError(`TOO SHORT!`);
            clearDisplay();
        }


    }
    else {
        displayError(`Word must contain an '${centerButton.textContent}'`);
    }


}
