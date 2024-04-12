import axios from "axios";

import {
  GET_JUEGO,
  GET_JUEGOS,
  POST_JUEGO_SUCCESS,
  JUEGO_ERROR,
} from "./types";

export const createGame =
  (nombre, moneda, monto_total, fecha_inicio, frecuencia) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    monto_total = Number(monto_total);

    const body = JSON.stringify({
      nombre,
      moneda,
      monto_total,
      fecha_inicio,
      frecuencia,
    });

    console.log(body);

    try {
      const { data } = await axios.post(
        "https://back-pasanaku.onrender.com/api/jugadores/1/juegos",
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
    const res = await axios.get(
      "https://back-pasanaku.onrender.com/api/jugadores/1/juegos"
    );

    console.log(res.data.data);

    dispatch({
      type: GET_JUEGOS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: JUEGO_ERROR,
      payload: error,
    });
  }
};
