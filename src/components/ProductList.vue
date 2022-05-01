<template>
  <br />
  <div>
    <h1 class="text-category">{{category}}</h1>
  </div>
  <div class="product-wrapper">
    <template v-for="product in products" :key="'product-card-'+product._id">
      <ProductCard :product="product" />
    </template>
  </div>
  <br />
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { useRoute } from "vue-router";
import { computed, ref, watch } from "vue";
import {
  getProductList,
  getProductListWithCategory,
} from "../services/product.service";

import toast from "../store/toaster";

export default {
  components: { ProductCard },
  async setup() {
    const route = useRoute();

    const fetchData = async (category) => {
      let data = [];
      try {
        data = await (category
          ? getProductListWithCategory(category)
          : getProductList());
      } catch (err) {
        toast.errorToast(err.message);
      }
      return data;
    };

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
