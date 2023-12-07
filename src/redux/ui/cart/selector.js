export const selectCartModule = (state) => state.cart;

export const selectProductAmount = (state, productId) =>
  selectCartModule(state)[productId] || 0;
