import baseGame from '../index.js';
import getRandomInt from '../randomizer.js';

const gameTask = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];
  const lastNum = start + step * length;
  for (let currentNum = start; currentNum < lastNum; currentNum += step) {
    progression.push(currentNum);
  }
  return progression;
};

const theGame = () => {
  const start = getRandomInt(1, 15);
  const step = getRandomInt(1, 7);
  const length = getRandomInt(5, 10);
  const randomHiddenIndex = getRandomInt(0, length - 1);
  const progression = getProgression(start, step, length);
  const hiddenIndex = progression.splice(randomHiddenIndex, 1, '..');
  const question = progression.join(' ');
  const rightAnswer = String(hiddenIndex[0]);
  return [question, rightAnswer];
};

export default () => baseGame(gameTask, theGame);
