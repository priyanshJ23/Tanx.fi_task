import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import favoriteSlice from "./favoriteSlice";
const store = configureStore({
  reducer: { cart: cartSlice, favorite: favoriteSlice },
});

export default store;
