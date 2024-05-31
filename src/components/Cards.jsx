import { useState } from "react";
import Slider from "./Slider";

export default function Cards() {
  const [cardCount, setCardCount] = useState(9);
  console.log(cardCount);
  const cards = new Array(cardCount)
    .fill()
    .map(() => Math.floor(Math.random() * 1000));

  console.log(cards);
  console.log(cards.length);
  return (
    <>
      <Slider cardCount={cardCount} updateCardCount={setCardCount} />
      <section id="cards">
        <div className="cards-container">
          {cards.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </section>
    </>
  );
}

function Card() {
  return <div></div>;
}

// https://cataas.com/
// Need to put cat image urls inside an array
// Fetch before/during render?
// If fetch before rendering, how to setup a loading screen?
