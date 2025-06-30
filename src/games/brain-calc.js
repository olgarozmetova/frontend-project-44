import readlineSync from 'readline-sync';
import getName from '../cli.js';

console.log('Welcome to the Brain Games!');

const getRandomFirst = () => Math.floor(Math.random() * 100) + 1;
const getRandomSecond = () => Math.floor(Math.random() * 100) + 1;
const operations = ['+', '-', '*'];
const getRamdomOperatorIndex = () => Math.floor(Math.random() * operations.length);
const userName = getName();

console.log('What is the result of the expression?');

const playGame2 = () => {
  for (let i = 1; i < 4; i += 1) {
    const num1 = getRandomFirst();
    const num2 = getRandomSecond();
    const operator = operations[getRamdomOperatorIndex()];
    const question = `${num1} ${operator} ${num2}`;
    console.log(`Question: ${question}`);

    let correctAnswer;
    switch (operator) {
      case '+':
        correctAnswer = num1 + num2;
        break;
      case '-':
        correctAnswer = num1 - num2;
        break;
      case '*':
        correctAnswer = num1 * num2;
        break;
      default:
        return;
    }

    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`,
      );
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame2;
