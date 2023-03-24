import baseGame from '../index.js';
import getRandomInt from '../randomizer.js';

const gameTask = 'Find the greatest common divisor of given numbers';

const getGCD = (a, b) => {
  if (b > a) {
    return getGCD(b, a);
  }
  if (!b) {
    return a;
  }
  return getGCD(b, a % b);
};

const theGame = () => {
  const firstNum = getRandomInt(1, 10);
  const secondNum = getRandomInt(1, 10);
  const question = `${firstNum} ${secondNum}`;
  const rightAnswer = String(getGCD(firstNum, secondNum));
  return [question, rightAnswer];
};

export default () => baseGame(gameTask, theGame);
