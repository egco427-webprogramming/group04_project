<template>
  <suspense>
    <template #default>
      <sui-segment id="product-segment">
        <ProductList />
        <br />
      </sui-segment>
    </template>
    <template #fallback>
      <ProductListSkeleton />
    </template>
  </suspense>
</template>

<script>
import ProductList from "../components/PromotionList.vue";
import ProductListSkeleton from "../components/skeletons/ProductListSkeleton.vue";
export default {
  components: { ProductList, ProductListSkeleton },
};
</script>

<style scoped>
.product-segment {
  width: 100%;
  align-items: center;
  justify-items: center;
}
</style>