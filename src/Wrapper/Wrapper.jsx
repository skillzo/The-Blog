import React from "react";
import "./wrapper.css";

function Wrapper({ children }) {
  return <div className="wrapper-container">{children}</div>;
}

export default Wrapper;
