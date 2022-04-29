<template>
  <suspense>
    <template #default>
      <sui-segment id="product-segment">
        <ProductList v-if="!q" />
        <ProductSearchResult v-if="!!q" />
        <br />
      </sui-segment>
    </template>
    <template #fallback>waiting for skeleton loading</template>
  </suspense>
</template>

<script>
import ProductList from "../components/ProductList.vue";
import ProductSearchResult from "../components/ProductSearchResult.vue";
export default {
  components: { ProductList, ProductSearchResult },
  data() {
    return { q: this.$route.query?.q };
  },
};
</script>

<style scoped>
.product-segment {
  width: 100%;
  align-items: center;
  justify-items: center;
}
</style>