<template>
  <br>
  <div>
    <h1 class="text-category">{{category}}</h1>
  </div>
  <div class="product-wrapper">
    <template v-for="product in products" :key="'product-card-'+product._id">
      <ProductCard :product="product" />
    </template>
  </div>
  <br>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { useRoute } from "vue-router";
import { computed, onMounted, ref, watchEffect, watch } from "vue";
import {
  getProductList,
  getProductListWithCategory,
} from "../services/product.service";
export default {
  components: { ProductCard },
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
};
</script>

<style scoped>
.product-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
}
.text-category {
  font-weight: 700;
  font-size: 50px;
  color: rgb(54, 54, 55);
}
</style>
