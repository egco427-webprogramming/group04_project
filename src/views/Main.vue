<template>
  <suspense>
    <template #default>
        <sui-segment id="product-segment">
          <ProductList />
          <br>
        </sui-segment>
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

<style scoped>
.product-segment {
  width: 100%;
  align-items: center;
  justify-items: center;
}
</style>