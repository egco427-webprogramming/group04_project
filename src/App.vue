<template> <button @click="logout" >Sign Out</button>
  <TheNavbar :contents="contents" />
   <router-view />
   
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import { useStore } from "vuex";
import {getAuth,onAuthStateChanged, signOut} from 'firebase/auth'

export default {
  name: "App",
  data() {
    return {
      contents: [
        { pathname: "home", path: "/" },
        { pathname: "main", path: "/main" },
        { pathname: "signin", path: "/signin" },
        { pathname: "user", path: "/user" }
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
  methods: {
      logout() {
      //console.log(getAuth().currentUser) //return null if no user logged in
      const currentUser = getAuth().currentUser
      const auth = getAuth()
      if (currentUser && auth) {
      signOut(auth)
        .then(() => {
          this.$router.replace('/signin')
        })
        .catch((error) => {
          alert(error.message)
        })
      }
      }
    }
      
};
</script>
