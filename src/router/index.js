import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "../views/auth/SignIn.vue";
import Dashboard from "../views/Dashboard.vue";
import Opportunities from "../views/Opportunities.vue";
import Routes from "../views/Routes.vue";
import Prospects from "../views/Prospects.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "signin",
    component: SignIn,
    beforeEnter: (to, from, next) => {
      if (store.getters["auth/authenticated"]) {
        return next({
          name: "dashboard",
        });
      }
      next();
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "signin",
        });
      }
      next();
    },
  },
  {
    path: "/opportunities",
    name: "opportunities",
    component: Opportunities,
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "signin",
        });
      }
      next();
    },
  },
  {
    path: "/routes",
    name: "routes",
    component: Routes,
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "signin",
        });
      }
      next();
    },
  },
  {
    path: "/prospects",
    name: "prospects",
    component: Prospects,
    beforeEnter: (to, from, next) => {
      if (!store.getters["auth/authenticated"]) {
        return next({
          name: "signin",
        });
      }
      next();
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
