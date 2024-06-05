import Notifications from "./Notifications";
import Scoreboard from "./Scoreboard";
import GithubIcon from "../assets/icons/github-mark/github-mark.svg?react";
import PlayfulCatIcon from "../assets/icons/miscellaneous/undraw_playful_cat.svg?react";
import "../styles/Header.css";

export default function Header({ currentScore, bestScore }) {
  return (
    <header>
      <nav id="navbar">
        <ul className="nav-left">
          <li className="nav-item">
            <a href="#">
              <PlayfulCatIcon className="icon logo" alt="#" />
              <h1>Memory Card</h1>
            </a>
          </li>
        </ul>
        <Notifications currentScore={currentScore} />
        <Scoreboard currentScore={currentScore} bestScore={bestScore} />

        <ul className="nav-right">
          <li className="nav-item">
            <a href="#" target="_blank">
              <GithubIcon className="icon github" alt="#" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
