import placeTetromino from "../placeTetromino";
import getInitialGameState from "../getInitialGameState";
import { BOARD_HEIGHT, BOARD_WIDTH } from "../constants";

describe("placeTetromino()", () => {
  it("sets game over if the tetromino is above the board", () => {
    const newBoard = Array(BOARD_HEIGHT).fill(Array(BOARD_WIDTH).fill(1));
    const gameState = {
      ...getInitialGameState(),
      board: newBoard,
      tetromino: 1,
      x: 5,
      y: -2,
    };
    const nextState = placeTetromino(gameState);
    expect(nextState.isGameOver).toBe(true);
  });

  it("places the tetromino on the board", () => {
    const gameState = {
      ...getInitialGameState(),
      tetromino: 1,
      x: 3,
      y: 0,
    };
    const nextState = placeTetromino(gameState);
    expect(JSON.stringify(nextState.board[1])).toBe("[0,0,0,1,1,1,1,0,0,0]");
  });
});
