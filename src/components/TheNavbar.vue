<template>
  <nav>
    <router-link v-for="content in contents" :to="content.path">{{content.pathname}}</router-link>
  </nav>
</template>

<script>
export default {
  props: {
    contents: Object,
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 5px;
}
</style>