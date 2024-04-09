type GameState = {
  score: number;
};

const getInitialGameState = (): GameState => ({
  score: 0,
});

export default getInitialGameState;
