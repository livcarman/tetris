import { createContext } from "react";
import type { GameState } from "../lib/types";
import getInitialGameState from "../lib/getInitialGameState";

const TetrisContext = createContext<GameState>(getInitialGameState());

export default TetrisContext;
