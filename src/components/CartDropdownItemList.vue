<template>
  <!-- implement better dropdown via other css framework -->
  <select name="cars" id="cars" class="dropdown">
    <option>title x amount</option>
    <option v-for="item in cart">{{item.title}} x {{item.amount}}</option>
    <div></div>
  </select>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const { getters } = useStore();

    const cart = computed(() => getters["cart/cart"]);

    return { cart };
  },
};
</script>

<style>
</style>