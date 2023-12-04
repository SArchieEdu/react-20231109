import { configureStore } from "@reduxjs/toolkit";
import { headphoneSlice } from "./features/entities/headphone";
import { codecSlice } from "./features/entities/codec";
import { userSlice } from "./features/entities/user";
import { reviewSlice } from "./features/entities/review";

const store = configureStore({
  reducer: {
    headphone: headphoneSlice.reducer,
    codec: codecSlice.reducer,
    review: reviewSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;

console.log(store.getState());
