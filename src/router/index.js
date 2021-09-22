import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contato from "../views/Contato.vue";
import Cronograma from "../views/Cronograma.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Sobre",
    name: "Sobre",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Sobre.vue"),
  },
  {
    path: "/cronograma",
    name: "Cronograma",
    component: Cronograma,
  },
  {
    path: "/contato",
    name: "Contato",
    component: Contato,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
