<template>
  <sui-menu size="big" class="sticky-top" id="main-nav">
    <!-- Logo -->
    <router-link to="/" id="logo">
      <sui-image
        src="https://docs.google.com/uc?id=1X1DtrmN5swQP_S8dsf2Zeh_TrMSi4joc"
        size="small"
      />
    </router-link>
    <!-- Promotion -->
    <sui-menu-item>
      <router-link :to="{name:'Promotion'}">
        <p>Promotion</p>
      </router-link>
    </sui-menu-item>

    <!-- Category -->
    <div class="ui simple dropdown item">
      <p class="category-item">Category {{category}}</p>
      <!-- <i class="dropdown icon"></i> -->
      <div class="menu">
        <div class="item" v-for="category in categoryList">
          <router-link :to="{...MAIN_PATH,query:{category:category}}">
            <p>{{category}}</p>
          </router-link>
        </div>
      </div>
    </div>

    <sui-menu-menu position="right" class="nav-right">
      <!-- Search -->
      <SearchBar />
      <!-- Cart Dropdown -->
      <div class="cart-item">
        <CartDropdown />
      </div>
      <!-- User -->
      <div class="ui simple dropdown item" id="user-item">
        <i class="user icon" id="user-icon-item"></i>
        <div class="menu" id="dropdown-menu-user">
          <div class="item">
            <router-link to="/user">
              <p>Profile</p>
            </router-link>
          </div>
          <div class="item">
            <router-link :to="{name:'History'}">
              <p>History</p>
            </router-link>
          </div>
          <a href="#" @click="handleLogout" v-if="isLoggedIn">
            <div class="item">
              <p>Sign Out</p>
            </div>
          </a>
        </div>
      </div>
      <!-- <a href="#" @click="handleLogout" v-if="isLoggedIn">
      <sui-menu-item>SignOut</sui-menu-item>
      </a>-->
    </sui-menu-menu>
  </sui-menu>
</template>

<script>
import CartDropdown from "./CartDropdown.vue";
import SearchBar from "./SearchBar.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import userStore from "../store/user";

export default {
  components: { CartDropdown, SearchBar },
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
a {
  text-decoration: none;
}
p {
  color: #000;
}
.menu {
  align-items: center;
  margin: 0px;
  text-decoration: none;
  /* flex-wrap: wrap; */
}
/* .menu > * {
  width: 1fr;
  width: auto;
} */
/* .menu-item {
  margin: 0px;
  text-decoration: none;
} */
.category-item {
  margin: auto;
}
.cart-item {
  margin: auto;
}
#user-icon-item {
  margin: auto;
}
/* #nav-right {
  margin: auto;
} */
</style>
<style >
/* responsive nav for mobile */
@media only screen and (max-width: 720px) {
  #main-nav {
    /* display: grid; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* justify-content: center; */
  }
  #main-nav > * {
    margin: auto;
  }
  #main-nav > .item::before {
    display: none;
  }
  #main-nav > #logo {
    grid-column: span 2;
  }

  #main-nav > .right {
    grid-column: span 2;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  #main-nav > .right > .search {
    width: 100%;
    grid-column: span 2;
    grid-row-start: 2;
  }
  #main-nav > .right > .search > .input {
    width: 80%;
  }
  #main-nav > .right > #user-item {
    grid-row-start: 1;
  }
}
</style>