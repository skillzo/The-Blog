import React, { useState } from "react";
import "./inputcomment.css";
import SendIcon from "@mui/icons-material/Send";
import { useNews } from "../../Store/Context/AuthContext";
import { ACTIONS } from "../../Store/Context/AuthContext";

function InputComment() {
  const [commentInput, setCommentInput] = useState("");
  const { dispatch } = useNews();
  return (
    <div className="newsinfo-input">
      <input
        type="text"
        placeholder="Type your comment"
        value={commentInput}
        onChange={(e) => setCommentInput(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({
            type: ACTIONS.ADD_COMMENT,
            payload: { value: commentInput },
          });
          setCommentInput("");
        }}
      >
        <SendIcon />
      </button>
    </div>
  );
}

export default InputComment;
