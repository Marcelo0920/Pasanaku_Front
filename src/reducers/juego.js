import {
  GET_JUEGO,
  GET_JUEGOS,
  POST_JUEGO_SUCCESS,
  JUEGO_ERROR,
} from "../actions/types";

const initialState = {
  juegos: [],
  juego: null,
  error: {},
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_JUEGO:
      return {
        ...state,
        juego: payload,
        loading: false,
      };
    case GET_JUEGOS:
      return {
        ...state,
        juegos: payload,
        loading: false,
      };
    case POST_JUEGO_SUCCESS:
      return {
        ...state,
        articulo: [payload, ...state.juegos],
        loading: false,
      };
    case JUEGO_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default: {
      return state;
    }
  }
}
