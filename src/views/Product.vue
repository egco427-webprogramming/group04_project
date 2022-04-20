<template>
  <suspense>
    <template #default>
      <ProductDetail :id="id" />
    </template>
    <template #fallback>
      loading..
      <!-- implement skeleton loading later -->
    </template>
  </suspense>
</template>

<script>
import { useRoute } from "vue-router";
import ProductDetail from "../components/ProductDetail.vue";
// import { createNamespacedHelpers, useStore } from "vuex";
// const { mapState, mapActions } = createNamespacedHelpers("product");

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