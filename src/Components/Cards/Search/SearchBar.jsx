import React from "react";
import "./searchbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNews } from "../../../Store/Context/AuthContext";
function SearchBar() {
  const { input, inputHandler } = useNews();
  return (
    <div className="search-container">
      <SearchIcon />
      <input
        type="search"
        placeholder="Search your intresting news..."
        value={input}
        onChange={inputHandler}
      />
    </div>
  );
}

export default SearchBar;
