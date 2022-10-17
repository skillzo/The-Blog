import React from "react";
import NewsLetter from "../Cards/NewsLetter/NewsLetter";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <NewsLetter />
      <div className="footer2">
        <div className="footer2-nav">
          <p>privacy policy</p>
          <p>Terms of Service</p>
          <p>FAQs</p>
        </div>
        <div className="footer2-date">
          <p>@ 2022, All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
