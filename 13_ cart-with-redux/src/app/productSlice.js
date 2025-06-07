import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch products by category
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (category) => {
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${category}`
    );
    const data = await res.json();
    return { category, products: data.products };
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    cache: {},
    currentProducts: [],
    status: "idle", // for loading states
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const { category, products } = action.payload;
        state.cache[category] = products;
        state.currentProducts = products;
        state.status = "succeeded";
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default productSlice.reducer;
