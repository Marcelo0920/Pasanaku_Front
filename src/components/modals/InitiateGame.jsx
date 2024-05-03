import React, { useState } from "react";

import { connect } from "react-redux";
import { startGame } from "../../actions/juego";
import PropTypes from "prop-types";

import "../../styles/components/createGameModal.css";

const InitiateGame = ({ open, onClose, startGame, id }) => {
  if (!open) return null;

  console.log(id);

  const [formData, setFormData] = useState({
    tiempoPuja: 0,
    tiempoInicioPago: 0,
    tiempoPago: 0,
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    startGame(
      id,
      formData.tiempoPuja,
      formData.tiempoInicioPago,
      formData.tiempoPago
    );
  };

  return (
    <div className="overlay">
      <div className="modalContainer">
        <p className="gameModalClose" onClick={onClose}>
          X
        </p>
        <form className="modalContent" onSubmit={handleSubmit}>
          <h2>Setea tu juego</h2>
          <div className="form-inputs">
            <div>
              <div className="column-align margin-bottom-25">
                <label>Puja</label>
                <input
                  className="game-input"
                  value={formData.tiempoPuja}
                  name="tiempoPuja"
                  type="number"
                  placeholder="Tiempo para puja"
                  onChange={(e) => {
                    onChange(e);
                  }}
                />
              </div>

              <div className="column-align margin-bottom-25">
                <label>Tiempo de Inicio de Pago</label>
                <input
                  className="game-input"
                  value={formData.tiempoInicioPago}
                  name="tiempoInicioPago"
                  type="number"
                  placeholder="Tiempo para puja"
                  onChange={(e) => {
                    onChange(e);
                  }}
                />
              </div>

              <div className="column-align margin-bottom-25">
                <label>Tiempo de pago</label>
                <input
                  className="game-input"
                  value={formData.tiempoPago}
                  name="tiempoPago"
                  type="number"
                  placeholder="Tiempo para puja"
                  onChange={(e) => {
                    onChange(e);
                  }}
                />
              </div>
            </div>
          </div>

          <button type="submit">Empezar Juego!!</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

InitiateGame.propTypes = {
  startGame: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { startGame })(InitiateGame);
