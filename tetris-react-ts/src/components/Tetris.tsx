import TetrisContext from "../context/TetrisContext";
import TetrisControlsContext from "../context/TetrisControlsContext";
import useTetris from "../hooks/useTetris";
import Board from "./Board";

import "./tetris.css";

const Tetris = () => {
  const { state, ...controls } = useTetris();

  return (
    <TetrisContext.Provider value={state}>
      <TetrisControlsContext.Provider value={controls}>
        <Board />
      </TetrisControlsContext.Provider>
    </TetrisContext.Provider>
  );
};

export default Tetris;
