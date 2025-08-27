import app from '../index.js'
import getRandomNum from '../randomNum.js'

const questionDescr = 'What is the result of the expression?'

const operations = ['+', '-', '*']

function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

function generateRound() {
  const num1 = getRandomNum()
  const num2 = getRandomNum()
  const operator = operations[Math.floor(Math.random() * operations.length)]
  const question = `${num1} ${operator} ${num2}`

  const correctAnswer = calculate(num1, num2, operator)

  return [question, correctAnswer.toString()]
}

export default () => app(questionDescr, generateRound)
