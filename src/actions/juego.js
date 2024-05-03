import axios from "axios";

import {
  GET_JUEGO,
  GET_JUEGOS,
  POST_JUEGO_SUCCESS,
  JUEGO_ERROR,
} from "./types";

// CREATE GAME

export const createGame =
  (
    nombre,
    /* moneda, */ monto_total,
    fecha_inicio,
    lapso_turnos_dias,
    tiempo_puja_seg
  ) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    lapso_turnos_dias = Number(lapso_turnos_dias);
    monto_total = Number(monto_total);
    tiempo_puja_seg = Number(tiempo_puja_seg);

    const body = JSON.stringify({
      nombre,
      /* moneda, */
      fecha_inicio,
      monto_total,
      lapso_turnos_dias,
    });

    console.log(body);

    try {
      const { data } = await axios.post(
        "https://back-pasanaku.onrender.com/api/jugadores/1/juegos",
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
        type: JUEGO_ERROR,
        payload: error.response.data.message,
      });
    }
  };

// UPDATE GAME

export const updateGame =
  (
    nombre,
    /* moneda, */ monto_total,
    fecha_inicio,
    lapso_turnos_dias,
    tiempo_puja_seg,
    id
  ) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    lapso_turnos_dias = Number(lapso_turnos_dias);
    monto_total = Number(monto_total);
    tiempo_puja_seg = Number(tiempo_puja_seg);

    const body = JSON.stringify({
      nombre,
      /* moneda, */
      monto_total,
      fecha_inicio,
      lapso_turnos_dias,
      tiempo_puja_seg,
    });

    console.log(id);

    try {
      const { data } = await axios.put(
        `https://back-pasanaku.onrender.com/api/jugadores/1/juegos/${id}`,
        body,
        config
      );

      dispatch({
        type: POST_JUEGO_SUCCESS,
        payload: data.message,
      });
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

    //console.log(res.data.data[0].jugadores_juegos);

    dispatch({
      type: GET_JUEGOS,
      payload: res.data.data[0].jugadores_juegos,
    });
  } catch (error) {
    dispatch({
      type: JUEGO_ERROR,
      payload: error,
    });
  }
};

//GET JUEGO
export const getJuego = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://back-pasanaku.onrender.com/api/jugadores/juegos/${id}`
    );

    dispatch({
      type: GET_JUEGO,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: JUEGO_ERROR,
      payload: error,
    });
  }
};

//START GAME
export const startGame =
  (id, tiempo_puja_seg, tiempo_inicio_pago_seg, tiempo_pago_seg) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      tiempo_puja_seg = Number(tiempo_puja_seg);
      tiempo_inicio_pago_seg = Number(tiempo_inicio_pago_seg);
      tiempo_pago_seg = Number(tiempo_pago_seg);

      const body = JSON.stringify({
        tiempo_puja_seg,
        tiempo_inicio_pago_seg,
        tiempo_pago_seg,
      });

      console.log(body);

      const res = await axios.post(
        `https://back-pasanaku.onrender.com/api/jugadores/juegos/${id}/turnos/iniciar`,
        body,
        config
      );

      console.log(res);

      dispatch({
        type: POST_JUEGO_SUCCESS,
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: JUEGO_ERROR,
        payload: error,
      });
    }
  };
