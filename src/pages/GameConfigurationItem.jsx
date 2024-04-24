import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { obtenerInvitados } from "../actions/invitacion";
import { crearInvitado } from "../actions/invitacion";
import { sendInvitation } from "../actions/invitacion";
import { updateGame } from "../actions/juego";
import { startGame } from "../actions/juego";
import PropTypes from "prop-types";

import "../styles/pages/gameConfigurationItem.css";
import Invitado from "../components/Invitado";
import GuestsList from "../components/modals/GuestsList";

const GameConfigurationItem = ({
  crearInvitado,
  obtenerInvitados,
  sendInvitation,
  updateGame,
  startGame,
  invitationReducer: { invitados, loading },
}) => {
  const [moneda, setMoneda] = useState("");
  const [nombre, setNombre] = useState("");
  const [monto_total, setMonto_total] = useState(0);
  const [fecha_inicio, setFecha_inicio] = useState("");
  const [frecuencia, setFrecuencia] = useState(0);
  const [tiempoPuja, setTiempoPuja] = useState(0);

  const [invitadosList, setInvitadosList] = useState([]);

  let id = window.location.pathname.split("/");

  const [openModal, setOpenModal] = useState(false);

  function handleModal() {
    console.log("click");
    setOpenModal(!openModal);
  }

  useEffect(() => {
    obtenerInvitados(id[2]);
  }, [obtenerInvitados]);

  useEffect(() => {
    // Esto se ejecutará cada vez que invitados cambie
    const newInvitadosList = invitados.map((invitado) => ({
      id: Number(invitado.id_invitado),
    }));
    setInvitadosList(newInvitadosList);
  }, [invitados]);

  return (
    <>
      <GuestsList
        open={openModal}
        id={id[2]}
        onClose={() => setOpenModal(false)}
      />
      <div className="game-configuration-item">
        <h2>Configuracion de Juego</h2>
        <div className="game-configuration-content">
          <form
            onSubmit={(e) => {
              e.preventDefault();

              updateGame(
                nombre,
                /* moneda, */
                monto_total,
                fecha_inicio,
                frecuencia,
                tiempoPuja,
                id[2]
              );

              setMoneda("");
              setNombre("");
              setMonto_total(0);
              setFecha_inicio("");
              setFrecuencia("");
              setTiempoPuja(0);
            }}
          >
            <div className="flex-column margin-20">
              <label>Nombre del Juego</label>
              <input
                className="game-input"
                placeholder="Mi partida asombrosa"
                value={nombre}
                onChange={(e) => {
                  setNombre(e.target.value);
                }}
              />
            </div>

            <div className="margin-20">
              <label>Monto</label>
              <div className="currency-monto">
                {/* <select
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

            <div className="column-align  margin-20">
              <label>Frecuencia del Juego</label>
              <input
                name="frecuencia"
                className="frecuencia game-input"
                type="number"
                placeholder="10"
                onChange={(e) => {
                  setFrecuencia(e.target.value);
                }}
              />
              {/* <option>Semanalmente</option>
              <option>Mensualmente</option>
              <option>Cada 5 días</option>
            </select> */}
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

            <div className="column-align ">
              <label>Tiempo para la puja</label>
              <input
                name="tiempo_puja"
                className="frecuencia game-input"
                value={tiempoPuja}
                type="number"
                placeholder="10"
                onChange={(e) => {
                  setTiempoPuja(e.target.value);
                }}
              />
            </div>
          </form>

          <div>
            <div className="player-list">
              <label>Jugadores invitados</label>
              <div className="player-wrap">
                {invitados.map((invitado) => {
                  return (
                    <Invitado key={invitado.id_invitado} invitado={invitado} />
                  );
                })}
              </div>

              <h3 className="h3-title">Acciones</h3>

              <div className="flex-row ">
                <button className="send-button" onClick={(e) => handleModal()}>
                  Crear Invitado
                </button>

                <button className="send-button" type="submit">
                  Actualizar Juego
                </button>

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
        <button
          onClick={(e) => {
            console.log("clickeado");
            startGame(id[2]);
          }}
          className="send-button"
        >
          Empezar Juego
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  invitationReducer: state.invitationReducer,
});

GameConfigurationItem.propTypes = {
  invitationReducer: PropTypes.object.isRequired,
  obtenerInvitados: PropTypes.func.isRequired,
  sendInvitation: PropTypes.func.isRequired,
  updateGame: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  obtenerInvitados,
  startGame,
  updateGame,
  sendInvitation,
})(GameConfigurationItem);
