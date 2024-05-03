import axios from "axios";

import {
  CREAR_INVITADO,
  GET_INVITADOS,
  GET_INVITATION,
  GET_INVITATIONS,
  INVITATION_ERROR,
  POST_INVITATION_SUCCESS,
} from "./types";

// CREATE INVITADO

export const crearInvitado = (correo, nombre, telf, id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ correo, telf, nombre });

  console.log(body);

  try {
    const res = await axios.post(
      `https://back-pasanaku.onrender.com/api/jugadores/juegos/${id}/invitados`,
      body,
      config
    );

    console.log(res);

    dispatch({
      type: CREAR_INVITADO,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: INVITATION_ERROR,
      payload: error,
    });
  }
};

//OBTENER INVITADOS

export const obtenerInvitados = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://back-pasanaku.onrender.com/api/jugadores/juegos/${id}/invitados`
    );

    console.log(res.data.data[0].invitados_juegos);

    dispatch({
      type: GET_INVITADOS,
      payload: res.data.data[0].invitados_juegos,
    });
  } catch (error) {
    dispatch({
      type: INVITATION_ERROR,
      payload: error,
    });
  }
};

// SEND INVITATION

export const sendInvitation = (idsInvitados, id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ idsInvitados });

  console.log(body);

  try {
    const { data } = await axios.post(
      `https://back-pasanaku.onrender.com/api/jugadores/juegos/${id}/notificaciones`,
      body,
      config
    );

    console.log(data);

    dispatch({
      type: POST_JUEGO_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: INVITATION_ERROR,
      payload: error,
    });
  }
};
