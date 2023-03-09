import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  walletForm: {
    moneyAmount: 0,
  },
  selectedRate: null,
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWalletFormValues: (state, action) => {
      state.walletForm = action.payload;
    },
    setSelectedRate: (state, action) => {
      state.selectedRate = action.payload
    },
    reset: () => initialState,
  },
});

export const { setWalletFormValues, setSelectedRate, reset } = walletSlice.actions;

export default walletSlice.reducer;
