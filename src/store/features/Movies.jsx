import { createSlice } from "@reduxjs/toolkit";

export const Movies = createSlice({
  name: "Movies",
  initialState: { value: [] },
  reducers: {
    setMovies: (state, action) => {
      state.value = action.payload;
    },
    addMovie: (state, action) => {
      state.value.push(action.payload);
    },
    removeMovie: (state, action) => {
      const newMovies = state.value.filter((e) => e.id !== action.payload);
      state.value = newMovies;
    },
    updateMovie: (state, action) => {
      const newMovies = state.value.map((e) => {
        if (e.id === action.payload.id) {
          e = action.payload;
        }
        return e;
      });
      state.value = newMovies;
    },
  },
});

export const { setMovies, addMovie, removeMovie, updateMovie } = Movies.actions;

export default Movies.reducer;
