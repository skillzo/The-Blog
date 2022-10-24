import React from "react";
import "./header2.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import { IconCheckboxes } from "../../Components/Button/Button";
import { useNavigate, Link } from "react-router-dom";
// import { useNews } from "../../Store/Context/AuthContext";

function Header2({ title, image, category }) {
  // const { dispatch } = useNews();
  const navigate = useNavigate();
  return (
    <div className="newsinfo-header">
      <div className="navbar2">
        <div className="navbar2-icon" onClick={() => navigate(-1)}>
          <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
        </div>
        <div className="favorite">
          <div>
            <Link to="/search">
              <SearchIcon sx={{ fontSize: 20 }} />
            </Link>
          </div>
          <div>
            <IconCheckboxes
              sx={{ fontSize: 25 }}
              // onClick={dispatch({
              //   type: ACTIONS.ADD_BOOKMARKS,
              //   // payload: { value: news },
              // })}
            />
          </div>
        </div>
      </div>
      <div className="newsinfo-image">
        <img src={image} alt="" />
      </div>
      <div className="newsinfo-title">
        <div className="newsinfo-category">{category}</div>
        <h2>{title.slice(0, 80)}</h2>
      </div>
    </div>
  );
}

export default Header2;
