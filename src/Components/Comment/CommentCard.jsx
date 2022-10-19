import React from "react";
import { ACTIONS, useNews } from "../../Store/Context/AuthContext";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./commentcard.css";

function CommentCard({ comment, id }) {
  const { dispatch } = useNews();
  return (
    <div className="newsinfo-comment__container">
      <div className="newsinfo-comment__image">
        <img
          src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG"
          alt=""
        />
      </div>
      <div className="newsinfo-comment">
        <div className="newsinfo-comment__user">
          <div className="newsinfo-comment__name">Alex Suprun</div>
          <div className="newsinfo-comment__time">1 minute ago</div>
        </div>
        <div className="comment-section">
          <div className="newsinfo-comment__main">{comment}</div>
          <div className="manage-comment">
            <EditIcon sx={{ color: "#B6B6B6" }} />
            <DeleteIcon
              sx={{ color: "#cf3232" }}
              onClick={() => {
                dispatch({ type: ACTIONS.REMOVE_COMMENT, payload: { id: id } });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
