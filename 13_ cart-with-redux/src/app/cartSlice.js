import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id == action.payload.id
      );
      if (!existingItem) {
        state.cart.push({ ...action.payload, quantity: 1 });
      } else {
        existingItem.quantity += 1;
      }
    },
    reduceFromCart: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});
export default cartSlice.reducer;
export const { addToCart, reduceFromCart, removeFromCart } = cartSlice.actions;
