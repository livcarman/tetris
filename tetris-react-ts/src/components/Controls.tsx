import { useContext } from "react";
import TetrisContext from "../context/TetrisContext";
import TetrisControlsContext from "../context/TetrisControlsContext";

const Controls = () => {
  const { isPaused, isGameOver } = useContext(TetrisContext);
  const { togglePause, restart, moveLeft, moveRight, moveDown, rotate } =
    useContext(TetrisControlsContext);

  return (
    <div className="Controls" data-testid="Controls">
      <button
        className="Controls__btn"
        data-testid="Controls__pause"
        onClick={() => togglePause()}
      >
        {isPaused ? "Play" : "Pause"}
      </button>
      <button
        className="Controls__btn"
        data-testid="Controls__new"
        onClick={() => restart()}
      >
        Restart
      </button>
      <div className="Controls__dir" data-testid="Controls__dir">
        <div className="Controls__dir__row">
          <button
            className="Controls__btn"
            data-testid="Controls__rotate"
            onClick={() => rotate()}
            disabled={isPaused || isGameOver}
          >
            ↻
          </button>
        </div>
        <div className="Controls__dir__row Controls__dir__row--middle">
          <button
            className="Controls__btn"
            data-testid="Controls__left"
            onClick={() => moveLeft()}
            disabled={isPaused || isGameOver}
          >
            ←
          </button>
          <button
            className="Controls__btn"
            data-testid="Controls__right"
            onClick={() => moveRight()}
            disabled={isPaused || isGameOver}
          >
            →
          </button>
        </div>
        <div className="Controls__dir__row">
          <button
            className="Controls__btn"
            data-testid="Controls__down"
            onClick={() => moveDown()}
            disabled={isPaused || isGameOver}
          >
            ↓
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
