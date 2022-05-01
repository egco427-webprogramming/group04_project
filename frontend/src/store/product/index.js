import {
  getProductList,
  getCategoryList,
} from "../../services/product.service";

import toast from "../toaster";

export default {
  namespaced: true,
  state: {
    products: [],
    // using dynamic programming for better runtime
    mappedProducts: [],
    categories: [],
  },
  getters: {},
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
      state.products.forEach((product) => {
        state.mappedProducts[product._id] = product;
      });
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    async setProducts({ commit }) {
      let products = [];
      try {
        products = await getProductList();
      } catch (err) {
        toast.clear();
        toast.errorToast(err.message);
      }
      commit("SET_PRODUCTS", products);
    },
    async setCategories({ commit }) {
      let categories = [];
      try {
        categories = await getCategoryList();
      } catch (err) {
        toast.clear();
        toast.errorToast(err.message);
      }
      commit("SET_CATEGORIES", categories);
    },
  },
};
