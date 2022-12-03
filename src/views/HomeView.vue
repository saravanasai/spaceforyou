<template>
  <!--Left Col-->
  <HeroSection />
  <!--Right Col-->
  <HeroImage v-if="!isAuthenticated" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeroSection from "@/components/HeroSection.vue";
import HeroImage from "@/components/HeroImage.vue";
import { authStore } from "@/stores/authStore";
import { storeToRefs } from "pinia";
export default defineComponent({
  name: "HomeView",
  components: { HeroSection, HeroImage },
  setup() {
    const store = authStore();

    const { isAuthenticated } = storeToRefs(store);

    return { isAuthenticated };
  },
});
</script>
