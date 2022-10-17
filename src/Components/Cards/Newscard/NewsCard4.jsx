import React from "react";
import "./newscard4.css";
import { Link } from "react-router-dom";

function NewsCard4({ image, title, date, id }) {
  return (
    <Link to={`/${id}`}>
      <div className="newscard4">
        <div className="newcard4-details">
          <p>{date}</p>
          <h4>{title}</h4>
        </div>
        <div className="newscard4-image">
          <img src={image} alt="" />
        </div>
      </div>
    </Link>
  );
}

export default NewsCard4;
