import { useEffect, useRef, useState } from "react";
import Slider from "./Slider";
import THECATAPI_KEY from "../data/THECATAPI_KEY";
import "../styles/Cards.css";

let renderCount = 0;
export default function Cards({
  gameStatusRef,
  gameWinRef,
  gameOver,
  currentScore,
  bestScore,
  setGameOver,
  setCurrentScore,
  setBestScore,
}) {
  renderCount++;
  const [cardCount, setCardCount] = useState(6);
  const [cards, setCards] = useState(null);
  const tryAgain = {
    fn: setCards,
    args: { cards, callback: shuffleCards },
  };

  const newGame = {
    fn: buildArray,
    args: { length: cardCount, callback: setCards },
  };

  const onClickHandler = (isClicked, setIsClicked) => {
    gameStatusRef.current = {
      tryAgain,
      newGame,
    };

    if (isClicked) {
      // Reset currentScore to 0
      // If currentScore is > bestScore set bestScore to currentScore
      // Create new array of cards
      setCurrentScore(0);
      if (currentScore > bestScore) setBestScore(currentScore);
      setGameOver(true);
    } else {
      // Calculate currentScore + 1 and store into newScore variable
      // Record card has been clicked
      const newScore = currentScore + 1;
      setIsClicked(true);
      setCurrentScore(newScore);

      const checkScore = newScore === cardCount;
      if (checkScore) {
        gameWinRef.current = true;
        setGameOver(true);
        setBestScore(newScore);
        setCurrentScore(0);
      } else {
        setCards(shuffleCards(cards));
      }
    }
  };

  useEffect(() => {
    // Problem, re-renders immediately onload
    // Where and what is causing the re-renders (╯°□°)╯︵ ┻━┻
    console.group();
    console.log("mounting");
    console.log("cardCount:", cardCount);
    console.log("-------------renderCount:", renderCount);
    console.groupEnd();
    // Option 1
    buildArray({ length: cardCount, callback: setCards });
    // Option 2
    // How to throw error based on
    // fetch(
    //   `https://api.thecatapi.co/v1/images/search?size=small&limit=${cardCount}&mime_types=png`,
    //   { mode: "cors", headers: { "x-api-key": THECATAPI_KEY } }
    // )
    //   .then((response) => response.json())
    //   .then((data) => setCards(data))
    //   .catch((err) =>
    //     setCards(
    //       new Array(cardCount).fill().map(() => ({
    //         id: Math.floor(Math.random() * 9999),
    //         error: `${err}`,
    //       }))
    //     )
    //   );
  }, [cardCount]);

  console.log("-------------renderCount:", renderCount);
  console.log("cardCount:", cardCount);
  console.log("cards:", cards);

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
        <div className="container">
          {cards?.map((item) => (
            <Card
              key={item.id}
              item={item}
              onClickHandler={onClickHandler}
              gameOver={gameOver}
            />
          ))}
        </div>
      </section>
    </>
  );
}

function Card({ item, onClickHandler, gameOver }) {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (gameOver) setIsClicked(false);
  }, [gameOver]);

  return (
    <div
      className="card"
      onClick={() => onClickHandler(isClicked, setIsClicked)}
    >
      {item.url && <img src={item.url} />}
      {item.error && <div>{item.error}</div>}
    </div>
  );
}

let buildArrayCounter = 0;
const buildArray = async ({ length, callback }) => {
  buildArrayCounter++;
  console.log("buildArrayCounter:", buildArrayCounter);
  // return new Array(length).fill().map(() => Math.floor(Math.random() * 1000));
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?size=small&limit=${length}&mime_types=png`,
      {
        mode: "cors",
        headers: { "x-api-key": THECATAPI_KEY },
      }
    );

    // If fetch fails, lines from below up to the catch block do not run
    // Why? (╯°□°)╯︵ ┻━┻
    // https://jasonwatmore.com/post/2021/10/09/fetch-error-handling-for-failed-http-responses-and-network-errors#:~:text=The%20fetch()%20function%20will,reject(error)%3B%20.
    // The fetch() function will automatically throw an error for network errors
    // but not for HTTP errors such as 4xx or 5xx responses.
    console.log(response);
    const data = await response.json();

    if (!response.ok) throw new Error("Throw error test");

    callback(data);
  } catch (err) {
    console.log(err);
    callback(
      new Array(length)
        .fill()
        .map(() => ({ id: Math.floor(Math.random() * 9999), error: `${err}` }))
    );
  }
};

const shuffleCards = (arr) => {
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
