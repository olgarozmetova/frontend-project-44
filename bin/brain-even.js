import readlineSync from 'readline-sync';
import getName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const getRandomNum = () => Math.floor(Math.random() * 100) + 1;
const isEven = num => num % 2 === 0;
const userName = getName();

console.log('Answer "yes" if the number is even, otherwise answer "no". ');

const startFirstGame = () => {
  const question = getRandomNum();
  console.log(`Question: ${question}`);

  const userAnswer = readlineSync.question('Your answer: ');

  const correctAnswer = isEven(question) ? 'yes' : 'no';

  if (correctAnswer !== userAnswer) {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again!, ${userName}!`
    );
  } else {
    console.log('Correct!');
  }
};

startFirstGame();

/* const startFirstGame = () => {
  const question = getRandomNum();
  console.log(`Question: ${question}`);

  const userAnswer = readlineSync.question('Your answer: ');

  const correctAnswer = isEven(question) ? 'yes' : 'no';

  if (correctAnswer !== userAnswer) {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again!, ${userName}!`
    );
  } else {
    console.log('Correct!');
  }
};

startFirstGame();
 */
