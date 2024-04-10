import Cell from "./Cell";
import { TETROMINOS } from "../lib/constants";
import { useContext } from "react";
import TetrisContext from "../context/TetrisContext";

const NextBlock = () => {
  const { nextTetromino } = useContext(TetrisContext);
  const currentTetromino = TETROMINOS[nextTetromino][0];

  return (
    <div className="NextBlock" data-testid="NextBlock">
      {currentTetromino.map((rowArray, y) =>
        rowArray.map((color, x) => (
          <Cell
            key={`${x}${y}`}
            color={color == 0 ? 0 : nextTetromino}
            x={x}
            y={y}
          />
        )),
      )}
    </div>
  );
};

export default NextBlock;
