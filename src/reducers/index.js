import { combineReducers } from "@reduxjs/toolkit";
import jugadorReducer from "./jugadorReducer";
import juegoReducer from "./juegoReducer";

export default combineReducers({ jugadorReducer, juegoReducer });
