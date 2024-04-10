import type { GameState } from "./types";

const togglePause = (gameState: GameState): GameState => ({
  ...gameState,
  isPaused: !gameState.isPaused,
});

export default togglePause;
