import {
  JUGADOR_ERROR,
  GET_JUGADOR,
  GET_JUGADORES,
  POST_JUGADOR_SUCCESS,
  DELETE_JUGADOR,
  UPDATE_JUGADOR,
} from "../actions/types";

import Cookies from "js-cookie";

const initialState = {
  token: Cookies.get("token"),
  isAuthenticated: null,
  loading: true,
  jugador: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case POST_JUGADOR_SUCCESS:
      return {
        ...state,
        loading: false,
        jugador: payload,
      };

    default:
      return state;
  }
}
