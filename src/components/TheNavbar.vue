<template>
  <nav>
    <router-link v-for="content in contents" :to="content.path">{{content.pathname}}</router-link>
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
    console.log(categoryList);
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