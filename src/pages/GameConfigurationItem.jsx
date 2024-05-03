import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { obtenerInvitados } from "../actions/invitacion";
import { sendInvitation } from "../actions/invitacion";
import { updateGame } from "../actions/juego";
import { getJuego } from "../actions/juego";
import { startGame } from "../actions/juego";
import PropTypes from "prop-types";

import "../styles/pages/gameConfigurationItem.css";
import Invitado from "../components/Invitado";
import GuestsList from "../components/modals/GuestsList";
import InitiateGame from "../components/modals/InitiateGame";

const GameConfigurationItem = ({
  obtenerInvitados,
  sendInvitation,
  updateGame,
  getJuego,
  startGame,
  invitationReducer: { invitados, loading },
  juego: { juego },
}) => {
  const [moneda, setMoneda] = useState("");
  const [nombre, setNombre] = useState("");
  const [monto_total, setMonto_total] = useState("");
  const [fecha_inicio, setFecha_inicio] = useState("");
  const [frecuencia, setFrecuencia] = useState("");
  const [tiempoPuja, setTiempoPuja] = useState(0);

  const [invitadosList, setInvitadosList] = useState([]);

  let id = window.location.pathname.split("/");

  const [openModal, setOpenModal] = useState(false);
  const [openSecondModal, setOpenSecondModal] = useState(false);

  function handleModal() {
    console.log("click");
    setOpenModal(!openModal);
  }

  function handleSecondModal() {
    console.log("clickk");
    setOpenSecondModal(!openSecondModal);
  }

  useEffect(() => {
    obtenerInvitados(id[2]);
    getJuego(id[2]);
  }, [obtenerInvitados, getJuego]);

  useEffect(() => {
    if (juego) {
      setNombre(juego.nombre);
      setMonto_total(juego.monto_total);
      setFecha_inicio(juego.fecha_inicio);
      console.log(fecha_inicio);
      setFecha_inicio(juego.lapso_turnos_dias);
    }
  }, [juego]);

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

      <InitiateGame
        open={openSecondModal}
        id={id[2]}
        onClose={() => setOpenSecondModal(false)}
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
          /* onClick={(e) => {
            console.log("clickeado");
            startGame(id[2]);
          }} */
          onClick={(e) => handleSecondModal()}
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
  juego: state.juego,
});

GameConfigurationItem.propTypes = {
  invitationReducer: PropTypes.object.isRequired,
  obtenerInvitados: PropTypes.func.isRequired,
  sendInvitation: PropTypes.func.isRequired,
  updateGame: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  getJuego: PropTypes.func.isRequired,
  juego: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
  obtenerInvitados,
  getJuego,
  startGame,
  updateGame,
  sendInvitation,
})(GameConfigurationItem);
