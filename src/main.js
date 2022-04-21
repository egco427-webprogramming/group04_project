import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FomanticUI from "vue-fomantic-ui";
import "fomantic-ui-css/semantic.min.css";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import {initializeApp} from "firebase/app"
import {getAuth, onAuthStateChanged} from "firebase/auth"

let app
let auth

const firebaseConfig = {
    apiKey: "AIzaSyCWGbtjn6frYLKFN1P_j88dZDkoJbFfSW8",
    authDomain: "webdesign-a7984.firebaseapp.com",
    projectId: "webdesign-a7984",
    storageBucket: "webdesign-a7984.appspot.com",
    messagingSenderId: "164654952973",
    appId: "1:164654952973:web:11198a2fcd4a269d5c1b44"
  };

  // Initialize Firebase
  initializeApp(firebaseConfig)
  auth = getAuth()

  onAuthStateChanged( auth, (user)=>{
    if(!app) {
        app = createApp(App).use(router).use(store).use(FomanticUI).mount("#app");
    }
})