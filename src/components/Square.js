import React from "react";

// export default function Square(props) {
//   const [state, setState] = React.useState({ value: null });
//   return (
//     <button className="square" onClick={() => alert("click")}>
//       {props.value}
//     </button>
//   );
// }
// das onClick ersetzt den addEventListener

// ersetze man das ("click") durch (props.value) würden die jeweiligen Inhalte aus Kästchen im ALERT erscheinen.
// export default function Square(props) {
//   const [state, setState] = React.useState({ value: null });
//   return (
//     <button className="square" onClick={() => props.onClick()}>
//       {props.value}
//     </button>
//   );
// }
export default function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}
