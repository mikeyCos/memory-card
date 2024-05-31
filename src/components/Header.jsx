import GithubIcon from "../assets/icons/github-mark/github-mark.svg?react";
import "../styles/header.css";

export default function Header() {
  return (
    <header>
      <nav id="navbar">
        <ul className="nav-left">
          <li>
            <a href="#">
              <img src="#"></img>
              <h1>Memory Card</h1>
            </a>
          </li>
        </ul>
        <ul className="nav-right">
          <li>
            <a href="#" target="_blank">
              <GithubIcon className="icon github" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
