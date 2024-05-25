// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Catalogs from "../views/catalog/Catalogs.vue";
import Catalog from "../views/catalog/forms/Catalog.vue";
import CatalogDetail from "../views/catalog/options/Detail.vue";
import CatalogRegister from "../views/catalog/options/Register.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/catalog/",
    name: "Catalogs",
    component: Catalogs,
  },
  {
    path: "/catalog/forms/",
    name: "Catalog",
    component: Catalog,
  },
  {
    path: "/catalog/options/Detail",
    name: "Detail",
    component: CatalogDetail,
  },
  {
    path: "/catalog/options/Register",
    name: "Register",
    component: CatalogRegister,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
