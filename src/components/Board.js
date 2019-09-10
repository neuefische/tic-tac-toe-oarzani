import React from "react";
import Square from "./Square";

// function renderSquare(index) {
//   return <Square value={index} />;
// } Wurde nach untern verschoben

function Board() {
  const [state, setState] = React.useState({
    squares: Array(9).fill(null),
    xIsNext: true
  });
  // function handleClick(index) {
  //   alert(index);
  // }
  function handleClick(index) {
    // Immutability
    const squaresCopy = state.squares.slice();
    squaresCopy[index] = state.xIsNext ? "X" : "0";
    setState({ squares: squaresCopy, xIsNext: !state.xIsNext });
    // mittels sclice wird ein Array kopiert anstatt es zu bennenen.
  }
  function renderSquare(index) {
    return (
      <Square value={state.squares[index]} onClick={() => handleClick(index)} />
    );
  }
  // state.xIsNext

  // const status = state.xIsNext ? "Next Player: X" : "Next Player: O";

  //Optimale Lösung :
  const status = `Next player: ${state.xIsNext ? "X" : "O"}`;

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
