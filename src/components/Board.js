import React from "react";
import Square from "./Square";
import calculateWinner from "../api/calculateWinner";

function Board() {
  const [state, setState] = React.useState({
    squares: Array(9).fill(null),
    xIsNext: true
  });

  const winner = calculateWinner(state.squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${state.xIsNext ? "X" : "O"}`;
  }

  function handleClick(index) {
    if (state.squares[index]) {
      return;
    }
    if (winner) {
      return;
    }

    //Alternativ
    // function handleClick(index) {
    //   if (state.squares[index] || calculateWinner(state.squares)) {
    //     return;
    //   }

    const squaresCopy = state.squares.slice();
    squaresCopy[index] = state.xIsNext ? "X" : "0";
    setState({ squares: squaresCopy, xIsNext: !state.xIsNext });
  }

  // Der Stopp lässt sich auch durch ein disable der funktion unten anführe
  function renderSquare(index) {
    return (
      <Square value={state.squares[index]} onClick={() => handleClick(index)} />
    );
  }

  //Lenas Ansatz
  // function getNextPlayer(xIsNext) {
  //   if (state.xIsNext) {
  //     return "Next player: X";
  //   } else {
  //     return "Next player: 0";
  //   }
  // }
  // const status = getNextPlayer(state.xIsNext);

  // in der KOnsole : Array(9).fill(null) zeigt dann neun mal im null im Array an. squares in dem Fall eine Propertie.

  //default state und set-State

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
export default Board;
