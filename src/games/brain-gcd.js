import app from '../index.js';
import getRandomNum from '../randomNum.js';

const questionDescr = 'Find the greatest common divisor of given numbers. ';

function getData() {
  let num1 = getRandomNum();
  let num2 = getRandomNum();
  const question = `${num1} ${num2}`;

  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  const correctAnswer = num1;
  return [question, correctAnswer.toString()];
}

export default () => app(questionDescr, getData);
