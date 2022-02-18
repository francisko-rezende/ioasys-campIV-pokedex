import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    TOGGLE_THEME: (state) => ({
      mode: state.mode === "light" ? "dark" : "light",
    }),
  },
});

const { actions, reducer } = modeSlice;

export const { TOGGLE_THEME } = actions;

export default reducer;
