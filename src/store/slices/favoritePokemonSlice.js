import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoritePokemonList:
    JSON.parse(window.localStorage.getItem("favoritePokemon")) || [],
};

const favoritePokemonSlice = createSlice({
  name: "favoritePokemon",
  initialState,
  reducers: {
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
          return { favoritePokemonList: currentFavorites };
        } else {
          return;
        }
      }

      return {
        favoritePokemonList: [payload, ...state.favoritePokemonList],
      };
    },
    REMOVE_FAVORITE_POKEMON: (state, { payload }) => ({
      favoritePokemonList: state.favoritePokemonList.filter(
        ({ name }) => name !== payload.name
      ),
    }),
  },
});

const { actions, reducer } = favoritePokemonSlice;

export const { ADD_FAVORITE_POKEMON, REMOVE_FAVORITE_POKEMON } = actions;

export default reducer;
