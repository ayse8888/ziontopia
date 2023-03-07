import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // money: 0,
  walletForm: {
    moneyAmount: 0,
  },
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.money += 1;
    // },
    // decrement: (state) => {
    //   state.money -= 1;
    // },
    setWalletFormValues: (state, action) => {
      state.walletForm.moneyAmount = action.payload;
    },
    reset: () => initialState,
  },
});

export const { increment, decrement, setWalletFormValues, reset } =
  walletSlice.actions;

export default walletSlice.reducer;
