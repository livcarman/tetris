import { render, screen } from "@testing-library/react";
import TetrisContext from "../../context/TetrisContext";
import getInitialGameState from "../../lib/getInitialGameState";
import GameInfo from "../GameInfo";

describe("GameInfo", () => {
  it("renders the score", () => {
    const state = { ...getInitialGameState(), score: 200 };

    render(
      <TetrisContext.Provider value={state}>
        <GameInfo />
      </TetrisContext.Provider>,
    );

    expect(screen.getByTestId("GameInfo__score").textContent).toBe(
      "Score: 200",
    );
  });

  it("renders the level", () => {
    const state = { ...getInitialGameState(), level: 2 };

    render(
      <TetrisContext.Provider value={state}>
        <GameInfo />
      </TetrisContext.Provider>,
    );

    expect(screen.getByTestId("GameInfo__level").textContent).toBe("Level: 2");
  });

  it("renders the next block", () => {
    const state = { ...getInitialGameState() };

    render(
      <TetrisContext.Provider value={state}>
        <GameInfo />
      </TetrisContext.Provider>,
    );

    expect(screen.getByTestId("NextBlock")).toBeTruthy();
  });
});
