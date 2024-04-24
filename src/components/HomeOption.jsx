import React from "react";

import "../styles/components/homeOption.css";

const HomeOption = ({ title, onClick, image }) => {
  return (
    <div className="home-option" onClick={onClick}>
      <img src={image} className="home-option-image" />
      <p className="home-option-text">{title}</p>
    </div>
  );
};

export default HomeOption;
