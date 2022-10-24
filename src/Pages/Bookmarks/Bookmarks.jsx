import React from "react";
import "./bookmark.css";
import { useNews } from "../../Store/Context/AuthContext";
import NewsCard4 from "../../Components/Cards/Newscard/NewsCard4";
import Wrapper from "../../Wrapper/Wrapper";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

function Bookmarks() {
  const navigate = useNavigate();
  const { state } = useNews();
  return (
    <Wrapper>
      <div className="bookmarks-header">
        <div className="bookmarks-icon" onClick={() => navigate(-1)}>
          <ArrowBackIosNewIcon sx={{ fontSize: 20 }}  />
        </div>
        <h2>Bookmarks</h2>
      </div>
      {state.bookmarks.map((news) => {
        return (
          <NewsCard4
            key={news.id}
            id={news.id}
            image={news.image}
            date={news.published_date.split(" ", 1)}
            title={news.title}
            summay={news.summary}
          />
        );
      })}
    </Wrapper>
  );
}

export default Bookmarks;
