'use strict';

const generateNumber = () => Math.ceil(Math.random() * 20);
let secretNumber = generateNumber();
console.log(secretNumber);
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

//Action taken with the check button

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    displayMessage(`🚫 No number!`);
  }
  // When you guess the number right
  else if (guess === secretNumber) {
    displayMessage(`🥳 Correct number`);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // Setting the highScore

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // refactored code
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? `📉 Too Low!` : `📈 Too High!`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `You Loose !!!`;
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#d22b2b';
    }
  }
});

// Reseting everything with the 'again' button
document.querySelector('.again').addEventListener('click', () => {
  secretNumber = generateNumber();
  console.log(secretNumber);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
