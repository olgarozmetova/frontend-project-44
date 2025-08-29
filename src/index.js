import getName from './cli.js'
import readlineSync from 'readline-sync'

const roundCount = 3

const app = (questionDescr, generateRound) => {
  const userName = getName()
  console.log(questionDescr)

  for (let i = 0; i < roundCount; i += 1) {
    const [question, correctAnswer] = generateRound()
    console.log(`Question: ${question}`)

    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`,
      )
      return
    }
    console.log('Correct!')
  }

  console.log(`Congratulations, ${userName}!`)
}

export default app
