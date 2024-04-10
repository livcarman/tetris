import moveDown from "../moveDown";
import getNewBoard from "../getNewBoard";
import getInitialGameState from "../getInitialGameState";
import { BOARD_HEIGHT, BOARD_WIDTH } from "../constants";

describe("moveDown()", () => {
  it("moves down if there's space on the board", () => {
    const gameState = { ...getInitialGameState(), tetromino: 1, x: 5, y: 10 };
    const nextState = moveDown(gameState);
    expect(nextState.y).toBe(11);
    expect(nextState.isGameOver).toBe(false);
  });

  it("detects a game over if the block is past the top of the board", () => {
    const newBoard = Array(BOARD_HEIGHT).fill(Array(BOARD_WIDTH).fill(1));
    const gameState = {
      ...getInitialGameState(),
      board: newBoard,
      tetromino: 1,
      x: 5,
      y: -2,
    };
    const nextState = moveDown(gameState);
    expect(nextState.y).toBe(-2);
    expect(nextState.isGameOver).toBe(true);
  });

  it("handles line clears and dropping a new block", () => {
    const newBoard = getNewBoard();
    newBoard[17] = [1, 1, 1, 0, 0, 0, 0, 1, 1, 1];
    const gameState = {
      ...getInitialGameState(),
      board: newBoard,
      tetromino: 1,
      x: 3,
      y: 16,
      lineClears: 7,
    };
    const nextState = moveDown(gameState);
    expect(nextState.y).toBe(-4);
    expect(nextState.x).toBe(3);
    expect(nextState.tetromino).toBe(gameState.nextTetromino);
    expect(nextState.isGameOver).toBe(false);
    expect(nextState.lineClears).toBe(8);
    expect(nextState.score).toBe(20);
    expect(nextState.level).toBe(2);
  });
});
