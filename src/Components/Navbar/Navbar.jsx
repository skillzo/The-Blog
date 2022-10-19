import React, { useState } from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useNews } from "../../Store/Context/AuthContext";
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
  const { setInput } = useNews();
  const [isClicked, setIsClicked] = useState(true);

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
              <li onClick={() => setInput("science")}>SCIENCE</li>
              <li onClick={() => setInput("tech")}>TECH</li>
              <li onClick={() => setInput("politics")}>POLITICS</li>
              <li onClick={() => setInput("crypto")}>CRYPTO</li>
              <li onClick={() => setInput("business")}>BUSINESS</li>
              <li onClick={() => setInput("economics")}>ECONOMICS</li>
              <li onClick={() => setInput("entertainment")}>ENTERTAINMENT</li>
              <li onClick={() => setInput("sport")}>SPORT</li>
              <li onClick={() => setInput("finance")}>FINANCE</li>
              <li onClick={() => setInput(`${keyword[randomNumber]}`)}>
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
        </div>
      </div>
      <div className="navbar-mobile__socials">
        <div>logo</div>
        <div>logo</div>
        <div>logo</div>
        <div>logo</div>
      </div>
      <div className="ham" onClick={clickHandler}>
        {isClicked ? <MenuIcon /> : <CloseIcon />}
      </div>
    </div>
  );
}

export default Navbar;
