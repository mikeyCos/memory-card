import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import "./styles/App.css";

export default function App() {
  const [gameOver, setGameOver] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(currentScore);
  const gameWinRef = useRef(false);
  const gameStatusRef = useRef(null);
  return (
    <div id="app">
      <Header currentScore={currentScore} bestScore={bestScore} />
      <Main
        gameStatusRef={gameStatusRef}
        gameWinRef={gameWinRef}
        gameOver={gameOver}
        currentScore={currentScore}
        bestScore={bestScore}
        setGameOver={setGameOver}
        setCurrentScore={setCurrentScore}
        setBestScore={setBestScore}
      />
      <Footer />
      {gameOver && (
        <Modal
          gameWinRef={gameWinRef}
          openModal={gameOver}
          closeModal={(isNewGame) => {
            gameWinRef.current = false;
            const { newGame, tryAgain } = gameStatusRef.current;
            if (isNewGame) {
              newGame.fn(newGame.args);
            } else {
              const { callback, cards } = tryAgain.args;
              tryAgain.fn(callback(cards));
            }
            setGameOver(false);
          }}
        />
      )}
    </div>
  );
}

/*
 * Take some time to think about the features you want to implement, which components you need, how to structure your application, and how to get the images from an API.
 * Your application should include a scoreboard, which counts the current score, and a “Best Score”, which shows the highest score you’ve achieved thus far.
 * There should be a function that displays the cards in a random order anytime a user clicks one.
 * Be sure to invoke that function when the component mounts.
 */

/*
 * Need:
 * Scoreboard
 *    Current score
 *    Best score
 * Card container
 *    Card
 * Card count slider (?)
 *    Min/max
 *    Card count
 * A way to fetch data from an API
 * Game status pop up (?)
 *    Try Again Button
 *    New Game Button
 *
 * Behavior:
 *    On load
 *      Card count is set to 9
 *      The page will always render 9 cards
 *          Each time the card is rendered:
 *              Fetch data from an API
 *              Place fetched data into card content
 *      Score is set to 0
 *      Best score is set to 0
 *      When an image is clicked:
 *          If clicked image has not been clicked, current score increments by one
 *              If current score is equal to card count
 *                  Set game over state to true (?)
 *              Shuffle images (re-render)
 *          If clicked image has already been clicked
 *              Set game over state to true (?)
 *              If current score is greater than best score
 *                  Set best score to current score
 *                  Current score resets to 0
 *
 *    On change card count slider
 *      Card count is set to the value of card count slider
 *      Render cards based on card count's value
 *      Score is set to 0
 *      Best score is set to 0
 *
 *    If game over state is true (?)
 *      Render a pop up (dialog element)
 *
 * Possible problems:
 *    Duplicate images may occur when fetching X amount of 'random' images from an API
 *    useEffect issues(?)
 */
