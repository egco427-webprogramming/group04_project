<template>
  <!-- Draft Nav -->
  <sui-menu >
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
      <!-- <sui-dropdown item text="Language">
        <sui-dropdown-menu>
          <sui-dropdown-item>English</sui-dropdown-item>
          <sui-dropdown-item>Russian</sui-dropdown-item>
          <sui-dropdown-item>Spanish</sui-dropdown-item>
        </sui-dropdown-menu>
      </sui-dropdown> -->
      <sui-menu-item>
        <div class="ui category search">
          <div class="ui icon input">
            <input class="prompt" type="text" placeholder="Search product...">
            <i class="search icon"></i>
          </div>
          <div class="results"></div>
        </div>
      </sui-menu-item>
      <sui-menu-item>
        <sui-icon name="shopping cart" /> 
        <CartDropdown />
      </sui-menu-item>
      <router-link :to="{path:'/user'}">
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
a {
  text-decoration: none;
}
nav {
  display: flex;
  justify-content: center;
  text-decoration: none;
}
.menu {
  align-items: center;
  margin: 0px;
  text-decoration: none;
}
.menu-item {
  margin: 0px;
  text-decoration: none;
}
</style>