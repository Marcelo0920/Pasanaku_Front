import axios from "axios";

import {
  JUGADOR_ERROR,
  GET_JUGADOR,
  GET_JUGADORES,
  POST_JUGADOR_SUCCESS,
  DELETE_JUGADOR,
  UPDATE_JUGADOR,
  GET_JUEGOS,
  JUEGO_ERROR,
} from "./types";

export const register = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  console.log(body);

  try {
    const { data } = await axios.post(
      "http://localhost:3000/api/jugadores",
      body,
      config
    );

    dispatch({
      type: POST_JUGADOR_SUCCESS,
      payload: data.message,
    });

    console.log(data);
  } catch (error) {
    dispatch({
      type: JUGADOR_ERROR,
      payload: error.response.data.message,
    });
  }
};
