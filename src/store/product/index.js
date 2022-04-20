import { getProductList, getProduct } from "../../services/product.service";

export default {
  namespaced: true,
  state: {
    products: [],
    product: {},
  },
  getters: {},
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT(state, product) {
      state.product = product;
    },
  },
  actions: {
    async setProducts({ commit }) {
      let products = [];
      try {
        products = await getProductList();
      } catch (err) {
        console.error(err);
      }
      commit("SET_PRODUCTS", products);
    },
    async setProduct({ commit }, id) {
      let product = {};
      try {
        product = await getProduct(id);
      } catch (err) {
        console.error(err);
      }
      console.log(product);
      commit("SET_PRODUCT", product);
    },
  },
};
