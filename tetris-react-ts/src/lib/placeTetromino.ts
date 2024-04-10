import { TETROMINOS } from "./constants";
import type { GameState } from "./types";

const placeTetromino = (gameState: GameState): GameState => {
  const { board, tetromino, rotation, x, y } = gameState;
  const currentTetromino = TETROMINOS[tetromino][rotation];
  const newBoard = board.map((subarray) => subarray.slice());

  for (let row = 0; row < currentTetromino.length; row++) {
    for (let col = 0; col < currentTetromino[row].length; col++) {
      // Cell is empty
      if (currentTetromino[row][col] === 0) {
        continue;
      }

      // Try to place the tetromino on the board
      // If part of tetromino is off-screen, then game over!
      if (row + y < 0) {
        return { ...gameState, board: newBoard, isGameOver: true };
      }

      newBoard[row + y][col + x] = tetromino;
    }
  }

  return { ...gameState, board: newBoard };
};

export default placeTetromino;
