import React from "react";
import "./newsinfo.css";
import { useParams } from "react-router-dom";
import Header2 from "../../Components/Header/Header2";
import CommentCard from "../../Components/Comment/CommentCard";
import Description from "../../Components/Description/Description";
import InputComment from "../../Components/Comment/InputComment";
import { useNews } from "../../Store/Context/AuthContext";
import useFetch from "../../Store/ApiStore/useFetch";
import {
  Image2Skeleton,
  TextSkeleton,
} from "../../Components/Skeleton/Skeletons";

function NewsInfo() {
  const { newData, loading } = useFetch();
  const { state } = useNews();
  const { id } = useParams();
  const newsData2 = newData.filter((news) => {
    return news.id === id;
  });
  return (
    <div className="newsinfo-container">
      {loading && <Image2Skeleton />}
      {newsData2?.map((news) => {
        return (
          <Header2
            key={news.id}
            id={news.id}
            image={news.image}
            title={news.title}
            summay={news.summary}
            category={news.category}
            // news={news}
          />
        );
      })}
      <div className="newsinfo-body">
        {loading && <TextSkeleton />}
        {newsData2.map((news) => {
          return (
            <Description
              key={news.id}
              id={news.id}
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
