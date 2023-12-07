import { configureStore } from "@reduxjs/toolkit";
import { headphoneSlice } from "./entities/headphone";
import { codecSlice } from "./entities/codec";
import { userSlice } from "./entities/user";
import { reviewSlice } from "./entities/review";
import { cartSlice } from "./ui/cart";

const store = configureStore({
  reducer: {
    headphone: headphoneSlice.reducer,
    codec: codecSlice.reducer,
    review: reviewSlice.reducer,
    user: userSlice.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
});

export default store;

console.log(store.getState());
