import getCellColor from "../getCellColor";
import getInitialGameState from "../getInitialGameState";

describe("getCellColor()", () => {
  it("returns the background color if tetromino is empty", () => {
    const gameState = { ...getInitialGameState(), x: 3, y: 4, tetromino: 0 };
    const color = getCellColor(gameState, 1, 1, 1);
    expect(color).toBe(0);
  });

  it("returns the tetromino color if the tetromino is in this cell", () => {
    const gameState = { ...getInitialGameState(), x: 3, y: 0, tetromino: 1 };
    const color = getCellColor(gameState, 0, 1, 5);
    expect(color).toBe(1);
  });

  it("returns the cell color if the tetromino is empty in this cell", () => {
    const gameState = { ...getInitialGameState(), x: 0, y: 0, tetromino: 1 };
    const color = getCellColor(gameState, 2, 1, 5);
    expect(color).toBe(2);
  });
});
