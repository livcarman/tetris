import { useContext } from "react";
import TetrisContext from "../context/TetrisContext";
import NextBlock from "./NextBlock";
import Controls from "./Controls";

const GameInfo = () => {
  const { score, level } = useContext(TetrisContext);

  return (
    <div className="GameInfo" data-testid="GameInfo">
      <table>
        <tbody>
          <tr data-testid="GameInfo__score">
            <th scope="row">Score: </th>
            <td>{score}</td>
          </tr>
          <tr data-testid="GameInfo__level">
            <th scope="row">Level: </th>
            <td>{level}</td>
          </tr>
        </tbody>
      </table>
      <figure data-testid="GameInfo__next" className="GameInfo__next">
        <NextBlock />
        <figcaption className="GameInfo__next__caption">Next Block</figcaption>
      </figure>
      <Controls />
    </div>
  );
};

export default GameInfo;
