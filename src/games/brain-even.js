import app from '../index.js'
import getRandomNum from '../randomNum.js'

const questionDescr = 'Answer "yes" if the number is even, otherwise answer "no". '

const isEven = num => num % 2 === 0

function getData() {
  const number = getRandomNum()
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return [number, correctAnswer]
}

export default () => app(questionDescr, getData)
