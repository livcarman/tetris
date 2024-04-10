export type GameState = {
  board: number[][];
  tetromino: number;
  rotation: number;
  x: number;
  y: number;
  nextTetromino: number;
  score: number;
  level: number;
  lineClears: number;
  isPaused: boolean;
  isGameOver: boolean;
};
