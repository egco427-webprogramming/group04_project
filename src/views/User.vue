<template>
  <suspense>
    <template #default>
      <UserIndex id="1" />
    </template>

    <template #fallback>waiting for setting skeleton loading</template>
  </suspense>
</template>

<script>
import UserIndex from "../components/UserIndex.vue";
export default {
  components: {
    UserIndex,
  },
};
</script>

<style>
</style>