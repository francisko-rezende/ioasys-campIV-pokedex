import { createSlice } from "@reduxjs/toolkit";

import * as helpers from "../../helpers";

const initialState = {
  pokemonList: [],
  endpoint: "/pokemon/?offset=0&limit=30",
  isLoading: false,
  error: null,
  pokemonFeedData: [],
};

const pokemonSlice = createSlice({
  name: "pokemonFeed",
  initialState,
  reducers: {
    GET_POKEMON_LIST: (state) => ({ ...state, isLoading: true }),
    GET_POKEMON_LIST_SUCCESS: (state, { payload }) => {
      const currentPokemonCopy = [...state.pokemonList];
      const newPokemon = payload.results.map(({ name }) => name);
      const uniquePokemonNames = Array.from(
        new Set([...currentPokemonCopy, ...newPokemon])
      );

      return {
        ...state,
        error: null,
        pokemonList: uniquePokemonNames,
        endpoint: helpers.getEndpoint(payload.next),
      };
    },
    GET_POKEMON_LIST_FAILURE: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
    GET_POKEMON_FEED_DATA: (state) => ({ ...state }),
    GET_POKEMON_FEED_DATA_SUCCESS: (state, { payload }) => {
      const data = payload.map(({ data }) => data);
      return {
        ...state,
        pokemonFeedData: data,
        isLoading: false,
      };
    },
    GET_POKEMON_FEED_DATA_FAILURE: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
    UPDATE_POKEMON_FEED_DATA: (state, { payload }) => ({
      ...state,
      pokemonFeedData: payload,
    }),
  },
});

const { actions, reducer } = pokemonSlice;

export const {
  GET_POKEMON_LIST,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_FAILURE,
  GET_POKEMON_FEED_DATA,
  GET_POKEMON_FEED_DATA_SUCCESS,
  GET_POKEMON_FEED_DATA_FAILURE,
  UPDATE_POKEMON_FEED_DATA,
} = actions;

export default reducer;
