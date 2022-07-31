import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: "/HomeView",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/",
    redirect: '/HomeView',
  },
  {
    path: "/list",
    name: "List",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "list" */ "../views/List.vue"),
  },
   {
    path: "/cart",
    name: "Cart",
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
  },
   {
    path: "/my",
    name: "My",
    component: () =>
      import(/* webpackChunkName: "my" */ "../views/My.vue"),
  },
  {
    path: "/search",
    name: "Search",
    children:[
      {
        path:"",
        name:"index",
        component:() =>
          import(/* webpackChunkName: "search-index" */"../views/search/Search-index.vue"),
      },
      {
        path:"list",
        name:"list",
        component:() =>
           import(/* webpackChunkName: "search-list" */"../views/search/Search-list.vue")
      }
    ],
    component: () =>
      import(/* webpackChunkName: "search" */"../views/Search.vue")
  },
   {
    path: "/detail",
    name: "Detail",
    component: () =>
      import(/* webpackChunkName: "detail" */"../views/Detail.vue"),
  },
   {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */"../views/login/Login.vue"),
  },
     {
    path: "/userLogin",
    name: "UserLogin",
    component: () =>
      import(/* webpackChunkName: "userlogin" */"../views/login/UserLogin.vue"),
  }
  ],
});

export default router;
// module.exports = router;
