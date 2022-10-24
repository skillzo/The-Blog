import React from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useNews } from "../../Store/Context/AuthContext";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
function Navbar() {
  const keyword = [
    "news",
    "sport",
    "tech",
    "world",
    "finance",
    "politics",
    " business",
    "economics",
    "entertainment",
    "elon musk",
    "joe biden",
    "fashion",
    "education",
    "housing",
    "employment",
  ];
  const randomNumber = Math.floor(Math.random() * keyword.length);
  const { setInput, isClicked, setIsClicked } = useNews();

  function clickHandler() {
    if (isClicked === false) {
      setIsClicked(true);
    } else if (isClicked === true) {
      setIsClicked(false);
    }
  }

  return (
    <div className="navbar">
      <div className="navbar-mobile__main">
        <div className="navbar-mobile__logo">D</div>
        <div
          style={{ display: isClicked ? "none" : "block" }}
          className="navbar-mobile__navlinks"
        >
          <nav>
            <ul>
              <li
                onClick={() => {
                  setInput("headlines");
                  setIsClicked(true);
                }}
              >
                HEADLINES
              </li>
              <li
                onClick={() => {
                  setInput("science");
                  setIsClicked(true);
                }}
              >
                SCIENCE
              </li>
              <li
                onClick={() => {
                  setInput("tech");
                  setIsClicked(true);
                }}
              >
                TECH
              </li>
              <li
                onClick={() => {
                  setInput("politics");
                  setIsClicked(true);
                }}
              >
                POLITICS
              </li>
              <li
                onClick={() => {
                  setInput("crypto");
                  setIsClicked(true);
                }}
              >
                CRYPTO
              </li>
              <li
                onClick={() => {
                  setInput("business");
                  setIsClicked(true);
                }}
              >
                BUSINESS
              </li>
              <li
                onClick={() => {
                  setInput("economics");
                  setIsClicked(true);
                }}
              >
                ECONOMICS
              </li>
              <li
                onClick={() => {
                  setInput("entertainment");
                  setIsClicked(true);
                }}
              >
                ENTERTAINMENT
              </li>
              <li
                onClick={() => {
                  setInput("sport");
                  setIsClicked(true);
                }}
              >
                SPORT
              </li>
              <li
                onClick={() => {
                  setInput("finance");
                  setIsClicked(true);
                }}
              >
                FINANCE
              </li>
              <li
                onClick={() => {
                  setInput(`${keyword[randomNumber]}`);
                  setIsClicked(true);
                }}
              >
                RANDOM
              </li>
              <Link to="/search">
                <li>SEARCH</li>
              </Link>
              <Link to="/bookmarks">
                <li>BOOKMARKS</li>
              </Link>
            </ul>
          </nav>
          <div className="navbar-mobile__socials">
            <div>
              <InstagramIcon />
            </div>
            <div>
              <TwitterIcon />
            </div>
            <div>
              <LinkedInIcon />
            </div>
            <div>
              <GitHubIcon />
            </div>
          </div>
          {/* /////////////////// */}
        </div>
      </div>

      <div className="ham" onClick={clickHandler}>
        {isClicked ? <MenuIcon /> : <CloseIcon />}
      </div>
    </div>
  );
}

export default Navbar;
