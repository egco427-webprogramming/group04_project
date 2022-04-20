<template>
  <div class="product-wrapper">
    <ProductCard v-for="product in products" :product="product" />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("product");

export default {
  components: { ProductCard },
  computed: {
    ...mapState({ products: (state) => state.products }),
  },
  methods: {
    ...mapActions(["setProducts"]),
  },
  async created() {
    await this.setProducts();
  },
};
</script>

<style scoped>
.product-wrapper {
  display: flex;
  flex-wrap: wrap;
  /* grid-template-columns: repeat(4, 1fr); */
}
</style>