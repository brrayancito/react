import { WINNING_COMBINATIONS } from "../constants.js";

//Función para determinar si hay un ganador
export const checkWinnerFrom = (boardToCheck) => {
  for (const combination of WINNING_COMBINATIONS) {
    // Revisamnos todas las combinaciones ganadoras para ver si X u O gano.
    const [a, b, c] = combination;

    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }

  // Si no hay ningón ganador, retornamos null
  return null;
};

export const checkEndGameFrom = (newBoard) => {
  // Si no hay espacios vacios en el tablero, entonces es un empate
  return newBoard.every((Square) => Square !== null);
};
