import "../styles/scoreboard.css";

export default function Scoreboard({ currentScore, bestScore }) {
  return (
    <div id="scoreboard">
      <h3>Current score: {currentScore}</h3>
      <h3>Best score: {bestScore}</h3>
    </div>
  );
}
