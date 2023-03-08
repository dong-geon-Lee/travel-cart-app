import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  carts: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchTravelData: (state, action) => {
      state.products = action.payload;
    },
    addTravelToCart: (state, action) => {
      state.carts.push(action.payload);
    },
    cartReset: (state) => {
      state.products = [];
    },
  },
});

export const { fetchTravelData, addTravelToCart, cartReset } =
  productSlice.actions;

export default productSlice.reducer;
