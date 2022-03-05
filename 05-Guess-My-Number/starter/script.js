'use strict';

const secretNumber = Math.ceil(Math.random() * 20);
console.log(secretNumber);
let score = 20;

//document.querySelector('.number').textContent = secretNumber;

//Action taken with the check button

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = `🚫 No number!`;
  }
  // When you guess the number right
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `🥳 Correct number`;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').style.fontSize = '3rem';
  }
  // if the input is lower than the secret number
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `📉 Too Low!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `You Loose !!!`;

      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#d22b2b';
      document.querySelector('.message').style.fontSize = '3rem';
    }
  }

  // if the input is higher than the secret number
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `📈 Too High!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `You Loose !!!`;
      document.querySelector('.score').textContent = 0;
    }
  }
});
