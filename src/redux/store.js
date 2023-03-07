import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./slices/walletSlice/slice";

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
});
