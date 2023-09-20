import { configureStore } from "@reduxjs/toolkit";
import { clothesSlice } from "./slice";


export const store = configureStore({
  reducer: {
    clothes:clothesSlice.reducer

  },
});
