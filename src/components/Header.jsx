import React from "react";

import "../styles/components/header.css";

import { IoNotificationsOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="header">
      <div></div>
      <h1>Inicio</h1>
      <div className="nav">
        <IoNotificationsOutline />
        <div className="profile-pic">
          <img />
        </div>
      </div>
    </header>
  );
};

export default Header;
