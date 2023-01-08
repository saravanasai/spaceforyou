<template>
  <div class="row justify-content-between align-items-center">
    <div class="col-lg-7 text-center text-lg-left">
      <h1 class="mb-4">Start Building Something Today</h1>
      <p class="mb-4">
        GoDocs is a open source free api to build your own application without
        your own backend.
      </p>
      <template v-if="!isAuthenticated">
      <LoginRegisterFrom  />
    </template>
    </div>
    <div class="col-lg-4 d-lg-block d-none">
      <img :src="BannerImage" alt="illustration" class="img-fluid" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import BannerImage from "../assets/images/banner.jpg"
import { authStore } from "@/stores/authStore";
import { storeToRefs } from "pinia";
import httpService from "@/service/httpService";
import { setCookie } from "@/service/cookieService";
import LoginRegisterFrom from "@/components/LoginRegisterFrom.vue";
export default defineComponent({
  name: "HomeView",
  components: {LoginRegisterFrom },
  setup() {
    const store = authStore();

    const { isAuthenticated } = storeToRefs(store);

    const checkIfUserAuthenticated = () => {
      httpService.get("/auth/is-authenticated").then((e: any) => {
        if (e.status === 200) {
          setCookie("token", e.data.token);
          store.setuserInfo(e.data.data);
        }
      });

      onMounted(() => {
        console.log("from app");

        checkIfUserAuthenticated();
      });
    };

    return { isAuthenticated , BannerImage };
  },
});
</script>
