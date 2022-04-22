<template>
  <br>
  <h2>{{category}}</h2>
  <br>
  <div class="product-wrapper">
    <ProductCard v-for="product in products" :product="product" :key="'product-card-'+product.id" />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { useRoute } from "vue-router";
import { computed, onMounted, ref, watchEffect, watch } from "vue";
import {
  getProductList,
  getProductListWithQuery,
} from "../services/product.service";
// import { useStore } from "vuex";

// import { createNamespacedHelpers } from "vuex";
// const { mapState, mapActions } = createNamespacedHelpers("product");

export default {
  components: { ProductCard },
  async setup() {
    const route = useRoute();

    const fetchData = async (category) =>
      await (category ? getProductListWithQuery(category) : getProductList());

    const products = ref(await fetchData(route.query.category));

    watch(
      () => route.query.category,
      async (category, _) => {
        products.value = await fetchData(category);
      }
    );
    return { products, category: computed(() => route.query.category) };
  },
  // for vuex
  // setup() {
  //   const { state, dispatch } = useStore();
  //   const route = useRoute();

  //   const category = computed(() => route.query.category);
  //   // const products = computed(() => state.product.products);
  //   const products = computed(() =>
  //     category.value
  //       ? state.product.products.filter(
  //           (product) => product.category === category.value
  //         )
  //       : state.product.products
  //   );
  //   dispatch("product/setProducts");

  //   return { category, products };
  // },
};
</script>

<style scoped>
.product-wrapper {
  display: flex;
  flex-wrap: wrap;
  /* grid-template-columns: repeat(4, 1fr); */
  justify-content: center;
}
</style>