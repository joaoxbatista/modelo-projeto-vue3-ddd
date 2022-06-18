const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home.index",
    component: () => import("../pages/index.vue"),
  },
];

export default routes;
