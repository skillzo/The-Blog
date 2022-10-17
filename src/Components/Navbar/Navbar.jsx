import React, { useState } from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
function Navbar() {
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
              <li>SCIENCE</li>
              <li>TECH</li>
              <li>POLITICS</li>
              <li>CRYPTO</li>
              <Link to="/search">
                {" "}
                <li>SEARCH</li>
              </Link>
              <li>BOOKMARKS</li>
            </ul>
          </nav>
        </div>
        <div className="navbar-desktop__navlinks">
          <nav>
            <ul>
              <li>LEARN</li>
              <li>BLOG</li>
              <li>BOOKMARKS</li>
              <li>UI KIT</li>
              <li>LAIN NYA</li>
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
      <div className="navbar-desktop__socials">
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
