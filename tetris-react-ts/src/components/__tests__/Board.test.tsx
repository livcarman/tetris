import { render, screen } from "@testing-library/react";
import Board from "../Board";
import TetrisContext from "../../context/TetrisContext";
import TetrisControlsContext from "../../context/TetrisControlsContext";
import getInitialGameState from "../../lib/getInitialGameState";
import { BOARD_HEIGHT, BOARD_WIDTH } from "../../lib/constants";
import { getMockControls } from "./testUtils";

describe("Board", () => {
  it("renders a grid of cells", async () => {
    const state = getInitialGameState();
    const controls = getMockControls();

    render(
      <TetrisContext.Provider value={state}>
        <TetrisControlsContext.Provider value={controls}>
          <Board />
        </TetrisControlsContext.Provider>
      </TetrisContext.Provider>,
    );
    const cells = await screen.findAllByTestId(/^Cell/);
    expect(cells.length).toBe(BOARD_HEIGHT * BOARD_WIDTH);
  });
});
