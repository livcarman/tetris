import TetrisContext from "../context/TetrisContext";
import TetrisControlsContext from "../context/TetrisControlsContext";
import useTetris from "../hooks/useTetris";
import Board from "./Board";
import ControlInfo from "./ControlInfo";
import GameInfo from "./GameInfo";
import StatePopup from "./StatePopup";

import "./tetris.css";

const Tetris = () => {
  const { state, useFallingBricks, useKeyboardControls, ...controls } =
    useTetris();

  useFallingBricks(state, controls.moveDown);
  useKeyboardControls(controls);

  return (
    <TetrisContext.Provider value={state}>
      <TetrisControlsContext.Provider value={controls}>
        <div className="Tetris" data-testid="Tetris">
          <Board />
          <GameInfo />
          <StatePopup />
        </div>
        <ControlInfo />
      </TetrisControlsContext.Provider>
    </TetrisContext.Provider>
  );
};

export default Tetris;
