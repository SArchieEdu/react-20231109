import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Review"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getHeadphones: builder.query({
      query: () => ({
        url: "products",
      }),
    }),
    getCodecs: builder.query({
      query: () => ({
        url: "codecs",
      }),
    }),
    getReviews: builder.query({
      query: (productId) => ({
        url: "reviews",
        params: { productId },
      }),
      providesTags: (result, _, productId) =>
        result
          .map(({ id }) => ({ type: "Review", id }))
          .concat(
            { type: "Review", id: "ALL" },
            { type: "Review", id: productId }
          ),
    }),
    createReview: builder.mutation({
      query: ({ productId, newReview }) => ({
        url: `review/${productId}`,
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: (result, _, { productId }) => [
        { type: "Review", id: productId },
      ],
    }),
  }),
});

export const {
  useGetHeadphonesQuery,
  useGetCodecsQuery,
  useCreateReviewMutation,
} = api;
