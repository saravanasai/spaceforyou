<template>
  <!--Left Col-->
  <div
    class="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-6 pt-1 pb-6 mb-1"
  >
    <div class="flex w-full justify-around my-3">
      <div class="w-2/5 xl:w-2/5 p-5 overflow-hidden">
        <h4>Project Listing</h4>
      
      </div>
      <div class="w-1/5 xl:w-2/5 p-5 overflow-hidden">
        <AddNewProjectComponent />
      </div>
    </div>
  </div>
  <!-- <HeroSection  /> -->
  <!--Right Col-->
  <!-- <HeroImage  /> -->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import HeroSection from "@/components/HeroSection.vue";
import HeroImage from "@/components/HeroImage.vue";
import AddNewProjectComponent from "@/components/Projects/AddNewProjectComponent.vue";
import { authStore } from "@/stores/authStore";
import { storeToRefs } from "pinia";
import httpService from "@/service/httpService";
import { setCookie } from "@/service/cookieService";
export default defineComponent({
  name: "HomeView",
  components: { HeroSection, HeroImage, AddNewProjectComponent },
  setup() {
    const store = authStore();

    const { isAuthenticated } = storeToRefs(store);

    return { isAuthenticated };
  },
});
</script>
