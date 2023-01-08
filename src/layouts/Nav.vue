<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <router-link class="navbar-brand" :to="{ name: 'home' }"
      ><img class="img-fluid" :src="Logo" alt="godocs"
    /></router-link>
    <button
      class="navbar-toggler border-0"
      type="button"
      data-toggle="collapse"
      data-target="#navigation"
    >
      <i class="ti-align-right h4 text-dark"></i>
    </button>
    <div class="collapse navbar-collapse text-center" id="navigation">
      <ul class="navbar-nav mx-auto align-items-center">
        <!-- <li class="nav-item">
          <a class="nav-link" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="list.html">Inner Page</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="search.html">Search Page</a>
        </li> -->
      </ul>
      <template v-if="isAuthenticated">
        <router-link
          :to="{ name: 'dashboard' }"
          class="btn btn-sm btn-outline-primary ml-lg-4"
          >Dashboard</router-link
        >
        <button
          @click="handleLogout"
          type="button"
          class="btn btn-sm btn-primary ml-lg-4"
        >
          Logout
        </button>
      </template>
    </div>
  </nav>
</template>

<script lang="ts">
import { authStore } from "@/stores/authStore";
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import { removeCookie } from "@/service/cookieService.js";
import httpService from "@/service/httpService.js";
import { useRouter } from "vue-router";
import { notify } from "@kyvg/vue3-notification";
import Logo from "../assets/images/logo.png";
export default defineComponent({
  name: "Nav",
  setup() {
    const store = authStore();
    const router = useRouter();

    const pushToHomePage = () => {
      router.push({ name: "home" });
    };

    const { isAuthenticated } = storeToRefs(store);

    const handleLogout = () => {
      httpService
        .post("/auth/logout")
        .then((e: any) => {
          if (e.status === 200) {
            removeCookie("token");
            store.isAuthenticated = false;
            notify({
              title: "Logged Out",
              type: "warn",
              text: "You have been logged out!",
            });
            pushToHomePage();
          }
        })
        .catch((e) => {
          console.log("erro on token");
          removeCookie("token");
        });
    };

    return { isAuthenticated, handleLogout , Logo };
  },
});
</script>
