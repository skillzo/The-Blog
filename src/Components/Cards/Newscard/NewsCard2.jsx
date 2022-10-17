import React from "react";
import { Link } from "react-router-dom";
import "./newscard2.css";

function NewsCard2({
  bgColor,
  color,
  fontSize,
  height,
  width,
  borderRadius,
  date,
  description,
  image,
  id,
}) {
  return (
    <Link to={`/${id}`}>
      <div
        className="newscard2"
        style={{
          backgroundColor: bgColor,
          color: color,
          fontSize: fontSize,
          height: height,
          width: width,
          borderRadius: borderRadius,
        }}
      >
        <div className="newcard2-details">
          <p>{date}</p>
          <h4>{description}</h4>
        </div>
        <div className="newscard2-image">
          <img src={image} alt="" />
        </div>
      </div>
    </Link>
  );
}

export default NewsCard2;
