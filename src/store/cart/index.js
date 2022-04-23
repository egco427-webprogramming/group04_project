import { getCart, updateCart } from "../../services/cart.service";

export default {
  namespaced: true,
  state: {
    // cart: [{ id: "6262ddd37fb62705ecb84720", amount: 1 }],
    cart: [],
  },
  getters: {
    cart: (state, getters, rootState) => {
      return state.cart.map(({ id, amount }) => {
        const product = rootState.product.products.find(
          (product) => product._id === id
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
    totalDiscount: (state, getters, rootState) => {
      return getters.cart.reduce((total, product) => {
        const ret =
          total + ((product.price * product.promotion) / 100) * product.amount;
        console.log(ret);
        return ret;
      }, 0);
    },
    totalResult: (state, getters, rootState) => {
      return getters.cart.reduce(
        (total, product) =>
          total +
          ((product.price * (100 - product.promotion)) / 100) * product.amount,
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
    async addProduct({ state, commit }, { id, amount }) {
      console.log(id, amount);
      commit("ADD_PRODUCT", { id, amount });
      try {
        await updateCart(id, state.cart);
      } catch (err) {
        console.error(err);
      }
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
        cart.items.map(({ productId, quantity }) => ({
          id: productId,
          amount: quantity,
        }))
      );
    },
  },
};
