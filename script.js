let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber)
const submit = document.querySelector("#subt");
const UserInput = document.querySelector("#guessField");
const GuessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const StartOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(UserInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < 1 || guess > 100) {
    alert("please enter a  number less than 100 or more than 1");
  } else {
    prevGuess.push(guess);
    if (numGuess == 11) {
      DisplayGuess(guess);
      DisplayMessage(` Game over.random number was ${randomNumber}`);
      endGame();
    } else {
      DisplayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  //
  if (guess === randomNumber) {
    DisplayMessage(` You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    DisplayMessage(`Number id TOOO Low`);
  } else if (guess > randomNumber) {
    DisplayMessage(`Number id TOOO High`);
  }
}

function DisplayGuess(guess) {
  //
  UserInput.value = "";
  GuessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${12 - numGuess}`;
}

function DisplayMessage(message) {
  //
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  //
  UserInput.value = "";
  UserInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = '<h2 id="newGame">start New Game</h2>';
  StartOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  //
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    GuessSlot.innerHTML = "";
    remaining.innerHTML = `${12 - numGuess}`;
    UserInput.removeAttribute("disabled");
    StartOver.removeChild(p);

    playGame = true;
  });
}
