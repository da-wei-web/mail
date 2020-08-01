export const getters = {
  contentCartLength(state) {
    return state.contentCart.length;
  },
  cartList(state) {
    return state.contentCart;
  }
}