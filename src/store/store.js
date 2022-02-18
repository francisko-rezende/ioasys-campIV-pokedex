import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import sagas from "./sagas";
import reducers from "./slices";

const sagaMiddleware = createSagaMiddleware();

const isDev = process.env.NODE_ENV === "development";

const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware, ...(isDev ? [logger] : [])],
});

sagaMiddleware.run(sagas);

export default store;
