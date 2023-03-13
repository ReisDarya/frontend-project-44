import baseGame from '../index.js';
import getRandomInt, { getRandomOperand } from '../randomizer.js';

const gameTask = 'What is the result of the expression?';

const getRightAnswer = (a, b, c) => {
  let result;

  if (c === '+') {
    result = a + b;
  } if (c === '-') {
    result = a - b;
  } if (c === '*') {
    result = a * b;
  }
  return result;
};

const theGame = () => {
  const leftOperand = getRandomInt(1, 10);
  const rightOperand = getRandomInt(1, 10);
  const operator = getRandomOperand();
  const question = `${leftOperand} ${operator} ${rightOperand}`;
  const rightAnswer = String(getRightAnswer(leftOperand, rightOperand, operator));
  return [question, rightAnswer];
};

export default () => baseGame(gameTask, theGame);