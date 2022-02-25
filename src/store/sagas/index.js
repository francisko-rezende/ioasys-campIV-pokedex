import { all } from "redux-saga/effects";

import pokemonListSaga from "./pokemonListSaga";
import pokemonFeedDataSaga from "./PokemonFeedDataSaga";

function* rootSaga() {
  yield all([pokemonListSaga(), pokemonFeedDataSaga()]);
}

export default rootSaga;
