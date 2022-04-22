import { createRouter, createWebHistory } from "vue-router";
// import page
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
import User from "../views/User.vue";
import Product from "../views/Product.vue";

import SignIn from "../views/SignIn.vue";

import { getAuth } from "firebase/auth";
// using web history
const routerHistory = createWebHistory();

// routing
// https://router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
// used when need to login to access this path
//  meta: { requiresAuth: true }
const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "Home", component: Home },
  { path: "/main", name: "Main", component: Main },
  },
  { path: "/user", name: "User", component: User },
  { path: "/product/:id", name: "Product", component: Product },
  { path: "/signin", name: "SignIn", component: SignIn },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

// create router
const router = createRouter({
  history: routerHistory,
  routes,
});

//check auth for path
router.beforeEach((to, from, next) => {
  const currentUser = getAuth().currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (currentUser) {
    userStore.login();
    console.log(userStore.state.isLoggedIn);
  } else {
    userStore.logout();
    console.log(userStore.state.isLoggedIn);
  }
  if (requiresAuth && !currentUser) {
    // console.log("You are not authorized to access this area.");
    next("signin");
  } else if (to.name == "SignIn" && currentUser) {
    // console.log("You are authorized to access this area.");

    next("/");
  } else {
    next();
  }
});

// export router
export default router;
