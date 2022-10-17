import React from "react";
import "./newsinfo.css";
import { useParams } from "react-router-dom";
import Header2 from "../../Components/Header/Header2";
import CommentCard from "../../Components/Comment/CommentCard";
import Description from "../../Components/Description/Description";
import InputComment from "../../Components/Comment/InputComment";
import { newNewsData } from "../../Store/ApiStore/LocalData";
import { useNews } from "../../Store/Context/AuthContext";
import useFetch from "../../Store/ApiStore/useFetch";

function NewsInfo() {
  const keyWord = [
    "news",
    "sport",
    "tech",
    "world",
    "finance",
    "politics",
    " business",
    "economics",
    "entertainment",
  ];
  const randomNumber = Math.floor(Math.random() * keyWord.length);
  console.log(randomNumber);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1b4a0c0127mshd14c854b5410d89p1cbec6jsn0264abe15bf4",
      "X-RapidAPI-Host": "newscatcher.p.rapidapi.com",
    },
  };

  const url = `https://newscatcher.p.rapidapi.com/v1/search_enterprise?q=${keyWord[randomNumber]}&lang=en&sort_by=relevancy&page=1&media=True`;
  const { newData, loading, error } = useFetch(url, options);
  const { state } = useNews();
  const { id } = useParams();
  const newsData2 = newData.filter((news) => {
    return news.id === id;
  });
  return (
    <div className="newsinfo-container">
      {newsData2.map((news) => {
        return (
          <Header2
            key={news.id}
            id={news.id}
            image={news.image}
            title={news.title}
            summay={news.summary}
            category={news.category}
          />
        );
      })}
      <div className="newsinfo-body">
        {newsData2.map((news) => {
          return (
            <Description
              key={news.id}
              summary={news.summary}
              author={news.author}
              category={news.category}
              copyright={news.copyright}
              link={news.link}
            />
          );
        })}
        <InputComment />

        {state.comment.map((comment) => {
          return (
            <CommentCard key={comment.id} id={comment.id} comment={comment} />
          );
        })}
      </div>
    </div>
  );
}

export default NewsInfo;
