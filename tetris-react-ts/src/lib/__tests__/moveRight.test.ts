import moveRight from "../moveRight";
import getNewBoard from "../getNewBoard";
import getInitialGameState from "../getInitialGameState";

describe("moveRight()", () => {
  it("moves right if there's space on the board", () => {
    const gameState = { ...getInitialGameState(), tetromino: 1, x: 5, y: 10 };
    const nextState = moveRight(gameState);
    expect(nextState.x).toBe(6);
  });

  it("doesn't move right if there's a block in that position", () => {
    const board = getNewBoard();
    board[10][6] = 1;

    const gameState = {
      ...getInitialGameState(),
      board: board,
      tetromino: 1,
      x: 5,
      y: 10,
    };
    const nextState = moveRight(gameState);
    expect(nextState.x).toBe(5);
  });

  it("doesn't move right if the block would be outside the board", () => {
    const gameState = { ...getInitialGameState(), tetromino: 1, x: 17, y: 10 };
    const nextState = moveRight(gameState);
    expect(nextState.x).toBe(17);
  });
});
