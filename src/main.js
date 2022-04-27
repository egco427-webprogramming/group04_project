import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FomanticUI from "vue-fomantic-ui";
import "fomantic-ui-css/semantic.min.css";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import moshaToast from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

let app;
let auth;

const firebaseConfig = {
  apiKey: "AIzaSyDsothA4c9X5ZffIvfRjgkIL8I3Q5FSPXw",
  authDomain: "projectweb-a85bc.firebaseapp.com",
  projectId: "projectweb-a85bc",
  storageBucket: "projectweb-a85bc.appspot.com",
  messagingSenderId: "104838580776",
  appId: "1:104838580776:web:c6138ecca1a0009ec7c31d",
};

// Initialize Firebase
initializeApp(firebaseConfig);
auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .use(store)
      .use(moshaToast)
      .use(FomanticUI)
      .mount("#app");
  }
});
