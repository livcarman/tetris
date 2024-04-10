import { TetrisControls } from "../../hooks/useTetris";

export const getMockControls = (): TetrisControls => ({
  togglePause: vi.fn() as () => void,
  restart: vi.fn() as () => void,
  moveLeft: vi.fn() as () => void,
  moveRight: vi.fn() as () => void,
  moveDown: vi.fn() as () => void,
  rotate: vi.fn() as () => void,
});
