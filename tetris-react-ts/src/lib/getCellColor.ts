import { TETROMINOS } from "./constants";
import { GameState } from "./types";

const getCellColor = (
  gameState: GameState,
  cellColor: number,
  row: number,
  col: number
) => {
  const { x, y, tetromino, rotation } = gameState;

  // Tetromino is empty, so don't color this cell
  if (tetromino === 0) {
    return 0;
  }

  const currentTetromino = TETROMINOS[tetromino][rotation];
  const tetrominoColor = tetromino;

  const tetrominoX = col - x;
  const tetrominoY = row - y;

  let color = cellColor;

  // If the current tetromino has a block in this cell, use its color
  if (
    tetrominoX >= 0 &&
    tetrominoX < currentTetromino.length &&
    tetrominoY >= 0 &&
    tetrominoY < currentTetromino.length
  ) {
    color =
      currentTetromino[tetrominoY][tetrominoX] === 0 ? color : tetrominoColor;
  }

  return color;
};

export default getCellColor;
