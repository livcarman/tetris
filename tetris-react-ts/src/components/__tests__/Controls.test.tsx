import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Controls from "../Controls";
import TetrisContext from "../../context/TetrisContext";
import TetrisControlsContext from "../../context/TetrisControlsContext";
import getInitialGameState from "../../lib/getInitialGameState";
import { getMockControls } from "./testUtils";

describe("Controls", () => {
  it("renders a pause button", async () => {
    const user = userEvent.setup();
    const state = getInitialGameState();
    const mockControls = getMockControls();

    render(
      <TetrisContext.Provider value={state}>
        <TetrisControlsContext.Provider value={mockControls}>
          <Controls />
        </TetrisControlsContext.Provider>
      </TetrisContext.Provider>,
    );

    await user.click(screen.getByTestId("Controls__pause"));
    expect(mockControls.togglePause).toHaveBeenCalledOnce();
  });

  it("renders a reset button", async () => {
    const user = userEvent.setup();
    const state = getInitialGameState();
    const mockControls = getMockControls();

    render(
      <TetrisContext.Provider value={state}>
        <TetrisControlsContext.Provider value={mockControls}>
          <Controls />
        </TetrisControlsContext.Provider>
      </TetrisContext.Provider>,
    );

    await user.click(screen.getByTestId("Controls__restart"));
    expect(mockControls.restart).toHaveBeenCalledOnce();
  });

  describe("rotate button", () => {
    it("dispatches the rotate action", async () => {
      const user = userEvent.setup();
      const state = { ...getInitialGameState(), isPaused: false };
      const mockControls = getMockControls();

      render(
        <TetrisContext.Provider value={state}>
          <TetrisControlsContext.Provider value={mockControls}>
            <Controls />
          </TetrisControlsContext.Provider>
        </TetrisContext.Provider>,
      );

      await user.click(screen.getByTestId("Controls__rotate"));
      expect(mockControls.rotate).toHaveBeenCalledOnce();
    });

    it("is disabled when paused", async () => {
      const user = userEvent.setup();
      const state = { ...getInitialGameState(), isPaused: true };
      const mockControls = getMockControls();

      render(
        <TetrisContext.Provider value={state}>
          <TetrisControlsContext.Provider value={mockControls}>
            <Controls />
          </TetrisControlsContext.Provider>
        </TetrisContext.Provider>,
      );

      await user.click(screen.getByTestId("Controls__rotate"));
      expect(mockControls.rotate).toHaveBeenCalledTimes(0);
    });

    it("is disabled when game over", async () => {
      const user = userEvent.setup();
      const state = {
        ...getInitialGameState(),
        isPaused: false,
        isGameOver: true,
      };
      const mockControls = getMockControls();

      render(
        <TetrisContext.Provider value={state}>
          <TetrisControlsContext.Provider value={mockControls}>
            <Controls />
          </TetrisControlsContext.Provider>
        </TetrisContext.Provider>,
      );

      await user.click(screen.getByTestId("Controls__rotate"));
      expect(mockControls.rotate).toHaveBeenCalledTimes(0);
    });
  });

  describe("move left button", () => {
    it("dispatches the move left action", async () => {
      const user = userEvent.setup();
      const state = { ...getInitialGameState(), isPaused: false };
      const mockControls = getMockControls();

      render(
        <TetrisContext.Provider value={state}>
          <TetrisControlsContext.Provider value={mockControls}>
            <Controls />
          </TetrisControlsContext.Provider>
        </TetrisContext.Provider>,
      );

      await user.click(screen.getByTestId("Controls__left"));
      expect(mockControls.moveLeft).toHaveBeenCalledOnce();
    });

    it("is disabled when paused", async () => {
      const user = userEvent.setup();
      const state = { ...getInitialGameState(), isPaused: true };
      const mockControls = getMockControls();

      render(
        <TetrisContext.Provider value={state}>
          <TetrisControlsContext.Provider value={mockControls}>
            <Controls />
          </TetrisControlsContext.Provider>
        </TetrisContext.Provider>,
      );

      await user.click(screen.getByTestId("Controls__left"));
      expect(mockControls.moveLeft).toHaveBeenCalledTimes(0);
    });

    it("is disabled when game over", async () => {
      const user = userEvent.setup();
      const state = {
        ...getInitialGameState(),
        isPaused: false,
        isGameOver: true,
      };
      const mockControls = getMockControls();

      render(
        <TetrisContext.Provider value={state}>
          <TetrisControlsContext.Provider value={mockControls}>
            <Controls />
          </TetrisControlsContext.Provider>
        </TetrisContext.Provider>,
      );

      await user.click(screen.getByTestId("Controls__left"));
      expect(mockControls.moveLeft).toHaveBeenCalledTimes(0);
    });
  });

  describe("move right button", () => {
    it("dispatches the move right action", async () => {
      const user = userEvent.setup();
      const state = { ...getInitialGameState(), isPaused: false };
      const mockControls = getMockControls();

      render(
        <TetrisContext.Provider value={state}>
          <TetrisControlsContext.Provider value={mockControls}>
            <Controls />
          </TetrisControlsContext.Provider>
        </TetrisContext.Provider>,
      );

      await user.click(screen.getByTestId("Controls__right"));
      expect(mockControls.moveRight).toHaveBeenCalledOnce();
    });

    it("is disabled when paused", async () => {
      const user = userEvent.setup();
      const state = { ...getInitialGameState(), isPaused: true };
      const mockControls = getMockControls();

      render(
        <TetrisContext.Provider value={state}>
          <TetrisControlsContext.Provider value={mockControls}>
            <Controls />
          </TetrisControlsContext.Provider>
        </TetrisContext.Provider>,
      );

      await user.click(screen.getByTestId("Controls__right"));
      expect(mockControls.moveRight).toHaveBeenCalledTimes(0);
    });

    it("is disabled when game over", async () => {
      const user = userEvent.setup();
      const state = {
        ...getInitialGameState(),
        isPaused: false,
        isGameOver: true,
      };
      const mockControls = getMockControls();

      render(
        <TetrisContext.Provider value={state}>
          <TetrisControlsContext.Provider value={mockControls}>
            <Controls />
          </TetrisControlsContext.Provider>
        </TetrisContext.Provider>,
      );

      await user.click(screen.getByTestId("Controls__right"));
      expect(mockControls.moveRight).toHaveBeenCalledTimes(0);
    });
  });

  describe("move down button", () => {
    it("dispatches the move down action", async () => {
      const user = userEvent.setup();
      const state = { ...getInitialGameState(), isPaused: false };
      const mockControls = getMockControls();

      render(
        <TetrisContext.Provider value={state}>
          <TetrisControlsContext.Provider value={mockControls}>
            <Controls />
          </TetrisControlsContext.Provider>
        </TetrisContext.Provider>,
      );

      await user.click(screen.getByTestId("Controls__down"));
      expect(mockControls.moveDown).toHaveBeenCalledOnce();
    });

    it("is disabled when paused", async () => {
      const user = userEvent.setup();
      const state = { ...getInitialGameState(), isPaused: true };
      const mockControls = getMockControls();

      render(
        <TetrisContext.Provider value={state}>
          <TetrisControlsContext.Provider value={mockControls}>
            <Controls />
          </TetrisControlsContext.Provider>
        </TetrisContext.Provider>,
      );

      await user.click(screen.getByTestId("Controls__down"));
      expect(mockControls.moveDown).toHaveBeenCalledTimes(0);
    });

    it("is disabled when game over", async () => {
      const user = userEvent.setup();
      const state = {
        ...getInitialGameState(),
        isPaused: false,
        isGameOver: true,
      };
      const mockControls = getMockControls();

      render(
        <TetrisContext.Provider value={state}>
          <TetrisControlsContext.Provider value={mockControls}>
            <Controls />
          </TetrisControlsContext.Provider>
        </TetrisContext.Provider>,
      );

      await user.click(screen.getByTestId("Controls__down"));
      expect(mockControls.moveDown).toHaveBeenCalledTimes(0);
    });
  });
});
