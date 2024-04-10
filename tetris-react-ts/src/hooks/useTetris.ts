import { useReducer } from "react";

import { GameState } from "../lib/types";
import togglePause from "../lib/togglePause";
import getInitialGameState from "../lib/getInitialGameState";
import rotateTetromino from "../lib/rotateTetromino";
import moveLeft from "../lib/moveLeft";
import moveRight from "../lib/moveRight";
import moveDown from "../lib/moveDown";

type GameActionType =
  | "togglePause"
  | "restart"
  | "moveLeft"
  | "moveRight"
  | "moveDown"
  | "rotate";

type GameAction = {
  type: GameActionType;
};

export type TetrisControls = {
  [K in GameActionType]: () => void;
};

const tetrisReducer = (state: GameState, action: GameAction) => {
  switch (action.type) {
    case "togglePause":
      return togglePause(state);
    case "restart":
      return getInitialGameState();
    case "moveLeft":
      return moveLeft(state);
    case "moveRight":
      return moveRight(state);
    case "moveDown":
      return moveDown(state);
    case "rotate":
      return rotateTetromino(state);
    default:
      return state;
  }
};

const useTetris = () => {
  const [state, dispatch] = useReducer(tetrisReducer, getInitialGameState());

  return {
    state,
    togglePause: () => dispatch({ type: "togglePause" }),
    restart: () => dispatch({ type: "restart" }),
    moveLeft: () => dispatch({ type: "moveLeft" }),
    moveRight: () => dispatch({ type: "moveRight" }),
    moveDown: () => dispatch({ type: "moveDown" }),
    rotate: () => dispatch({ type: "rotate" }),
  };
};

export default useTetris;
