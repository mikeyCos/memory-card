import { useEffect, useMemo, useState } from "react";
import Cards from "./Cards";
import "../styles/main.css";

export default function Main({
  currentScore,
  bestScore,
  setCurrentScore,
  setBestScore,
}) {
  return (
    <main>
      <Cards
        currentScore={currentScore}
        bestScore={bestScore}
        setCurrentScore={setCurrentScore}
        setBestScore={setBestScore}
      />
    </main>
  );
}
