import {
  CREAR_INVITADO,
  GET_INVITADOS,
  GET_INVITATION,
  GET_INVITATIONS,
  INVITATION_ERROR,
  POST_INVITATION_SUCCESS,
} from "../actions/types";

const initialState = {
  invitaciones: [],
  invitados: [],
  error: {},
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case POST_INVITATION_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    default: {
      return state;
    }

    case CREAR_INVITADO:
      return {
        ...state,
        loading: false,
      };

    case GET_INVITADOS:
      return {
        ...state,
        invitados: payload,
        loading: false,
      };
  }
}
