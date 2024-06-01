import "../styles/slider.css";

export default function Slider({
  cardCount,
  currentScore,
  bestScore,
  setCardCount,
  setCurrentScore,
  setBestScore,
}) {
  return (
    <div className="slider" role="slider">
      <div className="slider-container">
        <label htmlFor="card-count-slider">Cards</label>
        <div className="slider-output">{cardCount}</div>
        <input
          id="card-count-slider"
          type="range"
          min="6"
          max="30"
          step="3"
          onChange={(e) => {
            setCardCount(+e.currentTarget.value);
            bestScore > 0 && setBestScore(0);
            currentScore > 0 && setCurrentScore(0);
          }}
          value={cardCount}
        />
      </div>
    </div>
  );
}
