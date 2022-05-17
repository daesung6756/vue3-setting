import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("../views/Home") },
  { path: "/login", name: "login", component: () => import("../views/Login") },
  { path: "/about", name: "about", component: () => import("../views/About") },
  { path: "/menu3", name: "menu3", component: () => import("../views/menu3") },
  { path: "/menu4", name: "menu4", component: () => import("../views/menu4") },
  { path: "/menu5", name: "menu5", component: () => import("../views/menu5") },
  { path: "/menu6", name: "menu6", component: () => import("../views/menu6") },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
