import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentMode: JSON.parse(window.localStorage.getItem("mode")) || "light",
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    TOGGLE_THEME: (state) => ({
      currentMode: state.mode === "light" ? "dark" : "light",
    }),
  },
});

const { actions, reducer } = modeSlice;

export const { TOGGLE_THEME } = actions;

export default reducer;
