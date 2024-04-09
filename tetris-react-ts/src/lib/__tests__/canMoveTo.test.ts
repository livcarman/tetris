import canMoveTo from "../canMoveTo";
import getInitialGameState from "../getInitialGameState";
import getNewBoard from "../getNewBoard";

describe("canMoveTo()", () => {
  it("returns true when the tetromino is above the board", () => {
    const gameState = { ...getInitialGameState(), tetromino: 7, x: 3, y: -4 };
    expect(canMoveTo(gameState)).toBeTruthy();
  });

  it("returns true when the tetromino is an empty cell", () => {
    const gameState = { ...getInitialGameState(), tetromino: 7, x: 3, y: 3 };
    expect(canMoveTo(gameState)).toBeTruthy();
  });

  it("returns false when the tetromino is too far right", () => {
    const gameState = { ...getInitialGameState(), tetromino: 7, x: 10, y: 3 };
    expect(canMoveTo(gameState)).toBeFalsy();
  });

  it("returns false when the tetromino is too far left", () => {
    const gameState = { ...getInitialGameState(), tetromino: 7, x: -2, y: 3 };
    expect(canMoveTo(gameState)).toBeFalsy();
  });

  it("returns false when the tetromino is in an occupied cell", () => {
    const board = getNewBoard();
    board[3] = Array(10).fill(1);

    const gameState = {
      ...getInitialGameState(),
      board: board,
      tetromino: 7,
      x: 3,
      y: 3,
    };

    expect(canMoveTo(gameState)).toBeFalsy();
  });
});
