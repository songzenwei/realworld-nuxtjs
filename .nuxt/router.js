import Vue from "vue";
import Router from "vue-router";
import { normalizeURL, decode } from "ufo";
import { interopDefault } from "./utils";
import scrollBehavior from "./router.scrollBehavior.js";

const _4215357e = () =>
  interopDefault(import("../pages/layout" /* webpackChunkName: "" */));
const _17860e94 = () =>
  interopDefault(import("../pages/home" /* webpackChunkName: "" */));
const _d8cb331c = () =>
  interopDefault(import("../pages/login" /* webpackChunkName: "" */));
const _207d3b1c = () =>
  interopDefault(import("../pages/profile" /* webpackChunkName: "" */));
const _ccaa070c = () =>
  interopDefault(import("../pages/settings" /* webpackChunkName: "" */));
const _59b2e8f8 = () =>
  interopDefault(import("../pages/editor" /* webpackChunkName: "" */));
const _52e8b482 = () =>
  interopDefault(import("../pages/article" /* webpackChunkName: "" */));

const emptyFn = () => {};

Vue.use(Router);

export const routerOptions = {
  mode: "history",
  base: "/",
  linkActiveClass: "active",
  linkExactActiveClass: "nuxt-link-exact-active",
  scrollBehavior,

  routes: [
    {
      path: "/",
      component: _4215357e,
      children: [
        {
          path: "",
          component: _17860e94,
          name: "home",
        },
        {
          path: "/login",
          component: _d8cb331c,
          name: "login",
        },
        {
          path: "/register",
          component: _d8cb331c,
          name: "register",
        },
        {
          path: "/profile/:username",
          component: _207d3b1c,
          name: "profile",
        },
        {
          path: "/settings",
          component: _ccaa070c,
          name: "settings",
        },
        {
          path: "/editor",
          component: _59b2e8f8,
          name: "editor",
        },
        {
          path: "/article/:slug",
          component: _52e8b482,
          name: "article",
        },
      ],
    },
  ],

  fallback: false,
};

export function createRouter(ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base;
  const router = new Router({ ...routerOptions, base });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === "string") {
      to = normalizeURL(to);
    }
    return resolve(to, current, append);
  };

  return router;
}
