<template>
  <div>cart:{{cart}}</div>
  <div>total:{{totalPrice}}</div>
  <div>discount:{{totalDiscount}}</div>
  <div>Result:{{totalResult}}</div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    id: String,
  },
  async setup(props) {
    const { getters } = useStore();

    const cart = computed(() => getters["cart/cart"]);
    const totalPrice = computed(() => getters["cart/totalPrice"]);
    const totalDiscount = computed(() => getters["cart/totalDiscount"]);
    const totalResult = computed(() => getters["cart/totalResult"]);
    return { cart, totalPrice, totalDiscount, totalResult };
  },
};
</script>

<style>
</style>