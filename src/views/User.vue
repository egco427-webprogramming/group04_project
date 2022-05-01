<template>
  <!-- {{auth.currentUser}} -->
  <suspense>
    <template #default>
      <UserIndex :id="auth.currentUser.uid" />
    </template>

    <template #fallback>
      <UserSettingSkeleton />
    </template>
  </suspense>
</template>

<script>
import UserIndex from "../components/UserIndex.vue";
import UserSettingSkeleton from "../components/skeletons/UserSettingSkeleton.vue"
import { getAuth } from "firebase/auth";
export default {
  components: {
    UserIndex,
    UserSettingSkeleton
  },
  setup() {
    const auth = getAuth();
    return { auth };
  },
};
</script>

<style>
</style>