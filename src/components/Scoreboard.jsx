import "../styles/Scoreboard.css";

export default function Scoreboard({ currentScore, bestScore }) {
  return (
    <div id="scoreboard">
      <h3>
        Current score: <span className="current-score">{currentScore}</span>
      </h3>
      <h3>
        Best score: <span className="best-score">{bestScore}</span>
      </h3>
    </div>
  );
}
