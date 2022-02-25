import { call, put, takeEvery, select } from "redux-saga/effects";

import {
  GET_POKEMON_LIST,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_FAILURE,
} from "../slices/PokemonFeedSlice";

import api from "../../services/api";

const getEndpoint = (state) => state.pokemonFeed.endpoint;

function* getPokemonList() {
  try {
    const endpoint = yield select(getEndpoint);

    const {
      data: { results, next },
    } = yield call(api.get, endpoint);

    yield put(GET_POKEMON_LIST_SUCCESS({ results, next }));
  } catch (error) {
    yield put(GET_POKEMON_LIST_FAILURE(error));
  }
}

export default function* watcher() {
  yield takeEvery(GET_POKEMON_LIST, getPokemonList);
}
