import React from "react";
import gameImage from "../assets/game1.jpg";

import "../styles/components/homeOption.css";

const HomeOption = ({ title, onClick }) => {
  return (
    <div className="home-option" onClick={onClick}>
      <img src={gameImage} className="home-option-image" />
      <p className="home-option-text">{title}</p>
    </div>
  );
};

export default HomeOption;
