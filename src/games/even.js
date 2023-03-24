import baseGame from '../index.js'
import getRandomInt from '../randomizer.js'

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no"'

const isEvenNum = (num) => (num % 2 === 0)

const theGame = () => {
  const question = getRandomInt(1, 100)
  const rightAnswer = isEvenNum(question) ? 'yes' : 'no'
  return [question, rightAnswer]
}

export default () => baseGame(gameTask, theGame)
