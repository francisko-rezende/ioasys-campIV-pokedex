import { all } from "redux-saga/effects";

import pokemonFeedSaga from "./pokemonFeedSaga";

function* rootSaga() {
  yield all([pokemonFeedSaga()]);
}

export default rootSaga;
