import React from "react";
import EmailIcon from "@mui/icons-material/Email";

function NewsLetter() {
  return (
    <div className="footer-newletter">
      <div>
        <h2>Newsletter</h2>
        <p>Be the first one to know about discounts, offer and events</p>
      </div>
      <div className="footer-input">
        <EmailIcon sx={{ color: "#a2adb8" }} />
        <input type="email" placeholder="Enter Your Email:" />
        <button className="button1">Submit</button>
      </div>
    </div>
  );
}

export default NewsLetter;
