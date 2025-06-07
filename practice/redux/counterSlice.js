import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "count",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    byAmount: (state, action) => {
      state.value += Number(action.payload);
    },
  },
});
export default counterSlice.reducer;
export const { increment, decrement, byAmount } = counterSlice.actions;
