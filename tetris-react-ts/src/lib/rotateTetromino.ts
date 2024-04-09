import canMoveTo from "./canMoveTo";
import { TETROMINOS } from "./constants";
import type { GameState } from "./types";

const getNextRotation = (tetromino: number, rotation: number): number =>
  (rotation + 1) % TETROMINOS[tetromino].length;

const rotateTetromino = (gameState: GameState): GameState => {
  const { tetromino, rotation } = gameState;

  const proposedRotation = getNextRotation(tetromino, rotation);
  const proposedState = { ...gameState, rotation: proposedRotation };

  if (canMoveTo(proposedState)) {
    return proposedState;
  }

  return { ...gameState };
};

export default rotateTetromino;
