import readline from 'readline';

import  generateRandomNumber  from '../src/generateRandomNumber.js';

import isEven from '../src/isEven.js'

// Создаем интерфейс для чтения и записи ввода
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Функция для задания вопроса и получения ответа
function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function startGame() {
  console.log('Welcome to the Brain Games!');
  const name = await askQuestion('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const randomNumber = generateRandomNumber();
    console.log(`Question: ${randomNumber}`);
    
    const userAnswer = await askQuestion('Your answer: ');

    if ((isEven(randomNumber) && userAnswer === 'yes') || (!isEven(randomNumber) && userAnswer === 'no')) {
      console.log('Correct!');
      correctAnswersCount++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven(randomNumber) ? 'yes' : 'no'}'.`);
      console.log(`Let's try again, ${name}!`);
      return rl.close();
    }
  }

  console.log(`Congratulations, ${name}! You have answered correctly three times in a row.`);
  rl.close();
}

startGame();