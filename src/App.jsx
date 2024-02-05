import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [board, setBoard] = useState(Array(9).fill("inside-game"));
  const [isFirst, setIsFirst] = useState(true);
  const [prevMove, setPrevMove] = useState(null);

  const handleMainChange = (index, parentIndex) => {
    if (isFirst) {
      setIsFirst(false);
      setPrevMove(index);
      const newBoard = Array(9).fill("inside-game-not-allow");
      newBoard[index] = "inside-game-allow";
      setBoard(newBoard);
      return true;
    }
    if (parentIndex !== prevMove) {
      return false;
    }
    setPrevMove(index);
    const newBoard = Array(9).fill("inside-game-not-allow");
    newBoard[index] = "inside-game-allow";
    setBoard(newBoard);
    return true;
  };

  return (
    <main className="body">
      <section className="game">
        {board.map((value, index) => {
          return (
            <Board
              classType={isFirst ? "inside-game" : value}
              handleMainChange={handleMainChange}
              key={index}
              parentIndex={index}
              value={value}
            />
          );
        })}
      </section>
    </main>
  );
}

export default App;
