import axios from "axios";

import {
  GET_JUEGO,
  GET_JUEGOS,
  POST_JUEGO_SUCCESS,
  JUEGO_ERROR,
} from "./types";

export const createGame =
  (nombre, moneda, monto_total, fecha_inicio) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ nombre, moneda, monto_total, fecha_inicio });

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/jugadores",
        body,
        config
      );

      dispatch({
        type: POST_JUEGO_SUCCESS,
        payload: data.message,
      });

      console.log(data);
    } catch (error) {
      dispatch({
        type: JUEGO_ERROR,
        payload: error.response.data.message,
      });
    }
  };

//GET JUEGOS
export const getJuegos = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3000/api/jugadores");

    console.log(res);

    dispatch({
      type: GET_JUEGOS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: JUEGO_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
