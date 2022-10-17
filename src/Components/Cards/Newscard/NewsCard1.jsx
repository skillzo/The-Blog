import React from "react";
import { Link } from "react-router-dom";
import "./newcard1.css";

function NewsCard1({ date, image, title, summary, id }) {
  return (
    <div className="header-newscard1-container">
      <div className="newscard1">
        <div className="newscard1-image">
          <img src={image} alt="" />
        </div>
        <Link to={`/${id}`}>
          <div className="newscard1-details">
            <p>{date}</p>
            <h2>{title}</h2>
            <p className="newscard1-summary">{summary}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NewsCard1;
