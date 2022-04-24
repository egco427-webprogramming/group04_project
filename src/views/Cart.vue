<template>
  <!-- {{auth.currentUser}} -->
  <suspense>
    <template #default>
      <CartIndex :id="auth.currentUser.uid" />
    </template>

    <template #fallback>waiting for setting skeleton loading</template>
  </suspense>
</template>

<script>
import CartIndex from "../components/CartIndex.vue";
import { getAuth } from "firebase/auth";
export default {
  components: {
    CartIndex,
  },
  setup() {
    const auth = getAuth();
    return { auth };
  },
};
</script>

<style>
</style>