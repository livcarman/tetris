import { useContext } from "react";
import TetrisContext from "../context/TetrisContext";

const StatePopup = () => {
  const { isPaused, isGameOver } = useContext(TetrisContext);
  const visible = isPaused || isGameOver;

  return (
    <div
      className={`StatePopup${visible ? "" : " StatePopup--hidden"}`}
      data-testid="StatePopup"
    >
      {isPaused && "Paused"}
      {isGameOver && "Game Over"}
    </div>
  );
};

export default StatePopup;
