"use client";
import { cn } from "@/app/lib/utils";
import React, { useState } from "react";

// To do and notes =>
// choose either tailwind or inline styles - would normally choose one or the other for consistency unless there are exceptional cases but used some tailwind for speed and since I was mainly practising the functionality and state management
// would normally extract to several separate components, but kept it all in one component for live coding practise

const ConnectFour = () => {
  // define types
  type IPlayerToken = "R" | "Y"; // R = Red, Y = Yellow
  type ICell = IPlayerToken | null;
  type IBoard = ICell[][];

  // define consts
  const SQUARE_SIZE = 50;
  const NUMBER_OF_ROWS = 6;
  const NUMBER_OF_COLUMNS = 7;

  // create 6x7 board with initial null values
  function createInitialEmptyBoard(): IBoard {
    return Array.from({ length: NUMBER_OF_ROWS }, () =>
      Array<ICell>(NUMBER_OF_COLUMNS).fill(null)
    );
  }

  // define states
  const [board, setBoard] = useState<IBoard>(() => createInitialEmptyBoard());
  const [currentPlayer, setCurrentPlayer] = useState<IPlayerToken>("R");
  const [winner, setWinner] = useState<IPlayerToken | null>(null);
  const [winningCells, setWinningCells] = useState<[number, number][]>([]);
  const [isDraw, setIsDraw] = useState<boolean>(false);

  // reset all states to initial values
  function handleReset() {
    setBoard(createInitialEmptyBoard());
    setCurrentPlayer("R");
    setWinner(null);
    setWinningCells([]);
    setIsDraw(false);
  }

  // check for 4 in a row horizontally, vertically and diagnally for "R" or "Y" respectively
  function checkWinner(
    board: IBoard,
    row: number,
    col: number,
    player: IPlayerToken
  ): boolean {
    const directions = [
      [0, 1], // horizontal
      [1, 0], // vertical
      [1, 1], // diagonal down-right
      [1, -1], // diagonal down-left
    ];

    for (let [dr, dc] of directions) {
      let count = 1;
      let cells: [number, number][] = [[row, col]];

      // check forward
      let r = row + dr,
        c = col + dc;
      while (
        r >= 0 &&
        r < NUMBER_OF_ROWS &&
        c >= 0 &&
        c < NUMBER_OF_COLUMNS &&
        board[r][c] === player
      ) {
        count++;
        cells.push([r, c]);
        r += dr;
        c += dc;
      }

      // check backward
      r = row - dr;
      c = col - dc;
      while (
        r >= 0 &&
        r < NUMBER_OF_ROWS &&
        c >= 0 &&
        c < NUMBER_OF_COLUMNS &&
        board[r][c] === player
      ) {
        count++;
        cells.push([r, c]);
        r -= dr;
        c -= dc;
      }

      if (count >= 4) {
        setWinningCells(cells);
        return true;
      }
    }

    return false;
  }

  const handleDrop = (col: number) => {
    if (winner || isDraw) return; // stop if game over

    // find lowest empty row
    for (let row = NUMBER_OF_ROWS - 1; row >= 0; row--) {
      if (!board[row][col]) {
        const newBoard = board.map((r) => [...r]);
        newBoard[row][col] = currentPlayer;
        setBoard(newBoard);

        if (checkWinner(newBoard, row, col, currentPlayer)) {
          setWinner(currentPlayer);
        } else if (newBoard.every((r) => r.every((cell) => cell !== null))) {
          setIsDraw(true);
        } else {
          setCurrentPlayer(currentPlayer === "R" ? "Y" : "R");
        }
        return;
      }
    }
  };

  const isWinningCell = (r: number, c: number) =>
    winningCells.some(([wr, wc]) => wr === r && wc === c);

  return (
    <div className="flex flex-col items-start justify-start gap-2">
      <h1>Connect Four</h1>
      <div
        className="border-1 border-white/40 rounded-md p-2 gap-2"
        style={{
          backgroundColor: "var(--accent-2)",
          display: "grid",
          gridTemplateColumns: "repeat(7, 50px)",
          minHeight: `${SQUARE_SIZE * 6}`,
          minWidth: `${SQUARE_SIZE * 7}`,
        }}
      >
        <div
          className="col-span-7 rounded-md p-1"
          style={{ backgroundColor: "var(--accent-4)" }}
        >
          <p aria-live="polite">
            <strong>
              {winner
                ? winner === "R"
                  ? `🔴 Red wins! 🎉`
                  : `🟡 Yellow wins! 🎉`
                : isDraw
                ? "It's a draw!"
                : currentPlayer === "R"
                ? `🔴 Red's turn!`
                : `🟡 Yellow's turn!`}
            </strong>
          </p>
        </div>
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              className={cn(
                "opacity-80 aspect-square w-[50px] border border-pink-950/75 hover:cursor-pointer hover:opacity-100 hover:border-pink-800",
                isWinningCell(rowIndex, colIndex) && "border-4 border-teal-500"
              )}
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleDrop(colIndex)}
              style={{
                minWidth: 50,
                minHeight: 50,
                width: 50,
                backgroundColor:
                  cell === "R" ? "red" : cell === "Y" ? "yellow" : "white",
              }}
            />
          ))
        )}
        <div className="flex flex-row items-center justify-center col-span-7">
          <button
            onClick={handleReset}
            className="w-full p-2 rounded-md hover:cursor-pointer hover:bg-pink-800 bg-pink-950 text-white"
            type="button"
          >
            Reset Board
          </button>
        </div>
      </div>
    </div>
  );
};
export default ConnectFour;
