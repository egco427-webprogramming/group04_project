import { getCart } from "../../services/cart.service";

export default {
  namespaced: true,
  state: {
    cart: [{ id: 1, amount: 1 }],
  },
  getters: {
    cart: (state, getters, rootState) => {
      return state.cart.map(({ id, amount }) => {
        const product = rootState.product.products.find(
          (product) => product.id === id
        );
        return { ...product, amount };
      });
    },
    totalPrice: (state, getters, rootState) => {
      return getters.cart.reduce(
        (total, product) => total + product.price * product.amount,
        0
      );
    },
  },
  mutations: {
    ADD_PRODUCT({ cart }, { id, amount }) {
      const productInCart = cart.find((item) => item.id == id);
      if (!!productInCart) {
        return (productInCart["amount"] += amount);
      }
      return cart.push({ id, amount });
    },
    SET_CART({ cart }, userCart) {
      userCart.forEach((product) => cart.push(product));
    },
  },
  actions: {
    addProduct({ commit }, { id, amount }) {
      commit("ADD_PRODUCT", { id, amount });
    },
    async addCart({ commit }, id) {
      let cart = [];
      try {
        cart = await getCart(id);
      } catch (err) {
        console.error(err);
      }
      commit(
        "SET_CART",
        cart.products.map(({ productId, quantity }) => ({
          id: productId,
          amount: quantity,
        }))
      );
    },
  },
};
