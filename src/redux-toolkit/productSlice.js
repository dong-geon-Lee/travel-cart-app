import { createSlice } from "@reduxjs/toolkit";
import { priceLists } from "../constants/constants";

const initialState = {
  products: [],
  sortedProducts: [],
  carts: [],
  price: "all",
  regions: "all",
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

      console.log(minNum, maxNum);
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
    cartReset: (state) => {
      state.products = [];
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
  cartReset,
} = productSlice.actions;

export default productSlice.reducer;
