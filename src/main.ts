import { createApp } from "vue";
import App from "./App.vue";
import modules from "@/modules";

import "@/modules/shared/assets/scss/index.scss";

createApp(App).use(modules.store).use(modules.router).mount("#app");
