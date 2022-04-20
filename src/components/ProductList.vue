<template>
  <div>{{category}}</div>
  <div class="product-wrapper">
    <ProductCard v-for="product in products" :product="product" />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";

// import { createNamespacedHelpers } from "vuex";
// const { mapState, mapActions } = createNamespacedHelpers("product");

export default {
  components: { ProductCard },

  setup() {
    const { state, dispatch } = useStore();
    const route = useRoute();

    const category = computed(() => route.query.category);
    // const products = computed(() => state.product.products);
    const products = computed(() =>
      category
        ? state.product.products.filter(
            (product) => product.category === category.value
          )
        : state.product.products
    );
    dispatch("product/setProducts");

    return { category, products };
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