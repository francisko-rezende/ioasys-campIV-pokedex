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
    ADD_FAVORITE_POKEMON: (state, { payload }) => {
      const currentFavorites = Array.from(state.favoritePokemonList);
      const isListFull = currentFavorites.length >= 12;

      if (isListFull) {
        const shouldRemoveLastPokemonAndAddNewOne = window.confirm(
          "Sua lista de favoritos atingiu o limite máximo de 12 pokémon. Se você adicionar esse pokémon, ele vai substituir o último pokémon da sua lista. Tem certeza que deseja continuar?"
        );

        if (shouldRemoveLastPokemonAndAddNewOne) {
          currentFavorites.pop();
          currentFavorites.unshift(payload);
          return { ...state, favoritePokemonList: currentFavorites };
        } else {
          return;
        }
      }

      return {
        ...state,
        favoritePokemonList: [payload, ...state.favoritePokemonList],
      };
    },
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
