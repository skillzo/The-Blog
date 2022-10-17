import React from "react";
import "./search.css";
import NewsCard4 from "../../Components/Cards/Newscard/NewsCard4";
import SearchBar from "../../Components/Cards/Search/SearchBar";
import Wrapper from "../../Wrapper/Wrapper";
import { newNewsData } from "../../Store/ApiStore/LocalData";
import NewsCard5 from "../../Components/Cards/Newscard/NewsCard5";
import { useNews } from "../../Store/Context/AuthContext";
import useFetch from "../../Store/ApiStore/useFetch";

function Search() {
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
  const { input } = useNews();
  const filteredData = newData.filter((news) => {
    return news.title.toLowerCase().includes(input.toLowerCase());
  });
  console.log(newData);
  return (
    <Wrapper>
      <SearchBar />
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
