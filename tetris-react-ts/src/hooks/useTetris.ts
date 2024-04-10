import React, { useCallback, useEffect, useReducer, useRef } from "react";

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

const useKeyboardControls = (controls: TetrisControls) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.stopImmediatePropagation();
      switch (true) {
        case e.key === "a" || e.code === "KeyA":
        case e.key === "ArrowLeft" || e.code === "ArrowLeft":
          return controls.moveLeft();
        case e.key === "d" || e.code === "KeyD":
        case e.key === "ArrowRight" || e.code === "ArrowRight":
          return controls.moveRight();
        case e.key === "s" || e.code === "KeyS":
        case e.key === "ArrowDown" || e.code === "ArrowDown":
          return controls.moveDown();
        case e.key === "w" || e.code === "KeyW":
        case e.key === "ArrowUp" || e.code === "ArrowUp":
          return controls.rotate();
        case e.key === " " || e.code === "Space":
          return controls.togglePause();
        default:
          return;
      }
    };

    document.addEventListener("keydown", handleKeyDown, true);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};

const useFallingBricks = (gameState: GameState, moveDown: () => void) => {
  const { level, isPaused, isGameOver } = gameState;
  const speed = level * 1000;
  const isRunning = !(isPaused || isGameOver);
  const requestRef = useRef<number>();
  const lastUpdateTimeRef = useRef(0);
  const progressTimeRef = useRef(0);

  const update = useCallback(
    (time: number) => {
      requestRef.current = requestAnimationFrame(update);
      if (!isRunning) {
        return;
      }
      if (!lastUpdateTimeRef.current) {
        lastUpdateTimeRef.current = time;
      }
      const deltaTime = time - lastUpdateTimeRef.current;
      progressTimeRef.current += deltaTime;
      if (progressTimeRef.current > speed) {
        moveDown();
        progressTimeRef.current = 0;
      }
      lastUpdateTimeRef.current = time;
    },
    [isRunning, moveDown, speed]
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update);
    return () => {
      requestRef.current !== undefined &&
        cancelAnimationFrame(requestRef.current);
    };
  }, [isRunning, update]);
};

const useTetris = () => {
  const [state, dispatch] = useReducer(tetrisReducer, getInitialGameState());

  return {
    state,
    useFallingBricks,
    useKeyboardControls,
    togglePause: () => dispatch({ type: "togglePause" }),
    restart: () => dispatch({ type: "restart" }),
    moveLeft: () => dispatch({ type: "moveLeft" }),
    moveRight: () => dispatch({ type: "moveRight" }),
    moveDown: () => dispatch({ type: "moveDown" }),
    rotate: () => dispatch({ type: "rotate" }),
  };
};

export default useTetris;
