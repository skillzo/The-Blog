import React from "react";
import "./search.css";
import NewsCard4 from "../../Components/Cards/Newscard/NewsCard4";
import SearchBar from "../../Components/Cards/Search/SearchBar";
import Wrapper from "../../Wrapper/Wrapper";
import NewsCard5 from "../../Components/Cards/Newscard/NewsCard5";
import { useNews } from "../../Store/Context/AuthContext";
import useFetch from "../../Store/ApiStore/useFetch";
import { Card1Skeleton, Card2Skeleton } from "../../Components/Skeleton/Skeletons";

function Search() {
  const { newData, loading } = useFetch();
  const { input } = useNews();
  const filteredData = newData.filter((news) => {
    return news.title.toLowerCase().includes(input.toLowerCase());
  });
  console.log(newData);
  return (
    <Wrapper>
      <SearchBar />
      {loading && <Card2Skeleton />}
      <div className="search-filter">
        <div className="scroller">
          {newData.map((news) => {
            return (
              <NewsCard5
                key={news.id}
                id={news.id}
                image={news.image}
                title={news.title}
              />
            );
          })}
        </div>
      </div>
      {loading && (
        <div>
          <Card1Skeleton /> <Card1Skeleton />
          <Card1Skeleton /> <Card1Skeleton />
        </div>
      )}
      {filteredData.map((news) => {
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

export default Search;
