<template>
  <nav>
    <router-link v-for="content in contents" :to="content.path">{{content.pathname}}</router-link>
    <CartDropdown />
  </nav>
</template>

<script>
import CartDropdown from "./CartDropdown.vue";
export default {
  props: {
    contents: Object,
  },
  components: { CartDropdown },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 5px;
}
</style>