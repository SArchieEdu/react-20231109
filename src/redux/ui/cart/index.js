import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    increment: (state, action) => {
      const productId = action.payload;

      state[productId] = (state[productId] || 0) + 1;
    },
    decrement: (state, action) => {
      const productId = action.payload;

      state[productId] = state[productId] > 0 ? state[productId] - 1 : 0;
    },
  },
});

export const cartActions = cartSlice.actions;
