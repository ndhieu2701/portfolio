import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themes: "light",
};

export const themesSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    changeThemes: (state) => {
      state.themes = state.themes === "light" ? "dark" : "light";
    },
  },
});

export const { changeThemes } = themesSlice.actions;
export default themesSlice.reducer
