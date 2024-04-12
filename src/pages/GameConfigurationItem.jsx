import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { obtenerInvitados } from "../actions/invitacion";
import { crearInvitado } from "../actions/invitacion";
import { sendInvitation } from "../actions/invitacion";
import PropTypes from "prop-types";

import "../styles/pages/gameConfigurationItem.css";
import Invitado from "../components/Invitado";

const GameConfigurationItem = ({
  crearInvitado,
  obtenerInvitados,
  sendInvitation,
  invitationReducer: { invitados, loading },
}) => {
  const [moneda, setMoneda] = useState("");
  const [nombre, setNombre] = useState("");
  const [monto_total, setMonto_total] = useState(0);
  const [fecha_inicio, setFecha_inicio] = useState("");
  const [frecuencia, setFrecuencia] = useState("");

  const [invitedUser, setInvitedUser] = useState("");
  const [invitedUserPhone, setInvitedUserPhone] = useState("");
  const [invitedUserName, setInvitedUserName] = useState("");

  const [invitadosList, setInvitadosList] = useState([]);

  let id = window.location.pathname.split("/");

  useEffect(() => {
    obtenerInvitados(id[2]);
  }, [obtenerInvitados]);

  useEffect(() => {
    // Esto se ejecutará cada vez que invitados cambie
    const newInvitadosList = invitados.map((invitado) => ({
      id: Number(invitado.id),
    }));
    setInvitadosList(newInvitadosList);
  }, [invitados]);

  return (
    <div className="game-configuration-item">
      <h2>Configuracion de Juego</h2>
      <div className="game-configuration-content">
        <div>
          <div className="flex-column margin-20">
            <label>Nombre del Juego</label>
            <input className="game-input" placeholder="Mi partida asombrosa" />
          </div>

          <div className="margin-20">
            <label>Monto</label>
            <div className="currency-monto">
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
          </div>

          <div className="column-align  margin-20">
            <label>Frecuencia del Juego</label>
            <select
              name="frecuencia"
              className="frecuencia game-input"
              onChange={(e) => {
                setFrecuencia(e.target.value);
              }}
            >
              <option>Semanalmente</option>
              <option>Mensualmente</option>
              <option>Cada 5 días</option>
            </select>
          </div>

          <div className="column-align  margin-20">
            <label>Fecha de Inicio</label>
            <input
              type="date"
              className="game-input"
              onChange={(e) => {
                setFecha_inicio(e.target.value);
              }}
            />
          </div>
        </div>

        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              crearInvitado(
                invitedUser,
                invitedUserName,
                invitedUserPhone,
                id[2]
              );
              setInvitedUser("");
              setInvitedUserPhone("");
            }}
          >
            <div className="flex-column  margin-20">
              <label>Crear Invitados</label>
              <input
                className="game-input"
                placeholder="Email"
                value={invitedUser}
                onChange={(e) => {
                  setInvitedUser(e.target.value);
                }}
              />
            </div>

            <div className="flex-column  margin-20">
              <input
                className="game-input"
                placeholder="Nombre"
                value={invitedUserName}
                onChange={(e) => {
                  setInvitedUserName(e.target.value);
                }}
              />
            </div>

            <div className=" margin-20">
              <input
                className="game-input"
                placeholder="Telefono"
                value={invitedUserPhone}
                onChange={(e) => {
                  setInvitedUserPhone(e.target.value);
                }}
              />
            </div>

            <button type="submit" className="send-button">
              Crear Invitado
            </button>
          </form>

          <div className="player-list">
            <label>Jugadores invitados</label>
            <div className="player-wrap">
              {invitados.map((invitado) => {
                return <Invitado key={invitado.id} invitado={invitado} />;
              })}
            </div>
            {console.log(invitadosList)}
            <button
              onClick={(e) => sendInvitation(invitadosList, id[2])}
              className="send-button"
            >
              Enviar Invitaciones
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  invitationReducer: state.invitationReducer,
});

GameConfigurationItem.propTypes = {
  invitationReducer: PropTypes.object.isRequired,
  obtenerInvitados: PropTypes.func.isRequired,
  crearInvitado: PropTypes.func.isRequired,
  sendInvitation: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  obtenerInvitados,
  crearInvitado,
  sendInvitation,
})(GameConfigurationItem);
