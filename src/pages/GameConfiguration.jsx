import React, { useEffect } from "react";
import Header from "../components/Header";
import GameBubble from "../components/GameBubble";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getJuegos } from "../actions/juego";

import "../styles/pages/gameConfiguration.css";

const GameConfiguration = ({ getJuegos, juego: { juegos, loading } }) => {
  useEffect(() => {
    getJuegos();
  }, [getJuegos]);

  return loading ? (
    <h1>Cargando...</h1>
  ) : (
    <>
      <Header />
      <div className="game-configuration">
        <h2>Configuracion de Juegos</h2>
        <div className="game-configuration-bubble">
          {juegos.map((juego) => (
            <>
              <Link to={`/juego/${juego.id}`}>
                {console.log(juego)}
                <GameBubble key={juego.id} juego={juego} />
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

GameConfiguration.propTypes = {
  getJuegos: PropTypes.func.isRequired,
  juego: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  juego: state.juego,
});

export default connect(mapStateToProps, { getJuegos })(GameConfiguration);
