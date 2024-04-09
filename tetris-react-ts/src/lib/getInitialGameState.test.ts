import getInitialGameState from "./getInitialGameState";

describe("getInitialGameState()", () => {
  it("initializes the score to 0", () => {
    const { score } = getInitialGameState();
    expect(score).toBe(0);
  });
});
