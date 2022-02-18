import { combineReducers } from "@reduxjs/toolkit";

import themeVariationSlice from "./themeVariationSlice";

const createReducer = combineReducers({ themeVariation: themeVariationSlice });

export default createReducer;
