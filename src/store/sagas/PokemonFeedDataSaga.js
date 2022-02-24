import { call, put, takeEvery, select, all } from "redux-saga/effects";

import {
  GET_POKEMON_FEED_DATA,
  GET_POKEMON_FEED_DATA_FAILURE,
  GET_POKEMON_FEED_DATA_SUCCESS,
} from "../slices/PokemonFeedSlice";

import api from "../../services/api";

const testingPokemonData = (pokemonList) => {
  Promise.all(pokemonList.map((name) => api.get(`/pokemon/${name}`))).then(
    (newResponses) => {
      console.log(newResponses);
    }
  );
};

const testingPokemonData2 = (name) => api.get(`/pokemon/${name}`);

const getPokemonList = (state) => Array.from(state.pokemonFeed.pokemonList);

function* getPokemonFeedData() {
  try {
    const pokemonList = yield select(getPokemonList);

    // yield call(console.log, pokemonList);

    // yield call(console.log, pokemonList);

    const response = yield all(
      pokemonList.map((name) => call(testingPokemonData2, name))
    );

    const data = yield all(response.map(({ data }) => data));

    yield put(GET_POKEMON_FEED_DATA_SUCCESS(response));

    // yield put(GET_POKEMON_LIST_SUCCESS({ results, next }));
  } catch (error) {
    yield put(GET_POKEMON_FEED_DATA_FAILURE(error));
    // yield call(console.log(error));
  }
}

export default function* watcher() {
  yield takeEvery(GET_POKEMON_FEED_DATA, getPokemonFeedData);
}
