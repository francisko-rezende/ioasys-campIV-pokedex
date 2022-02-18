import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeVariation: "light",
};

const themeVariationSlice = createSlice({
  name: "themeVariation",
  initialState,
  reducers: {
    TOGGLE_THEME: (state) => ({
      themeVariation: state.themeVariation === "light" ? "dark" : "light",
    }),
  },
});

const { actions, reducer } = themeVariationSlice;

export const { TOGGLE_THEME } = actions;

export default reducer;
