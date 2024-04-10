import { TETROMINOS } from "./constants";

const getRandomIntInRange = (start: number, end: number) => {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomTetromino = () => getRandomIntInRange(1, TETROMINOS.length - 1);

export default getRandomTetromino;
