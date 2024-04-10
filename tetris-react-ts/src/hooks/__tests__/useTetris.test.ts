import { renderHook, act } from "@testing-library/react-hooks";
import useTetris from "../useTetris";
import rotateTetromino from "../../lib/rotateTetromino";
import moveDown from "../../lib/moveDown";
import moveRight from "../../lib/moveRight";
import moveLeft from "../../lib/moveLeft";
import togglePause from "../../lib/togglePause";

describe("useTetris()", () => {
  it("returns the initial game state", () => {
    const { result } = renderHook(() => useTetris());
    expect(result.current.state).toBeTruthy();
  });

  it("returns a togglePause control", () => {
    const { result } = renderHook(() => useTetris());
    const state = result.current.state;

    act(() => {
      result.current.togglePause();
    });

    expect(result.current.state).toStrictEqual(togglePause(state));
  });

  it("returns a moveLeft control", () => {
    const { result } = renderHook(() => useTetris());
    const state = result.current.state;

    act(() => {
      result.current.moveLeft();
    });

    expect(result.current.state).toStrictEqual(moveLeft(state));
  });

  it("returns a moveRight control", () => {
    const { result } = renderHook(() => useTetris());
    const state = result.current.state;

    act(() => {
      result.current.moveRight();
    });

    expect(result.current.state).toStrictEqual(moveRight(state));
  });

  it("returns a moveDown control", () => {
    const { result } = renderHook(() => useTetris());
    const state = result.current.state;

    act(() => {
      result.current.moveDown();
    });

    expect(result.current.state).toStrictEqual(moveDown(state));
  });

  it("returns a rotate control", () => {
    const { result } = renderHook(() => useTetris());
    const state = result.current.state;

    act(() => {
      result.current.rotate();
    });

    expect(result.current.state).toStrictEqual(rotateTetromino(state));
  });
});
