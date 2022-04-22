<template>
  <nav>
    {{isLoggedIn}}
    <router-link :to="{name:'Main'}">main</router-link>
    <router-link :to="{name:'User'}" v-if="isLoggedIn">User</router-link>
    <router-link :to="{name:'SignIn'}" v-if="!isLoggedIn">SignIn</router-link>
    <a href="#" @click="handleLogout" v-if="isLoggedIn">SignOut</a>
    <router-link
      v-for="category in categoryList"
      :to="{...MAIN_PATH,query:{category:category}}"
    >{{category}}</router-link>
    <CartDropdown />
  </nav>
</template>

<script>
import CartDropdown from "./CartDropdown.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import userStore from "../store/user";

export default {
  components: { CartDropdown },
  props: { handleLogout: Function },
  computed: {
    isLoggedIn: () => userStore.state.isLoggedIn,
  },
  // composition
  setup() {
    // desctructoring store
    const { dispatch, state } = useStore();

    // getCategoryList
    const categoryList = computed(() => state.product.categories);

    // fetchCategory
    dispatch("product/setCategories");

    // data
    const MAIN_PATH = { name: "Main" };
    return { categoryList, MAIN_PATH };
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