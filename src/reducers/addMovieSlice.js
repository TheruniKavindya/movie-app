import { createSlice } from "@reduxjs/toolkit";

const addMovieSlice = createSlice({
  name: "add movie",
  initialState: {
    title: "",
  },
  reducers: {
    setOpen: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { setOpen } = addMovieSlice.actions;
export default addMovieSlice.reducer;
