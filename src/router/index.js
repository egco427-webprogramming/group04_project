import { createRouter, createWebHistory } from "vue-router";
// import page
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
import About from "../views/About.vue";

// using web history
const routerHistory = createWebHistory();

// routing
// https://router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "Home", component: Home },
  { path: "/main", name: "Main", component: Main },
  { path: "/about", name: "About", component: About },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

// create router
const router = createRouter({
  history: routerHistory,
  routes,
});

// export router
export default router;
