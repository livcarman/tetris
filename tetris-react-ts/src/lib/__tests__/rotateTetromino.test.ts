import rotateTetromino from "../rotateTetromino";
import getInitialGameState from "../getInitialGameState";

describe("rotateTetromino()", () => {
  it("cycles through all valid rotations", () => {
    const gameState = { ...getInitialGameState(), tetromino: 1, x: 5, y: 10 };

    const rotate1 = rotateTetromino(gameState);
    expect(rotate1.rotation).toBe(1);

    const rotate2 = rotateTetromino(rotate1);
    expect(rotate2.rotation).toBe(0);

    const rotate3 = rotateTetromino(rotate2);
    expect(rotate3.rotation).toBe(1);
  });

  it("doesn't rotate if the tetromino would be in an invalid cell", () => {
    const gameState = { ...getInitialGameState(), tetromino: 1, x: 10, y: 10 };
    const rotate = rotateTetromino(gameState);
    expect(rotate.rotation).toBe(0);
  });
});
