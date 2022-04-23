
<template>
  <TheNavbar :handleLogout="handleLogout" />
  <router-view />
  <TheFooter />
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";
import { useStore } from "vuex";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import store from "./store";

export default {
  name: "App",

  components: {
    TheNavbar,
    TheFooter,
  },
  setup() {
    const { dispatch } = useStore();
    dispatch("product/setProducts");
  },
  methods: {
    handleLogout() {
      //console.log(getAuth().currentUser) //return null if no user logged in

      const currentUser = getAuth().currentUser;
      const auth = getAuth();
      if (currentUser && auth) {
        signOut(auth)
          .then(() => {
            this.$router.replace("/signin");
          })
          .catch((error) => {
            alert(error.message);
          });
      }
      store.dispatch("cart/clearCart");
      this.$router.push("/");
    },
  },
};
</script>
