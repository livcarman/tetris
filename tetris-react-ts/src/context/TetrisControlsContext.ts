import { createContext } from "react";
import type { TetrisControls } from "../hooks/useTetris";

const defaultControls: TetrisControls = {
  togglePause: () => {},
  restart: () => {},
  moveLeft: () => {},
  moveRight: () => {},
  moveDown: () => {},
  rotate: () => {},
};

const TetrisControlsContext = createContext<TetrisControls>(defaultControls);

export default TetrisControlsContext;
