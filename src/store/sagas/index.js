import { all } from "redux-saga/effects";

import pokemonFeedDataSaga from "./PokemonFeedDataSaga";
import pokemonListSaga from "./pokemonListSaga";

function* rootSaga() {
  yield all([pokemonListSaga(), pokemonFeedDataSaga()]);
}

export default rootSaga;
