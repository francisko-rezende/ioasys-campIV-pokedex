import { all } from "redux-saga/effects";
import favoritePokemonSaga from "./favoritePokemonSaga";

function* rootSaga() {
  yield all([favoritePokemonSaga()]);
}

export default rootSaga;
