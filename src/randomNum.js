export const getRandomNum = () => Math.floor(Math.random() * 100) + 1;

const operations = ['+', '-', '*'];

export const operator =
  operations[Math.floor(Math.random() * operations.length)];
