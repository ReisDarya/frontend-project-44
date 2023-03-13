export default (min, max) => {
    const randomInt = Math.random() * (max - min + 1) + min;
    return Math.floor(randomInt);
  };
  
  export const getRandomOperand = () => {
    const arr = ['+', '*', '-'];
    const operand = arr[Math.floor(Math.random() * arr.length)];
    return operand;
  };