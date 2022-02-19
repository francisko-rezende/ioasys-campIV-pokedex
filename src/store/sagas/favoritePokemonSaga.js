import { call, put, takeEvery } from "redux-saga/effects";

import {
  GET_FAVORITE_POKEMON,
  GET_FAVORITE_POKEMON_SUCCESS,
  GET_FAVORITE_POKEMON_FAILURE,
} from "../slices/favoritePokemonSlice";

const getFavsFromLocalStorage = () =>
  JSON.parse(window.localStorage.getItem("favoritePokemon"));

function* getPokemons() {
  try {
    const favoritePokemon = yield call(getFavsFromLocalStorage);

    yield put(GET_FAVORITE_POKEMON_SUCCESS(favoritePokemon));
  } catch (error) {
    yield put(GET_FAVORITE_POKEMON_FAILURE(error));
  }
}

export default function* watcher() {
  yield takeEvery(GET_FAVORITE_POKEMON, getPokemons);
}
