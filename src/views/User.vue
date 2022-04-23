<template>
  <!-- {{auth.currentUser}} -->
  <suspense>
    <template #default>
      <UserIndex :id="auth.currentUser.uid" />
    </template>

    <template #fallback>waiting for setting skeleton loading</template>
  </suspense>
</template>

<script>
import UserIndex from "../components/UserIndex.vue";
import { getAuth } from "firebase/auth";
export default {
  components: {
    UserIndex,
  },
  setup() {
    const auth = getAuth();
    return { auth };
  },
};
</script>

<style>
</style>