<template>
  <!-- Draft Nav -->
  <!-- <nav>
    <router-link v-for="content in contents" :to="content.path">{{content.pathname}}</router-link>
    <router-link
      v-for="category in categoryList"
      :to="{...MAIN_PATH,query:{category:category}}"
    >{{category}}</router-link>
    <CartDropdown />
  </nav> -->
  <sui-menu inverted>
    <router-link :to="{path:'/'}">
      <sui-menu-item>
        <img src="../assets/logo.png" alt="contact page" />
      </sui-menu-item>
    </router-link>
    <router-link v-for="content in contents" :to="content.path">
        <sui-menu-item >
            {{content.pathname}}
        </sui-menu-item>
    </router-link>
    <router-link
      v-for="category in categoryList"
      :to="{...MAIN_PATH,query:{category:category}}">
        <sui-menu-item>{{category}}</sui-menu-item>
    </router-link>
    <sui-menu-menu position="right">
      <sui-dropdown item text="Language">
        <sui-dropdown-menu>
          <sui-dropdown-item>English</sui-dropdown-item>
          <sui-dropdown-item>Russian</sui-dropdown-item>
          <sui-dropdown-item>Spanish</sui-dropdown-item>
        </sui-dropdown-menu>
      </sui-dropdown>
      <router-link :to="{path:'/'}">
        <sui-menu-item>
          <sui-icon name="user" />
        </sui-menu-item>
      </router-link>
    </sui-menu-menu>
  </sui-menu>
  
</template>

<script>
import CartDropdown from "./CartDropdown.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  props: {
    contents: Object,
  },
  components: { CartDropdown },
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
  text-decoration: none;
}
.menu {
  align-items: center;
}
</style>