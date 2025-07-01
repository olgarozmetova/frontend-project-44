import app from '../index.js';
import getRandomNum from '../randomNum.js';

const questionDescr = 'What is the result of the expression?';

const operations = ['+', '-', '*'];
const getRandomOperatorIndex = () =>
  Math.floor(Math.random() * operations.length);

function getData() {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const operator = operations[getRandomOperatorIndex()];
  const question = `${num1} ${operator} ${num2}`;

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
      throw new Error(`Unknown operator: ${operator}`);
  }

  return [question, correctAnswer];
}

export default () => app(questionDescr, getData);
