import getRandomTetromino from "./getRandomTetromino";
import getNewBoard from "./getNewBoard";
import type { GameState } from "./types";

const getInitialGameState = (): GameState => ({
  board: getNewBoard(),
  isPaused: true,
  isGameOver: false,
  score: 0,
  level: 1,
  tetromino: getRandomTetromino(),
  nextTetromino: getRandomTetromino(),
  rotation: 0,
  x: 3,
  y: -4,
});

export default getInitialGameState;
