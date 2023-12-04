import { createSlice } from "@reduxjs/toolkit";
import { normalizedHeadphones } from "../../../../constants/mock-norm";

export const headphoneSlice = createSlice({
  name: "headphone",
  initialState: {
    entities: normalizedHeadphones.reduce((acc, headphone) => {
      acc[headphone.id] = headphone;

      return acc;
    }, {}),
    ids: normalizedHeadphones.map(({ id }) => id),
  },
});
