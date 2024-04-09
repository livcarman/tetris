import { BOARD_HEIGHT, BOARD_WIDTH } from "./constants";

const getNewBoard = () =>
  Array(BOARD_HEIGHT).fill(Array(BOARD_WIDTH).fill(0)) as number[][];

export default getNewBoard;
