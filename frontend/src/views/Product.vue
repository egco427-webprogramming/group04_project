<template>
  <suspense>
    <template #default>
      <ProductDetail :id="id" />
    </template>
    <template #fallback>loading...</template>
  </suspense>
</template>

<script>
import { useRoute } from "vue-router";
import ProductDetail from "../components/ProductDetail.vue";

export default {
  setup() {
    const id = useRoute().params.id;
    return { id };
  },
  components: { ProductDetail },
};
</script>

<style>
</style>