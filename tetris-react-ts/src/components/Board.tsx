import { useContext } from "react";
import Cell from "./Cell";
import TetrisContext from "../context/TetrisContext";
import getCellColor from "../lib/getCellColor";

const Board = () => {
  const gameState = useContext(TetrisContext);
  const { board } = gameState;

  return (
    <div className="Board" data-testid="Board">
      {board.map((columns, row) =>
        columns.map((cellColor, col) => {
          const key = `${row}${col}`;
          const color = getCellColor(gameState, cellColor, row, col);
          return <Cell color={color} key={key} x={col} y={row} />;
        }),
      )}
    </div>
  );
};

export default Board;
