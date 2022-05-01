<template>
  <suspense>
    <template #default>
      <CartDropdownItemList />
    </template>
    <template #fallback>this is rare page</template>
  </suspense>
</template>

<script>
import CartDropdownItemList from "./CartDropdownItemList.vue";
export default {
  components: { CartDropdownItemList },
};
</script>

<style scoped>
nav > * {
  z-index: 100;
}
</style>