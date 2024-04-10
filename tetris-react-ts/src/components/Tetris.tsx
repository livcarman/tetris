import TetrisContext from "../context/TetrisContext";
import TetrisControlsContext from "../context/TetrisControlsContext";
import useTetris from "../hooks/useTetris";
import Board from "./Board";
import GameInfo from "./GameInfo";
import StatePopup from "./StatePopup";

import "./tetris.css";

const Tetris = () => {
  const { state, useFallingBricks, ...controls } = useTetris();
  useFallingBricks(state, controls.moveDown);

  return (
    <TetrisContext.Provider value={state}>
      <TetrisControlsContext.Provider value={controls}>
        <div className="Tetris" data-testid="Tetris">
          <Board />
          <GameInfo />
          <StatePopup />
        </div>
      </TetrisControlsContext.Provider>
    </TetrisContext.Provider>
  );
};

export default Tetris;
