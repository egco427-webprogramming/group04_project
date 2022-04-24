<template>
  <br />
  <h1>Promotion</h1>

  <div class="product-wrapper">
    <PromotionCard
      v-for="product in products"
      :product="product"
      :key="'product-card-'+product._id"
    />
  </div>
</template>

<script>
import PromotionCard from "./PromotionCard.vue";
import { ref } from "vue";
import { getProductListWithPromotion } from "../services/product.service";

export default {
  components: { PromotionCard },
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
}
</style>