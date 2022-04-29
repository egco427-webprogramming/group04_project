<template>
  <br>
  <div>
    <h1 class="text-promotion">Promotion</h1>
  </div>
  <div class="product-wrapper">
    <ProductCard v-for="product in products" :product="product" :key="'product-card-'+product._id" />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { ref } from "vue";
import { getProductListWithPromotion } from "../services/product.service";

export default {
  components: { ProductCard },
  async setup() {
    const products = ref(await getProductListWithPromotion());

    return { products };
  },
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
</style>
<style >
.card-image:hover {
  opacity: 0.9;
  transition: all 0.4s ease-in-out;
}
.text-promotion {
  font-weight: 700;
  font-size: 50px;
  color: rgb(54, 54, 55)
}
</style>