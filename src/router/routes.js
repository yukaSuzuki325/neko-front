import MainLayout from "layouts/MainLayout.vue";

const routes = [
  { path: "/", name: "home", component: MainLayout },
  { path: "/news", name: "news", component: MainLayout },
  { path: "/shows", name: "shows", component: MainLayout },
  { path: "/videos", name: "videos", component: MainLayout },
  { path: "/discography", name: "discography", component: MainLayout },
  { path: "/merch", name: "merch", component: MainLayout },
  { path: "/about", name: "about", component: MainLayout },
  { path: "/contact", name: "contact", component: MainLayout },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"), // Keep the error page
  },
];

export default routes;
