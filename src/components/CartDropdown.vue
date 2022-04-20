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
export default {
  components: { CartDropdownItemList },
};
</script>

<style scoped>
nav > * {
  z-index: 100;
}
</style>