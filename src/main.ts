import { createApp } from "vue";
import App from "./App.vue";
import modules from "@/modules";

createApp(App).use(modules.store).use(modules.router).mount("#app");
