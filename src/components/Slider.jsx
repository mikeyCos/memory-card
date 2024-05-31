export default function Slider({ cardCount, updateCardCount }) {
  return (
    <div role="slider">
      <label htmlFor="card-count-slider">Slider</label>
      <input
        id="card-count-slider"
        type="range"
        min="6"
        max="60"
        onChange={(e) => {
          console.log(e.currentTarget.value);
          updateCardCount(+e.currentTarget.value);
        }}
        value={cardCount}
      />
    </div>
  );
}
