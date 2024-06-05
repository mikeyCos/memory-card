import Cards from "./Cards";
import "../styles/Main.css";

export default function Main({
  gameStatusRef,
  gameWinRef,
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
        gameStatusRef={gameStatusRef}
        gameWinRef={gameWinRef}
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
