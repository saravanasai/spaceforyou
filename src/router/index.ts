import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DashboardView from "@/views/DashboardView.vue";
import DocumentView from "@/views/DocumentView.vue";
import { getCookie } from "@/service/cookieService";
import { authStore } from "@/stores/authStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiresAuth: false }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
      meta: { requiresAuth: true }
    },
    {
      path: "/documentation",
      name: "app-docs",
      component: DocumentView,
      meta: { requiresAuth: true }
    }
  ],
});

router.beforeEach((to, from) => {

   const store = authStore()

  store.checkAuthOnServerSide()
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !getCookie('token')) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      name: 'home',
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    }
  }
})

export default router;
