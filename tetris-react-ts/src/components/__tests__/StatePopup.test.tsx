import { render, screen } from "@testing-library/react";
import TetrisContext from "../../context/TetrisContext";
import getInitialGameState from "../../lib/getInitialGameState";
import StatePopup from "../StatePopup";

describe("StatePopup", () => {
  it("renders the paused message", () => {
    const state = {
      ...getInitialGameState(),
      isPaused: true,
      isGameOver: false,
    };

    render(
      <TetrisContext.Provider value={state}>
        <StatePopup />
      </TetrisContext.Provider>,
    );

    expect(screen.getByTestId("StatePopup").textContent).toBe("Paused");
    const classList = screen.getByTestId("StatePopup").classList;
    expect(classList.contains("StatePopup--hidden")).toBeFalsy();
  });

  it("renders the game over message", () => {
    const state = {
      ...getInitialGameState(),
      isPaused: false,
      isGameOver: true,
    };

    render(
      <TetrisContext.Provider value={state}>
        <StatePopup />
      </TetrisContext.Provider>,
    );

    expect(screen.getByTestId("StatePopup").textContent).toBe("Game Over");
    const classList = screen.getByTestId("StatePopup").classList;
    expect(classList.contains("StatePopup--hidden")).toBeFalsy();
  });

  it("is hidden when not paused or game over", () => {
    const state = {
      ...getInitialGameState(),
      isPaused: false,
      isGameOver: false,
    };

    render(
      <TetrisContext.Provider value={state}>
        <StatePopup />
      </TetrisContext.Provider>,
    );

    const classList = screen.getByTestId("StatePopup").classList;
    expect(classList.contains("StatePopup--hidden")).toBeTruthy();
  });
});
