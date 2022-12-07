<template>
  <!--Left Col-->
  <HeroSection  />
  <!--Right Col-->
  <HeroImage v-if="!isAuthenticated" />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import HeroSection from "@/components/HeroSection.vue";
import HeroImage from "@/components/HeroImage.vue";
import { authStore } from "@/stores/authStore";
import { storeToRefs } from "pinia";
import httpService from "@/service/httpService";
import { setCookie } from "@/service/cookieService";
export default defineComponent({
  name: "HomeView",
  components: { HeroSection, HeroImage },
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

    return { isAuthenticated };
  },
});
</script>
