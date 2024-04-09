export type GameState = {
  board: Array<Array<number>>;
  tetromino: number;
  rotation: number;
  x: number;
  y: number;
  nextTetromino: number;
  score: number;
  level: number;
  isPaused: boolean;
  isGameOver: boolean;
};