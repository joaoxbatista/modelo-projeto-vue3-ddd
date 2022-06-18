import { createRouter, createWebHistory } from "vue-router";
import homeRoutes from "@/modules/home/routes";

export const routes = [...homeRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
