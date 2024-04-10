import togglePause from "../togglePause";
import getInitialGameState from "../getInitialGameState";

describe("togglePause()", () => {
  it("pauses the game if it is not paused", () => {
    const gameState = { ...getInitialGameState(), isPaused: false };
    const nextState = togglePause(gameState);
    expect(nextState.isPaused).toBe(true);
  });

  it("unpauses the game if it's paused", () => {
    const gameState = { ...getInitialGameState(), isPaused: true };
    const nextState = togglePause(gameState);
    expect(nextState.isPaused).toBe(false);
  });
});
