<template>
  <TheNavbar :contents="contents" />
  <router-view />
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import { useStore } from "vuex";

export default {
  name: "App",
  data() {
    return {
      contents: [
        { pathname: "home", path: "/" },
        { pathname: "main", path: "/main" },
        { pathname: "about", path: "/about" },
      ],
    };
  },
  components: {
    TheNavbar,
  },
  setup() {
    const { dispatch } = useStore();
    dispatch("product/setProducts");
  },
};
</script>
