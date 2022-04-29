<template>
  <br>
  <div>
    <h1 class="text-category">{{category}}</h1>
  </div>
  <div class="product-wrapper">
    <template v-for="product in products">
      <PromotionCard
        v-if="product.promotion > 0"
        :product="product"
        :key="'product-card-'+product._id"
      />
      <ProductCard v-else :product="product" :key="'product-card-'+product._id" />
    </template>
  </div>
  <br />
</template>

<script>
import ProductCard from "./ProductCard.vue";
import PromotionCard from "./PromotionCard.vue";
import { useRoute } from "vue-router";
import { computed, onMounted, ref, watchEffect, watch } from "vue";
import {
  getProductList,
  getProductListWithCategory,
} from "../services/product.service";
// import { useStore } from "vuex";

// import { createNamespacedHelpers } from "vuex";
// const { mapState, mapActions } = createNamespacedHelpers("product");

export default {
  components: { ProductCard, PromotionCard },
  async setup() {
    const route = useRoute();

    const fetchData = async (category) =>
      await (category
        ? getProductListWithCategory(category)
        : getProductList());

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
  margin-top: 40px;
}
.text-category {
  font-weight: 700;
  font-size: 50px;
  /* color: rgb(160, 8, 138); */
}
</style>