import React, { useState } from "react";

import "../../styles/components/createGameModal.css";

import { connect } from "react-redux";
import { createGame } from "../../actions/juego";
import PropTypes from "prop-types";

const CreateGameModal = ({ open, onClose, createGame }) => {
  if (!open) return null;

  const [moneda, setMoneda] = useState("");
  const [nombre, setNombre] = useState("");
  const [monto_total, setMonto_total] = useState(0);
  const [fecha_inicio, setFecha_inicio] = useState("");
  const [frecuencia, setFrecuencia] = useState(0);
  const [tiempoPuja, setTiempoPuja] = useState(0);

  return (
    <div className="overlay">
      <div className="modalContainer">
        <p className="gameModalClose" onClick={onClose}>
          X
        </p>
        <form
          className="modalContent"
          onSubmit={(e) => {
            e.preventDefault();
            createGame(
              nombre,
              /* moneda, */
              monto_total,
              fecha_inicio,
              frecuencia,
              tiempoPuja
            );
            setMoneda("");
            setNombre("");
            setMonto_total(0);
            setFecha_inicio("");
            setFrecuencia("");
            setTiempoPuja(0);
          }}
        >
          <h2>Crea tu Juego!</h2>
          <div className="form-inputs">
            <div>
              <div className="column-align margin-bottom-25">
                <label>Nombre del Juego</label>
                <input
                  className="game-input"
                  value={nombre}
                  placeholder="Mi partida asombrosa"
                  onChange={(e) => {
                    setNombre(e.target.value);
                  }}
                />
              </div>
              <div className="column-align margin-bottom-25">
                <label>Frecuencia del Juego</label>
                <input
                  name="frecuencia"
                  className="frecuencia game-input"
                  value={frecuencia}
                  type="number"
                  placeholder="10"
                  onChange={(e) => {
                    setFrecuencia(e.target.value);
                  }}
                />
              </div>
            </div>

            <div>
              <div>
                <label>Monto</label>
                <div className="currency-monto">
                  {/* <select
                    name="currency"
                    className="currency"
                    value={moneda}
                    onChange={(e) => {
                      setMoneda(e.target.value);
                    }}
                  >
                    <option defaultValue disabled>
                      $
                    </option>
                    <option value="BS">BS</option>
                    <option value="US">US</option>
                  </select> */}
                  <input
                    type="number"
                    placeholder="456"
                    value={monto_total}
                    onChange={(e) => {
                      setMonto_total(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="column-align">
                <label>Fecha de Inicio</label>
                <input
                  type="date"
                  value={fecha_inicio}
                  className="game-input"
                  onChange={(e) => {
                    setFecha_inicio(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <button type="submit">Crear!</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

CreateGameModal.propTypes = {
  createGame: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { createGame })(CreateGameModal);
