import React, { useEffect } from "react";
import NewsCard1 from "../../Components/Cards/Newscard/NewsCard1";
import NewsCard2 from "../../Components/Cards/Newscard/NewsCard2";
import NewsCard3 from "../../Components/Cards/Newscard/NewsCard3";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import useFetch from "../../Store/ApiStore/useFetch";
import { newsData, newNewsData } from "../../Store/ApiStore/LocalData";
import Skeleton from "@mui/material/Skeleton";

function Home() {
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
  console.log(newData);

  return (
    <div className="container">
      <div className="container1">
        <Navbar />
        <h1 className="header-main">THE BLOG</h1>
        <div className="header-container">
          {/* ////////////Header //////// */}
          {loading && <Skeleton variant="circular" width={40} height={40} />}
          {newData.slice(0, 1).map((news) => {
            return (
              <NewsCard1
                key={news._id}
                image={news.image}
                date={news.published_date.split(" ", 1)}
                title={news.title}
                summary={news.summary.slice(0, 400)}
              />
            );
          })}
          {/* ////////////Headlines Body News //////// */}
          <div className="header-newscard2-container">
            {newData.slice(1, 5).map((news) => {
              return (
                <NewsCard2
                  key={news._id}
                  image={news.image}
                  date={news.published_date.split(" ", 1)}
                  description={news.title}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* //////// Topic Change //////////*/}
      <div className="section2-container">
        {newData.slice(5, 11).map((news) => {
          return (
            <NewsCard3
              key={news._id}
              image={news.image}
              date={news.published_date.slice("", 10)}
              title={news.title}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
