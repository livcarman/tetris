import { TETROMINOS } from "./constants";
import type { GameState } from "./types";

const canMoveTo = (gameState: GameState): boolean => {
  const { board, tetromino, rotation, x, y } = gameState;
  const currentTetromino = TETROMINOS[tetromino][rotation];

  // Check each cell of the tetromino to see if it's in a valid position
  for (let row = 0; row < currentTetromino.length; row++) {
    for (let col = 0; col < currentTetromino[row].length; col++) {
      const proposedX = col + x;
      const proposedY = row + y;

      // Nothing in this tetromino cell, or we're above the top of the board
      if (proposedY < 0 || currentTetromino[row][col] === 0) {
        continue;
      }

      // Check to see if there's already something in the cell on the board,
      // or if we're outside the bounds of the board altogether
      const proposedCell = board?.[proposedY]?.[proposedX] ?? undefined;
      if (proposedCell === undefined || proposedCell !== 0) {
        return false;
      }
    }
  }

  return true;
};

export default canMoveTo;
