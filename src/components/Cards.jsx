import { useEffect, useMemo, useState } from "react";
import Slider from "./Slider";
import THECATAPI_KEY from "../data/THECATAPI_KEY";
import "../styles/cards.css";

let renderCount = 0;
export default function Cards({
  currentScore,
  bestScore,
  setCurrentScore,
  setBestScore,
}) {
  renderCount++;
  const [cardCount, setCardCount] = useState(6);
  const [cards, setCards] = useState(null);

  useEffect(() => {
    // Problem, re-renders immediately onload
    console.log("mounting");
    console.log("cardCount:", cardCount);
    // setCards(buildArray(cardCount));
    buildArray(cardCount, setCards);
    return () => {
      console.log("cleaning");
      return null;
    };
  }, [cardCount]);

  // const cards = useMemo(() => {
  //   return buildArray(cardCount);
  // }, [cardCount]);

  console.log("-------------renderCount:", renderCount);
  console.log("cardCount:", cardCount);

  console.log(cards);

  //  https://api.thecatapi.com/v1/images/search?limit=10&api_key=
  // https://api.thecatapi.com/v1/images/search?limit=${cardCount}&api_key=${THECATAPI_KEY}
  return (
    <>
      <Slider
        cardCount={cardCount}
        currentScore={currentScore}
        bestScore={bestScore}
        setCardCount={setCardCount}
        setCurrentScore={setCurrentScore}
        setBestScore={setBestScore}
      />
      <section id="cards">
        <div className="cards-container">
          {cards?.map((item) => (
            <Card
              key={item.id}
              item={item.url}
              cardCount={cardCount}
              setCards={setCards}
              shuffleCards={() => setCards(shuffle(cards))}
              currentScore={currentScore}
              setCurrentScore={setCurrentScore}
              setBestScore={setBestScore}
            />
          ))}
        </div>
      </section>
    </>
  );
}

function Card({
  item,
  cardCount,
  setCards,
  shuffleCards,
  currentScore,
  setCurrentScore,
  setBestScore,
}) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      className="card"
      onClick={() => {
        if (isClicked) {
          setCurrentScore(0);
          setBestScore(currentScore);
          // setCards(buildArray(cardCount));
          buildArray(cardCount, setCards);
        } else {
          setIsClicked(true);
          setCurrentScore(currentScore + 1);
          shuffleCards();
        }
      }}
    >
      <img src={item} />
    </div>
  );
}

const buildArray = async (length, callback) => {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?size=small&limit=${length}&mime_types=png&api_key=${THECATAPI_KEY}`,
      { mode: "cors" }
    );
    const data = await response.json();
    callback(data);
  } catch (err) {
    console.log(err);
  }
  // return new Array(length).fill().map(() => Math.floor(Math.random() * 1000));
};

const shuffle = (arr) => {
  let i = arr.length;
  const shuffledArr = [...arr];
  while (i) {
    const randomIndex = Math.floor(Math.random() * i--);
    const temp = shuffledArr[i];
    shuffledArr[i] = shuffledArr[randomIndex];
    shuffledArr[randomIndex] = temp;
  }
  return shuffledArr;
};

// https://cataas.com/
// https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
// Need to put cat image urls inside an array
// Fetch before/during render?
// If fetch before rendering, how to setup a loading screen?
