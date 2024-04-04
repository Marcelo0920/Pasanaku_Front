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

  console.log(nombre, moneda, monto_total, fecha_inicio);

  return (
    <div className="overlay">
      <div className="modalContainer">
        <p className="adopcionModalClose" onClick={onClose}>
          X
        </p>
        <form
          className="modalContent"
          onSubmit={(e) => {
            e.preventDefault();
            createGame(moneda, nombre, monto_total, fecha_inicio);
            setMoneda("");
            setNombre("");
            setMonto_total(0);
            setFecha_inicio("");
          }}
        >
          <h2>Crea tu Juego!</h2>
          <div>
            <div>
              <label>Nombre del Juego</label>
              <input
                placeholder="Mi partida asombrosa"
                onChange={(e) => {
                  setNombre(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Monto</label>
              <select
                name="currency"
                className="currency"
                onChange={(e) => {
                  setMoneda(e.target.value);
                }}
              >
                <option defaultValue disabled>
                  $
                </option>
                <option value="bs">BOL</option>
                <option value="usa">USA</option>
              </select>
              <input
                type="number"
                placeholder="456"
                onChange={(e) => {
                  setMonto_total(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Fecha de Inicio</label>
              <input
                type="date"
                onChange={(e) => {
                  setFecha_inicio(e.target.value);
                }}
              />
            </div>
          </div>

          <button>Crear!</button>
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
