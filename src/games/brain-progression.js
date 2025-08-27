import app from '../index.js'
import getRandomNum from '../randomNum.js'

const questionDescr = 'What number is missing in the progression?'

function generateProgressionArr(start, step, length) {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

function generateRound() {
  const length = getRandomNum(5, 10)
  const start = getRandomNum(1, 10)
  const step = getRandomNum(1, 5)

  const progression = generateProgressionArr(start, step, length)

  const hiddenIndex = getRandomNum(0, length - 1)
  const correctAnswer = progression[hiddenIndex]

  const question = [...progression]
  question[hiddenIndex] = '..'

  return [question.join(' '), correctAnswer.toString()]
}

export default () => app(questionDescr, generateRound)
