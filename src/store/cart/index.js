import { getCart, updateCart } from "../../services/cart.service";
import { getAuth } from "firebase/auth";
import toast from "../toaster";
export default {
  namespaced: true,
  state: {
    // cart: [{ id: "6262ddd37fb62705ecb84720", amount: 1 }],
    cart: [],
  },
  getters: {
    cart: (state, getters, rootState) => {
      return state.cart.map(({ id, amount }) => {
        const product = rootState.product.mappedProducts[id];
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
        return (productInCart["amount"] += Number(amount));
      }
      return cart.push({ id, amount });
    },
    REMOVE_PRODUCT(state, { id }) {
      const productInCart = state.cart.find((item) => item.id == id);
      if (!!productInCart) {
        productInCart["amount"] -= 1;
        if (productInCart["amount"] <= 0) {
          state.cart = state.cart.filter((item) => item.id != productInCart.id);
        }
      }
    },
    SET_CART(state, userCart) {
      // userCart.forEach((product) => {

      //   cart.push(product);
      // });
      state.cart = userCart;
      // console.log(state.cart, userCart);
    },
    CLEAR_CART(state) {
      state.cart = [];

      console.log("clearing finish");
    },
  },
  actions: {
    async addProduct({ state, commit }, { id, amount }) {
      console.log(id, amount);
      commit("ADD_PRODUCT", { id, amount });

      toast.errorToast("test");  

      toast.clear()    
      toast.successToast();
      try {
        const currentUser = getAuth().currentUser;
        if (!!currentUser) {
          await updateCart(currentUser.uid, state.cart);
        }
      } catch (err) {
        console.error(err);
      }
    },
    async removeProduct({ state, commit }, { id }) {
      console.log(id, -1);
      commit("REMOVE_PRODUCT", { id });
      try {
        const currentUser = getAuth().currentUser;
        if (!!currentUser) {
          await updateCart(currentUser.uid, state.cart);
        }
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
        cart.items.map(({ item, unit }) => ({
          id: item,
          amount: Number(unit),
        }))
      );
    },
    clearCart({ commit }) {
      console.log("clearing");
      commit("CLEAR_CART");
    },

    async clearCartAfterPurchase({ state, commit }) {
      console.log("clearing");
      commit("CLEAR_CART");
      try {
        const currentUser = getAuth().currentUser;
        if (!!currentUser) {
          await updateCart(currentUser.uid, state.cart);
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
};
