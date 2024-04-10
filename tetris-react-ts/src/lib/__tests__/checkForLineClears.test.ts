import checkForLineClears from "../checkForLineClears";
import getInitialGameState from "../getInitialGameState";
import getNewBoard from "../getNewBoard";

describe("checkForLineClears()", () => {
  it("updates the score after a line clear", () => {
    const newBoard = getNewBoard();
    newBoard[16] = [0, 1, 0, 1, 1, 1, 1, 1, 1, 1];
    newBoard[17] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const gameState = {
      ...getInitialGameState(),
      board: newBoard,
      lineClears: 0,
    };
    const nextState = checkForLineClears(gameState);
    expect(nextState.lineClears).toBe(1);
    expect(nextState.score).toBe(10);
    expect(nextState.level).toBe(1);
  });

  it("updates the level after a line clear", () => {
    const newBoard = getNewBoard();
    newBoard[17] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const gameState = {
      ...getInitialGameState(),
      board: newBoard,
      lineClears: 15,
    };
    const nextState = checkForLineClears(gameState);
    expect(nextState.lineClears).toBe(16);
    expect(nextState.level).toBe(3);
  });

  it("calculates a tetris", () => {
    const newBoard = getNewBoard();
    newBoard[13] = [0, 1, 0, 1, 1, 1, 1, 1, 1, 1];
    newBoard[14] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    newBoard[15] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    newBoard[16] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    newBoard[17] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const gameState = {
      ...getInitialGameState(),
      board: newBoard,
      lineClears: 0,
    };
    const nextState = checkForLineClears(gameState);
    expect(nextState.lineClears).toBe(4);
    expect(nextState.score).toBe(80);
    expect(nextState.level).toBe(1);
  });

  it("scores double again when the whole board is cleared", () => {
    const newBoard = getNewBoard();
    newBoard[14] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    newBoard[15] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    newBoard[16] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    newBoard[17] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const gameState = {
      ...getInitialGameState(),
      board: newBoard,
      lineClears: 0,
    };
    const nextState = checkForLineClears(gameState);
    expect(nextState.lineClears).toBe(4);
    expect(nextState.score).toBe(160);
    expect(nextState.level).toBe(1);
  });
});
