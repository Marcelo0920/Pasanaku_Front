import React from "react";

const Invitado = ({ invitado }) => {
  return (
    <div className="player-item">
      <p>{invitado.invitado.correo}</p>
      <div className="player-options">
        <button>
          <p>Editar</p>
        </button>
        <p className="player-delete">X</p>
      </div>
    </div>
  );
};

export default Invitado;
