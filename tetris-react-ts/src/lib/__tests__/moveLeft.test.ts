import moveLeft from "../moveLeft";
import getNewBoard from "../getNewBoard";
import getInitialGameState from "../getInitialGameState";

describe("moveLeft()", () => {
  it("moves left if there's space on the board", () => {
    const gameState = { ...getInitialGameState(), tetromino: 1, x: 5, y: 10 };
    const nextState = moveLeft(gameState);
    expect(nextState.x).toBe(4);
  });

  it("doesn't move left if there's a block in that position", () => {
    const board = getNewBoard();
    board[10][4] = 1;

    const gameState = {
      ...getInitialGameState(),
      board: board,
      tetromino: 1,
      x: 5,
      y: 10,
    };
    const nextState = moveLeft(gameState);
    expect(nextState.x).toBe(5);
  });

  it("doesn't move left if the block would be outside the board", () => {
    const gameState = { ...getInitialGameState(), tetromino: 1, x: 0, y: 10 };
    const nextState = moveLeft(gameState);
    expect(nextState.x).toBe(0);
  });
});
