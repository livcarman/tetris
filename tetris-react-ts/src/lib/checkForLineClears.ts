import type { GameState } from "./types";
import { POINTS_PER_LINE_CLEAR, LEVEL_INCREASE_LINES } from "./constants";

const checkForLineClears = (gameState: GameState): GameState => {
  const { board, level, lineClears, score } = gameState;
  const newBoard = board.map((subarray) => subarray.slice());
  let completedLines = 0;
  let scoreToAdd = 0;
  let nextLevel = level;

  // Start from the bottom up
  for (let row = newBoard.length - 1; row >= 0; ) {
    // If none of the cells in this row are empty, drop it and stick a new,
    // empty row up top
    if (newBoard[row].indexOf(0) === -1) {
      newBoard.splice(row, 1);
      const newRow = Array(newBoard[0].length).fill(0) as number[];
      newBoard.unshift(newRow);
      completedLines = completedLines + 1;
    } else {
      row = row - 1;
    }
  }

  if (completedLines > 0) {
    // Award at least 10 points per completed line
    scoreToAdd = completedLines * POINTS_PER_LINE_CLEAR;

    // If 4 lines are completed at once, it's a Tetris
    // The score is doubled once for each Tetris
    if (completedLines >= 4) {
      scoreToAdd = scoreToAdd * 2 * Math.floor(completedLines / 4);
    }

    // If the entire board was cleared, the score gets doubled (again)
    if (newBoard.flat().every((cell) => cell === 0)) {
      scoreToAdd = scoreToAdd * 2;
    }

    // Update the level, if necessary
    nextLevel =
      Math.floor((lineClears + completedLines) / LEVEL_INCREASE_LINES) + 1;
  }

  return {
    ...gameState,
    board: newBoard,
    lineClears: lineClears + completedLines,
    level: nextLevel,
    score: score + scoreToAdd,
  };
};

export default checkForLineClears;
