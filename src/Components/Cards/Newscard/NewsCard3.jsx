import React from "react";
import { Link } from "react-router-dom";
import "./newscard3.css";

function NewsCard3({ width, border, margin, date, title, image, id }) {
  return (
    <div
      className="newscard3"
      style={{ width: width, border: border, margin: margin }}
    >
      <div className="newscard3-image">
        <img src={image} alt="" />
      </div>
      <Link to={`/${id}`}>
        <div className="newcard3-details">
          <p>{date}</p>
          <h4>{title}</h4>
        </div>
      </Link>
    </div>
  );
}

export default NewsCard3;
