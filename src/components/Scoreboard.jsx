import { useEffect, useRef } from "react";
import "../styles/Scoreboard.css";

export default function Scoreboard({ currentScore, bestScore }) {
  const currentScoreRef = useRef(null);
  const bestScoreRef = useRef(null);

  useEffect(() => {
    currentScoreRef.current.classList.add("fade-in");
    setTimeout(() => {
      currentScoreRef.current.classList.remove("fade-in");
    }, 500);
  }, [currentScore]);

  useEffect(() => {
    bestScoreRef.current.classList.add("fade-in");
    setTimeout(() => {
      bestScoreRef.current.classList.remove("fade-in");
    }, 500);
  }, [bestScore]);

  return (
    <div id="scoreboard">
      <h3>
        Current score:{" "}
        <span ref={currentScoreRef} className="current-score">
          {currentScore}
        </span>
      </h3>
      <h3>
        Best score:{" "}
        <span ref={bestScoreRef} className="best-score">
          {bestScore}
        </span>
      </h3>
    </div>
  );
}
