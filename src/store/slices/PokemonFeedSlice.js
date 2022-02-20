import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemonList: [],
  endpoint: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=25",
  isLoading: false,
  error: null,
};

const pokemonSlice = createSlice({
  name: "pokemonFeed",
  initialState,
  reducers: {
    GET_POKEMON_LIST: (state) => ({ ...state, isLoading: true }),
    GET_POKEMON_LIST_SUCCESS: (state, { payload }) => {
      const currentPokemon = state.pokemonList;
      const newPokemon = payload.results.map(({ name }) => name);
      const uniquePokemonNames = Array.from(
        new Set([...currentPokemon, ...newPokemon])
      );

      return {
        ...state,
        isLoading: false,
        pokemonList: uniquePokemonNames,
        endpoint: payload.next,
      };
    },
    GET_POKEMON_LIST_FAILURE: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
  },
});

const { actions, reducer } = pokemonSlice;

export const {
  GET_POKEMON_LIST,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_FAILURE,
} = actions;

export default reducer;
