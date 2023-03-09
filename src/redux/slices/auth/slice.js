import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registerForm: {
    name: "",
    email: "",
    password: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRegisterFormValues: (state, action) => {
      state.registerForm = action.payload;
    },
    reset: () => initialState,
  },
});

export const { setRegisterFormValues, reset } = authSlice.actions;

export default authSlice.reducer;
