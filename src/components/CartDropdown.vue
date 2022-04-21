<template>
  <suspense>
    <template #default>
      <CartDropdownItemList />
    </template>
    <template #fallback>loading dropdown</template>
  </suspense>
</template>

<script>
import CartDropdownItemList from "./CartDropdownItemList.vue";
import { useStore } from "vuex";
export default {
  components: { CartDropdownItemList },
  setup() {
    const { dispatch } = useStore();

    dispatch("cart/addCart", 1);
  },
};
</script>

<style scoped>
nav > * {
  z-index: 100;
}
</style>