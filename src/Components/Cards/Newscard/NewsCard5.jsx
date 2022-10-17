import React from "react";
import "./newscard5.css";

function NewsCard5({ title, image }) {
  return (
    <div className="newscard5">
      <div className="newscard5-image">
        <img src={image} alt="" />
      </div>
      <div className="newscard5-title">
        <div>{title.slice(0, 80)}</div>
      </div>
    </div>
  );
}

export default NewsCard5;
