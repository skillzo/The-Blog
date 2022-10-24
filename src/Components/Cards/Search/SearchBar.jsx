import React from "react";
import "./searchbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNews } from "../../../Store/Context/AuthContext";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
function SearchBar() {
  const navigate = useNavigate();
  const { input, inputHandler } = useNews();
  return (
    <div className="scontainer">
      <div className="back-icon" onClick={() => navigate(-1)}>
        <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
      </div>
      <div className="search-container">
        <SearchIcon sx={{ color: "#ccc" }} />
        <input
          type="search"
          placeholder="Search your intresting news..."
          value={input}
          onChange={inputHandler}
        />
      </div>
    </div>
  );
}

export default SearchBar;
