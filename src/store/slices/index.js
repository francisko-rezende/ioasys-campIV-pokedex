import { combineReducers } from "@reduxjs/toolkit";

import mode from "./modeSlice";
import favoritePokemon from "./favoritePokemonSlice";

const createReducer = combineReducers({ mode, favoritePokemon });

export default createReducer;
