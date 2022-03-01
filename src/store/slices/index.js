import { combineReducers } from "@reduxjs/toolkit";

import favoritePokemon from "./favoritePokemonSlice";
import mode from "./modeSlice";
import pokemonFeed from "./PokemonFeedSlice";

const createReducer = combineReducers({ mode, favoritePokemon, pokemonFeed });

export default createReducer;
