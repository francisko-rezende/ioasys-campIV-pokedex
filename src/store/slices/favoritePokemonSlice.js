import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  favoritePokemonList:
    JSON.parse(window.localStorage.getItem("favoritePokemon")) || [],
  error: null,
};

const favoritePokemonSlice = createSlice({
  name: "favoritePokemon",
  initialState,
  reducers: {
    GET_FAVORITE_POKEMON: (state) => ({ ...state, isLoading: true }),
    GET_FAVORITE_POKEMON_SUCCESS: (state, { payload }) => ({
      ...state,
      isLoading: false,
      pokemonList: payload,
    }),
    GET_FAVORITE_POKEMON_FAILURE: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
    ADD_FAVORITE_POKEMON: (state, { payload }) => ({
      ...state,
      favoritePokemonList: [...state.favoritePokemonList, payload],
    }),
    REMOVE_FAVORITE_POKEMON: (state, { payload }) => ({
      ...state,
      favoritePokemonList: state.favoritePokemonList.filter(
        ({ name }) => name !== payload.name
      ),
    }),
  },
});

const { actions, reducer } = favoritePokemonSlice;

export const {
  GET_FAVORITE_POKEMON,
  GET_FAVORITE_POKEMON_SUCCESS,
  GET_FAVORITE_POKEMON_FAILURE,
  ADD_FAVORITE_POKEMON,
  REMOVE_FAVORITE_POKEMON,
} = actions;

export default reducer;
