import React, { useState } from "react";
import "../App.css";

const Board = ({ parentIndex, value, handleMainChange, classType }) => {
  const [board, setBoard] = useState(Array(9).fill(null));

  const handleClick = (index) => {
    const validMove = handleMainChange(index, parentIndex);
    if (!validMove) {
      alert("Movimiento no valido");
      return;
    }
    const boardCopy = [...board];
    boardCopy[index] = "X";
    setBoard(boardCopy);
  };

  return (
    <section className={classType}>
      {board.map((value, index) => {
        return (
          <div
            onClick={() => handleClick(index)}
            key={index}
            className="inside-box"
          >
            {value}
          </div>
        );
      })}
    </section>
  );
};

export default Board;
