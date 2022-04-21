<template>
  <suspense>
    <template #default>
      <ProductList />
    </template>
    <template #fallback>waiting for skeleton loading</template>
  </suspense>
</template>

<script>
import ProductList from "../components/ProductList.vue";
export default {
  components: { ProductList },
};
</script>

<style>
</style>