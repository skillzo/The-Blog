import React from "react";
import NewsCard1 from "../../Components/Cards/Newscard/NewsCard1";
import NewsCard2 from "../../Components/Cards/Newscard/NewsCard2";
import NewsCard3 from "../../Components/Cards/Newscard/NewsCard3";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import {
  Card1Skeleton,
  Card2Skeleton,
  ImageSkeleton,
} from "../../Components/Skeleton/Skeletons";
import useFetch from "../../Store/ApiStore/useFetch";
import "../../App.css";

function Home() {
  const { newData, loading, error } = useFetch();
  return (
    <>
      <div className="container">
        {error && <h1>An Error Occured</h1>}
        <div className="container1">
          <Navbar />
          <h1 className="header-main">THE BLOG</h1>

          <div className="header-container">
            {loading && <ImageSkeleton />}
            {newData.slice(0, 1).map((news) => {
              return (
                <NewsCard1
                  key={news.id}
                  id={news.id}
                  image={news.image}
                  date={news.published_date.split(" ", 1)}
                  title={news.title}
                  summary={news.summary.slice(0, 400)}
                />
              );
            })}

            <div className="header-newscard2-container">
              {loading && <Card1Skeleton />}
              {newData.slice(1, 5).map((news) => {
                return (
                  <NewsCard2
                    key={news.id}
                    id={news.id}
                    image={news.image}
                    date={news.published_date.split(" ", 1)}
                    description={news.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {loading && <Card2Skeleton />}
        <div className="section2-container">
          {newData.slice(6, 12).map((news) => {
            return (
              <NewsCard3
                key={news.id}
                id={news.id}
                image={news.image}
                date={news.published_date.slice("", 10)}
                title={news.title}
              />
            );
          })}
        </div>
        <Footer />
      </div>
      <div className="on-desktop">
        This app is optimized for just mobile please view on a mobile device
      </div>
    </>
  );
}

export default Home;
