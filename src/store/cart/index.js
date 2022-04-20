import { getProduct } from "../../services/product.service";

export default {
  namespaced: true,
  state: {
    cart: [{ id: 1, amount: 1 }],
  },
  getters: {
    cart: (state, getters, rootState) => {
      console.log(state, state.cart);
      console.log(rootState.product.products);
      return state.cart.map(({ id, amount }) => {
        const product = rootState.product.products.find(
          (product) => product.id === id
        );
        console.log(product);
        return { ...product, amount };
      });
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
  },
  actions: {
    addProduct({ commit }, { id, amount }) {
      commit("ADD_PRODUCT", { id, amount });
    },
  },
};
