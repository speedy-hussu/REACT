import { createSlice } from "@reduxjs/toolkit";
const rollSlice = createSlice({
  name: "roll",
  initialState: {
    roll: [],
  },
  reducers: {
    add: (state, action) => {
      state.roll.push(action.payload);
    },
    remove: (state, action) => {
      state.roll = state.roll.filter((roll) => roll !== action.payload);
    },
  },
});
export default rollSlice.reducer;
export const { add, remove } = rollSlice.actions;
