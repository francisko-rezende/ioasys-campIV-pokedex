import { all } from "redux-saga/effects";

import pokemonFeedSaga from "./pokemonFeedSaga";
import pokemonFeedDataSaga from "./PokemonFeedDataSaga";

function* rootSaga() {
  yield all([pokemonFeedSaga(), pokemonFeedDataSaga()]);
}

export default rootSaga;
