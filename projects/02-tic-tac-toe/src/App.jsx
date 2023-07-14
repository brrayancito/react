import { useState } from "react";
import confetti from "canvas-confetti";

import Square from "./components/Square";
import { TURNS } from "./constants";
import { WinnerModal } from "./components/WinnerModal";
import { checkWinnerFrom, checkEndGameFrom } from "./logic/board.js";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = localStorage.getItem("board");
    if (boardFromStorage) return JSON.parse(boardFromStorage);
    return Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = localStorage.getItem("turn");

    return turnFromStorage ?? TURNS.X;
  });

  const [winner, setWinner] = useState(null); // Null: Ninguno , False: Empate, True: Ganador

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    localStorage.removeItem("board");
    localStorage.removeItem("turn");
  };

  const updatedBoard = (index) => {
    // Si ya hay un valor en esa posición, retornamos y no hacemos nada.
    if (board[index]) return;

    // Si no hay nada en esa posición, actualizamos  el board
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Actualizamos  el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Guardar el board en el localStorage
    localStorage.setItem("board", JSON.stringify(newBoard));
    // Guardar el turno en el localStorage
    localStorage.setItem("turn", newTurn);

    // Check para ver si tenemos un ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGameFrom(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Game Reset</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updatedBoard={updatedBoard}>
              {square}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
