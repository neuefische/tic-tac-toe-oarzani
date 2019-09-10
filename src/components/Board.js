import React from "react";
import Square from "./Square";

function renderSquare(index) {
  return <Square value={index} />;
}

function Board() {
  const status = "Next player: X";

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare("dassssss")}
        {renderSquare(0)}
        {renderSquare(3)}
      </div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare("b")}
        {renderSquare(0)}
      </div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(0)}
        {renderSquare(0)}
      </div>
    </div>
  );
}
export default Board;
