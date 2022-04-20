import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FomanticUI from "vue-fomantic-ui";
import "fomantic-ui-css/semantic.min.css";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

createApp(App).use(router).use(store).use(FomanticUI).mount("#app");
