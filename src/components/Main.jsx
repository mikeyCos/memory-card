import { useEffect, useMemo, useState } from "react";
import Cards from "./Cards";
import "../styles/main.css";

export default function Main({
  gameWinRef,
  newGame,
  gameOver,
  currentScore,
  bestScore,
  setGameOver,
  setCurrentScore,
  setBestScore,
}) {
  return (
    <main>
      <Cards
        gameWinRef={gameWinRef}
        newGame={newGame}
        gameOver={gameOver}
        currentScore={currentScore}
        bestScore={bestScore}
        setGameOver={setGameOver}
        setCurrentScore={setCurrentScore}
        setBestScore={setBestScore}
      />
    </main>
  );
}
