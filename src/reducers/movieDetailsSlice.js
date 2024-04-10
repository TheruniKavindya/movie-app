import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movie_details",
  initialState: {
    id: null,
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setId } = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;
