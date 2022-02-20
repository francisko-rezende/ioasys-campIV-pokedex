import { call, put, takeEvery, select } from "redux-saga/effects";

import {
  GET_POKEMON_LIST,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_FAILURE,
} from "../slices/PokemonFeedSlice";

import axios from "axios";

const getEndpoint = (state) => state.pokemonFeed.endpoint;

function* getPokemons() {
  try {
    const endpoint = yield select(getEndpoint);

    const {
      data: { results, next },
    } = yield call(axios.get, endpoint);

    yield put(GET_POKEMON_LIST_SUCCESS({ results, next }));
  } catch (error) {
    yield put(GET_POKEMON_LIST_FAILURE(error));
  }
}

export default function* watcher() {
  yield takeEvery(GET_POKEMON_LIST, getPokemons);
}