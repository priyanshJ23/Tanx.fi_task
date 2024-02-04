// favoriteSlice.js
import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorite: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.favorites.find(
        (item) => item.id === newItem.id
      );

      if (!existingItem) {
        state.favorites.push(newItem);
      }
    },
    removeFromFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export default favoriteSlice.reducer;
export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
