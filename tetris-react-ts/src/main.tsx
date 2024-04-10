import React from "react";
import ReactDOM from "react-dom/client";
import Tetris from "./components/Tetris";

import "normalize.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Tetris />
  </React.StrictMode>
);
