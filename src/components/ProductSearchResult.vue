<template>
  <br>
  <div>
    <h1 class="text-query">search result of {{query}}</h1>
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
import { getProductListWithKeyword } from "../services/product.service";

export default {
  components: { ProductCard },
  async setup() {
    const route = useRoute();

    const fetchData = async (query) => await getProductListWithKeyword(query);

    const products = ref(await fetchData(route.query.q));

    watch(
      () => route.query.q,
      async (query, _) => {
        if (!!query && query != "") products.value = await fetchData(query);
      }
    );
    return { products, query: computed(() => route.query.q) };
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
.text-query {
  font-weight: 700;
  font-size: 50px;
}
</style>