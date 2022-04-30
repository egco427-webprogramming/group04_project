import { createRouter, createWebHistory } from "vue-router";
// import page
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
import User from "../views/User.vue";
import History from "../views/History.vue";
import Promotion from "../views/Promotion.vue";
import Product from "../views/Product.vue";
import Cart from "../views/Cart.vue";
import Purchased from "../views/Purchased.vue";

import SignIn from "../views/SignIn.vue";
import Signup from "../views/Signup.vue";

import { getAuth } from "firebase/auth";
import userStore from "../store/user";
import store from "../store";

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
  { path: "/promotion", name: "Promotion", component: Promotion },
  {
    path: "/user",
    name: "User",
    component: User,
    meta: { requiresAuth: true },
  },
  {
    path: "/history",
    name: "History",
    component: History,
    meta: { requiresAuth: true },
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    meta: { requiresAuth: true },
  },
  {
    path: "/purchased",
    name: "Purchased",
    component: Purchased,
    meta: { requiresAuth: true },
  },
  { path: "/product/:id", name: "Product", component: Product },
  { path: "/signin", name: "SignIn", component: SignIn },
  { path: "/signup", name: "Signup", component: Signup },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

// create router
const router = createRouter({
  history: routerHistory,
  routes,
});

//check auth for path
router.beforeEach(async (to, from, next) => {
  const currentUser = getAuth().currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (currentUser) {
    userStore.login();
    await store.dispatch("cart/addCart", currentUser.uid);
  } else {
    userStore.logout();
  }
  console.log("is logged in", userStore.state.isLoggedIn);
  window.scrollTo(0, 0);
  if (requiresAuth && !currentUser) {
    // console.log("You are not authorized to access this area.");
    next("signin");
  } else if (to.name == "SignIn" && currentUser) {
    // console.log("You are authorized to access this area.");
    next("/");
  } else if (to.name == "Signup" && currentUser) {
    next("/");
  } else {
    next();
  }
});

// export router
export default router;
