import { createSlice } from "@reduxjs/toolkit";
import { priceLists } from "../constants/constants";

const initialState = {
  products: [],
  sortedProducts: [],
  carts: [],
  price: "all",
  regions: "all",
  quantity: 1,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    priceValue: (state, action) => {
      state.price = action.payload;
    },
    regionsValue: (state, action) => {
      state.regions = action.payload;
    },
    resetValue: (state) => {
      state.price = "all";
      state.regions = "all";
    },
    fetchTravelData: (state, action) => {
      state.products = action.payload;
    },
    addTravelToCart: (state, action) => {
      state.carts.push(action.payload);
    },
    updateTravelData: (state, action) => {
      const products = action.payload;
      const minNum = priceLists[state.price][0];
      const maxNum = priceLists[state.price][1];

      if (state.price === "all" && state.regions === "all") {
        state.sortedProducts = products;
        return;
      }

      if (state.price !== "all" && state.regions === "all") {
        state.sortedProducts = products.filter((product) => {
          return product.price > minNum && product.price <= maxNum;
        });
        return;
      }

      if (state.price === "all" && state.regions !== "all") {
        state.sortedProducts = products.filter(
          (product) => product.spaceCategory === state.regions
        );
        return;
      }

      if (state.price !== "all" && state.regions !== "all") {
        state.sortedProducts = products.filter((product) => {
          return (
            product.price > minNum &&
            product.price <= maxNum &&
            product.spaceCategory === state.regions
          );
        });
        return;
      }
    },
    removeCartItems: (state, action) => {
      const idx = action.payload;
      state.carts = state.carts.filter((cart) => cart.idx !== idx);
    },
    increaseQty: (state, action) => {
      const { idx, num, price } = action.payload;
      state.carts = state.carts.map((cart) => {
        if (cart.idx === idx) {
          cart.qty = num + cart.qty || 1;
          cart.price = price * cart.qty;
        }
        return { ...cart };
      });
    },
    decreaseQty: (state, action) => {
      const { idx, num, price } = action.payload;
      state.carts = state.carts.map((cart) => {
        if (cart.idx === idx) {
          cart.qty = cart.qty - num;
          cart.price = price * cart.qty;
        }
        return { ...cart };
      });
    },
  },
});

export const {
  priceValue,
  regionsValue,
  resetValue,
  fetchTravelData,
  addTravelToCart,
  updateTravelData,
  removeCartItems,
  increaseQty,
  decreaseQty,
} = productSlice.actions;

export default productSlice.reducer;
