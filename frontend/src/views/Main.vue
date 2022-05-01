<template>
  <suspense>
    <template #default>
      <sui-segment id="product-segment">
        <ProductList v-if="!q" />
        <ProductSearchResult v-else />
        <br>
      </sui-segment>
    </template>
    <template #fallback>
      <ProductListSkeleton />
    </template>
  </suspense>
</template>

<script>
import ProductList from "../components/ProductList.vue";
import ProductListSkeleton from "../components/skeletons/ProductListSkeleton.vue";
import ProductSearchResult from "../components/ProductSearchResult.vue";
export default {
  components: { ProductList, ProductSearchResult, ProductListSkeleton },
  computed: {
    q() {
      return this.$route.query?.q;
    },
    category() {
      return this.$route.query?.category;
    },
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