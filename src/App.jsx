import { useRef, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import "./styles/App.css";

export default function App() {
  const [newGame, setNewGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(currentScore);
  const gameWinRef = useRef(false);
  console.log("gameWinRef.current", gameWinRef.current);
  return (
    <div id="app">
      <Header currentScore={currentScore} bestScore={bestScore} />
      <Main
        gameWinRef={gameWinRef}
        newGame={newGame}
        gameOver={gameOver}
        currentScore={currentScore}
        bestScore={bestScore}
        setGameOver={setGameOver}
        setCurrentScore={setCurrentScore}
        setBestScore={setBestScore}
      />
      <Footer />
      {/* {gameOver && (
        <Modal
          gameWinRef={gameWinRef}
          openModal={gameOver}
          closeModal={(newGame) => {
            gameWinRef.current = false;
            setGameOver(false);
            setNewGame(newGame);
          }}
        />
      )} */}
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
 * Card count slider(?)
 *    Min/max
 *    Card count
 * A way to fetch data from an API
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
 *          If clicked image has already been clicked
 *              If current score is greater than best score
 *                  Set best score to current score
 *               Current score resets to 0
 *          All images will shuffle (re-render)
 *
 *    On change card count slider
 *      Card count is set to the value of card count slider
 *      Render cards based on card count's value
 *      Score is set to 0
 *      Best score is set to 0
 *
 * Possible problems:
 *    Duplicate images may occur when fetching X amount of 'random' images from an API
 *    useEffect issues(?)
 */
