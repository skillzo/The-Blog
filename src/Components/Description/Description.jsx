import React from "react";
import "./description.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CommentIcon from "@mui/icons-material/Comment";
import { useNews } from "../../Store/Context/AuthContext";

function Description({ summary, author, category, copyright, link }) {
  const { state } = useNews();
  return (
    <>
      <div className="newsinfo-info">
        <div className="newsinfo-author">
          <img
            src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG"
            alt=""
          />
          <p>{author}</p>
        </div>
        <div className="newsinfo-views newsinfo-comments__main">
          <VisibilityIcon sx={{ fontSize: 20 }} /> 376
        </div>
        <div className="newsinfo-comments__main">
          <CommentIcon sx={{ fontSize: 20 }} /> {state.comment.length}
        </div>
      </div>
      <div className="newsinfo-description">
        <p>{summary}</p>
        <a href={link}>
          <p className="newsinfo-link">Read more</p>
        </a>
      </div>
      <div className="newsinfo-copyright">
        <p>{copyright}</p>
      </div>
      <div className="newsinfo-tags">
        <div className="newsinfo-tags__main">Elon Musk</div>
        <div className="newsinfo-tags__main">{category}</div>
        <div className="newsinfo-tags__main">Tech</div>
      </div>
    </>
  );
}

export default Description;
