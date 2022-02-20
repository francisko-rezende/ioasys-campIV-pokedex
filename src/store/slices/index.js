import { combineReducers } from "@reduxjs/toolkit";

import mode from "./modeSlice";
import favoritePokemon from "./favoritePokemonSlice";
import pokemonFeed from "./PokemonFeedSlice";

const createReducer = combineReducers({ mode, favoritePokemon, pokemonFeed });

export default createReducer;
