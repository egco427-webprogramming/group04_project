<template>
  <suspense>
    <template #default>
      <CartIndex :id="auth.currentUser.uid" />
    </template>

    <template #fallback>
      <CartIndexSkeleton />
    </template>
  </suspense>
</template>

<script>
import CartIndex from "../components/CartIndex.vue";
import CartIndexSkeleton from "../components/skeletons/CartIndexSkeleton.vue";
import { getAuth } from "firebase/auth";
export default {
  components: { CartIndex, CartIndexSkeleton },
  setup() {
    const auth = getAuth();
    return { auth };
  },
};
</script>

<style>
</style>