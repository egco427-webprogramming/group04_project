<template>
  <suspense>
    <template #default>
      <HistoryIndex :id="auth.currentUser.uid" />
    </template>

    <template #fallback>waiting for setting skeleton loading</template>
  </suspense>
</template>

<script>
import HistoryIndex from "../components/HistoryIndex.vue";
import { getAuth } from "firebase/auth";
export default {
  components: {
    HistoryIndex,
  },
  setup() {
    const auth = getAuth();
    return { auth };
  },
};
</script>
