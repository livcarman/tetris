import getInitialGameState from "../getInitialGameState";

describe("getInitialGameState()", () => {
  it("initializes the board to an empty 10x18 board", () => {
    const { board } = getInitialGameState();
    expect(board.length).toBe(18);
    expect(board.every((subarray) => subarray.length == 10)).toBeTruthy();
    expect(board.flat().every((val) => val == 0)).toBeTruthy();
  });

  it("initializes isPaused to true", () => {
    const { isPaused } = getInitialGameState();
    expect(isPaused).toBe(true);
  });

  it("initializes isGameOver to false", () => {
    const { isGameOver } = getInitialGameState();
    expect(isGameOver).toBe(false);
  });

  it("initializes the score to 0", () => {
    const { score } = getInitialGameState();
    expect(score).toBe(0);
  });

  it("initializes the level to 1", () => {
    const { level } = getInitialGameState();
    expect(level).toBe(1);
  });

  it("initializes tetromino to a random tetromino index", () => {
    const { tetromino } = getInitialGameState();
    expect(Number.isInteger(tetromino)).toBeTruthy();
    expect(tetromino).toBeLessThanOrEqual(7);
    expect(tetromino).toBeGreaterThanOrEqual(1);
  });

  it("initializes nextTetromino to a random tetromino index", () => {
    const { nextTetromino } = getInitialGameState();
    expect(Number.isInteger(nextTetromino)).toBeTruthy();
    expect(nextTetromino).toBeLessThanOrEqual(7);
    expect(nextTetromino).toBeGreaterThanOrEqual(1);
  });

  it("initializes rotation to 0", () => {
    const { rotation } = getInitialGameState();
    expect(rotation).toBe(0);
  });

  it("initializes x to 3", () => {
    const { x } = getInitialGameState();
    expect(x).toBe(3);
  });

  it("initializes y to -4", () => {
    const { y } = getInitialGameState();
    expect(y).toBe(-4);
  });
});
