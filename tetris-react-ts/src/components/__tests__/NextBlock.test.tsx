import { render, screen } from "@testing-library/react";
import TetrisContext from "../../context/TetrisContext";
import getInitialGameState from "../../lib/getInitialGameState";
import NextBlock from "../NextBlock";

describe("NextBlock", () => {
  it("renders the next block", async () => {
    const state = { ...getInitialGameState(), nextTetromino: 1 };

    render(
      <TetrisContext.Provider value={state}>
        <NextBlock />
      </TetrisContext.Provider>,
    );

    expect(screen.getByTestId("NextBlock")).toBeTruthy();
    const cells = await screen.findAllByTestId(/^Cell/);
    expect(cells.length).toBe(16);

    const filledCoordinates = ["0,1", "1,1", "2,1", "3,1"];
    filledCoordinates.forEach((coordinates) => {
      const classList = screen.getByTestId(`Cell-${coordinates}`).classList;
      expect(classList.contains("Cell--color-1")).toBeTruthy();
    });
  });
});
