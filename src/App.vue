<template>
  <TheNavbar :handleLogout="handleLogout" />
  <router-view />
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import { useStore } from "vuex";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
  name: "App",

  components: {
    TheNavbar,
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
    },
  },
};
</script>
