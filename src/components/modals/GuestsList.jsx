import React, { useState } from "react";

import { connect } from "react-redux";
import { startGame } from "../../actions/juego";
import { crearInvitado } from "../../actions/invitacion";
import PropTypes from "prop-types";

import "../../styles/components/createGameModal.css";

const GuestsList = ({ open, onClose, crearInvitado, id }) => {
  if (!open) return null;

  console.log(id);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nombre, setNombre] = useState("");

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
            crearInvitado(email, nombre, phone, id);
            setEmail("");
            setPhone(0);
          }}
        >
          <h2>Crea Invitados</h2>
          <div className="form-inputs">
            <div>
              <div className="column-align margin-bottom-25">
                <label>Email</label>
                <input
                  className="game-input"
                  value={email}
                  type="email"
                  placeholder="Mi partida asombrosa"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="column-align margin-bottom-25">
                <label>Numero de telefono</label>
                <input
                  name="phone"
                  className="frecuencia game-input"
                  value={phone}
                  placeholder="10"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>

              <div className="column-align margin-bottom-25">
                <label>Nombre</label>
                <input
                  name="nombre"
                  className="frecuencia game-input"
                  value={nombre}
                  placeholder="10"
                  onChange={(e) => {
                    setNombre(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <button type="submit">Crear Invitado!</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

GuestsList.propTypes = {
  crearInvitado: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { crearInvitado })(GuestsList);
