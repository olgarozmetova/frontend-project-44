import app from '../index.js'

const questionDescr = 'What number is missing in the progression?'

function generateProgressionArr(start, step, length) {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

function getData() {
  const length = Math.floor(Math.random() * 6) + 5
  const start = Math.floor(Math.random() * 10) + 1
  const step = Math.floor(Math.random() * 5) + 1

  const progression = generateProgressionArr(start, step, length)

  const hiddenIndex = Math.floor(Math.random() * length)
  const correctAnswer = progression[hiddenIndex]

  const question = [...progression]
  question[hiddenIndex] = '..'

  return [question.join(' '), correctAnswer.toString()]
}

export default () => app(questionDescr, getData)
