import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Bookmarks from "./Pages/Bookmarks/Bookmarks";
import Home from "./Pages/Home/Home";
import NewsInfo from "./Pages/NewsInfo/NewsInfo";
import Search from "./Pages/Search/Search";
import { NewsContextProvider } from "./Store/Context/AuthContext";

function App() {
  return (
    <NewsContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/:id" element={<NewsInfo />} />
      </Routes>
    </NewsContextProvider>
  );
}
export default App;
