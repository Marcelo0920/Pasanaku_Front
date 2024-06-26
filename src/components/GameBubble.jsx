import React from "react";

import image from "../assets/game2.jpg";
import { FaRegUser } from "react-icons/fa";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import "../styles/components/gameBubble.css";

const GameBubble = ({ juego }) => {
  console.log(juego);
  return (
    <div className="game-bubble">
      <img src={image} />
      <div>
        <h4 className="game-title">{juego.juego.nombre}</h4>
        <div className="game-bubble-stats">
          <FaRegUser />
          <p>{juego.juego.cant_jugadores}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(GameBubble);
