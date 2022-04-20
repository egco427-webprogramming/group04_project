import {
  getProductList,
  getCategoryList,
} from "../../services/product.service";

export default {
  namespaced: true,
  state: {
    products: [],
    categories: [],
    // product: {},
  },
  getters: {},
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    // SET_PRODUCT(state, product) {
    //   state.product = product;
    // },
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
    async setCategories({ commit }) {
      let categories = [];
      try {
        categories = await getCategoryList();
      } catch (err) {
        console.error(err);
      }
      commit("SET_CATEGORIES", categories);
    },
    // async setProduct({ commit }, id) {
    //   let product = {};
    //   try {
    //     product = await getProduct(id);
    //   } catch (err) {
    //     console.error(err);
    //   }
    //   console.log(product);
    //   commit("SET_PRODUCT", product);
    // },
  },
};
