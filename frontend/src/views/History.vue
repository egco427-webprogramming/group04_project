<template>
  <suspense>
    <template #default>
      <HistoryIndex :id="auth.currentUser.uid" />
    </template>

    <template #fallback>
      <HistoryIndexSkeleton />
    </template>
  </suspense>
</template>

<script>
import HistoryIndex from "../components/HistoryIndex.vue";
import HistoryIndexSkeleton from "../components/skeletons/HistoryIndexSkeleton.vue";
import { getAuth } from "firebase/auth";
export default {
  components: { HistoryIndex, HistoryIndexSkeleton },
  setup() {
    const auth = getAuth();
    return { auth };
  },
};
</script>
