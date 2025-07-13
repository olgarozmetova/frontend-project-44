import app from '../index.js';
import getRandomNum from '../randomNum.js';

const questionDescr = 'Answer "yes" if given number is prime. Otherwise answer "no". ';

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};

function getData() {
  const number = getRandomNum();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
}

export default () => app(questionDescr, getData);
