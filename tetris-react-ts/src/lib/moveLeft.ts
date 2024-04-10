import canMoveTo from "./canMoveTo";
import type { GameState } from "./types";

const moveLeft = (gameState: GameState): GameState => {
  const { x } = gameState;
  const proposedGameState = { ...gameState, x: x - 1 };

  if (canMoveTo(proposedGameState)) {
    return proposedGameState;
  }

  return { ...gameState };
};

export default moveLeft;
