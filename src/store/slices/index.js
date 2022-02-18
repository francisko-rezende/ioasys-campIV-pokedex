import { combineReducers } from "@reduxjs/toolkit";

import mode from "./modeSlice";

const createReducer = combineReducers({ mode: mode });

export default createReducer;
