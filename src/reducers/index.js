import { combineReducers } from "@reduxjs/toolkit";
import jugadorReducer from "./jugadorReducer";
import juego from "./juego";
import invitationReducer from "./invitationReducer";

export default combineReducers({
  jugadorReducer,
  juego,
  invitationReducer,
});
