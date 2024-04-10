import canMoveTo from "./canMoveTo";
import checkForLineClears from "./checkForLineClears";
import getInitialGameState from "./getInitialGameState";
import getRandomTetromino from "./getRandomTetromino";
import placeTetromino from "./placeTetromino";
import { GameState } from "./types";

const moveDown = (gameState: GameState): GameState => {
  const proposedGameState = { ...gameState, y: gameState.y + 1 };

  // If we can move to the next row, just move down
  if (canMoveTo(proposedGameState)) {
    return proposedGameState;
  }

  // If not, place the block without moving it down and check for a game over
  const proposedGameStateWithBlock = placeTetromino(gameState);
  if (proposedGameStateWithBlock.isGameOver) {
    return proposedGameStateWithBlock;
  }

  // If it's not a game over, check to see if we completed any rows
  const proposedGameStateWithScore = checkForLineClears(
    proposedGameStateWithBlock
  );

  // Finally, get ready to drop a new block
  const initialGameState = getInitialGameState();
  return {
    ...proposedGameStateWithScore,
    x: initialGameState.x,
    y: initialGameState.y,
    rotation: initialGameState.rotation,
    nextTetromino: getRandomTetromino(),
    tetromino: gameState.nextTetromino,
    score: proposedGameStateWithScore.score,
    lineClears: proposedGameStateWithScore.lineClears,
    level: proposedGameStateWithScore.level,
  };
};

export default moveDown;
