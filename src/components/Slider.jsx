import debounce from "../utilities/debounce";
import "../styles/Slider.css";

export default function Slider({
  cardCount,
  currentScore,
  bestScore,
  setCardCount,
  setCurrentScore,
  setBestScore,
}) {
  const onChangeHandler = (e) => {
    setCardCount(+e.target.value);
    bestScore > 0 && setBestScore(0);
    currentScore > 0 && setCurrentScore(0);
  };

  // The input
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
          onChange={debounce(onChangeHandler, 200)}
          defaultValue={cardCount}
        />
      </div>
    </div>
  );
}
