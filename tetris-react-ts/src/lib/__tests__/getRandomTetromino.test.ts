import getRandomTetromino from "../getRandomTetromino";

describe("getRandomTetromino()", () => {
  it("returns a valid tetromino index", () => {
    const tetromino = getRandomTetromino();
    expect(Number.isInteger(tetromino)).toBeTruthy();
    expect(tetromino).toBeLessThanOrEqual(7);
    expect(tetromino).toBeGreaterThanOrEqual(1);
  });
});
