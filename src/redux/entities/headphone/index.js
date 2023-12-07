import { createSlice } from "@reduxjs/toolkit";
import { getHeadphones } from "./thunks/get-headphones";
import { REQUEST_STATUSES } from "../../../constants/request-statuses";

export const headphoneSlice = createSlice({
  name: "headphone",
  initialState: {
    entities: {},
    ids: [],
    status: REQUEST_STATUSES.idle,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getHeadphones.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(getHeadphones.fulfilled, (state, { payload }) => {
        state.entities = payload.reduce((acc, headphone) => {
          acc[headphone.id] = headphone;

          return acc;
        }, {});
        state.ids = payload.map(({ id }) => id);
        state.status = REQUEST_STATUSES.fulfilled;
      })
      .addCase(getHeadphones.rejected, (state) => {
        state.status = REQUEST_STATUSES.rejected;
      }),
});
