import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
import './noughts-and-crosses.css';

const Square = (props) => {
  return <button className="square" onClick={() => props.onClick()}>
            {props.value}
        </button>;
};

const UserName = (props) => {
  const [formValue, setFormValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    props.setUserName(formValue);
  }

  if (isSubmitted) {
    return (
      <h1>Welcome {formValue}</h1>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="container">
      <label>
        {props.label}:
        <input type="text" value={formValue} onChange={handleChange}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

const NoughtsCrosses = (props) => {
  // State:
    // squares = the state itself
    // setSquares = the function to modify squares
    // useState sets squares to default value of array of nulls
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("cross")
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)}/>;
  };

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for(let line of lines) {
      if (squares[line[0]] !== null && (squares[line[0]] === squares[line[1]]) && (squares[line[0]] === squares[line[2]])) {
        console.log(squares[line[0]])
        return squares[line[0]];
      }
    }
  }

  let status;
  let winner = checkWinner();
  if (winner) {
    status = `Winner is ${winner === "X" ? user1 : user2}!`
  }
  else {
    status = `Next player is ${turn === "cross" ? user1 : user2}`
  }

  const handleClick = (i) => {
    const squaresCopy = squares.slice();
    if (squaresCopy[i] || checkWinner()) {
      return;
    }
    squaresCopy[i] = turn === "cross" ? "X" : "O";
    setSquares(squaresCopy);

    if (turn === "cross") {
      setTurn("nought");
    }
    else {
      setTurn("cross");
    }
  }

  return ( 
    <div className='game-board'>
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
      <UserName setUserName={setUser1} label="X"/>
      <UserName setUserName={setUser2} label="O"/>
    </div>
  );
};

// const NoughtsCrosses = (props) => {
//   return (
//     <div className="game">
//       <div className="game-board"> 
//         <Board />
//       </div>
//     </div>
//   );
// };

// ========================================

export default NoughtsCrosses
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Game />);