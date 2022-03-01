import { call, put, takeEvery, select, all } from "redux-saga/effects";

import api from "../../services/api";
import {
  GET_POKEMON_FEED_DATA,
  GET_POKEMON_FEED_DATA_FAILURE,
  GET_POKEMON_FEED_DATA_SUCCESS,
} from "../slices/PokemonFeedSlice";


const fetchPokemonData = (name) => api.get(`/pokemon/${name}`);

const getPokemonList = (state) => Array.from(state.pokemonFeed.pokemonList);

function* getPokemonFeedData() {
  try {
    const pokemonList = yield select(getPokemonList);
    const response = yield all(
      pokemonList.map((name) => call(fetchPokemonData, name))
    );
    yield put(GET_POKEMON_FEED_DATA_SUCCESS(response));
  } catch (error) {
    yield put(GET_POKEMON_FEED_DATA_FAILURE(error));
  }
}

export default function* watcher() {
  yield takeEvery(GET_POKEMON_FEED_DATA, getPokemonFeedData);
}
