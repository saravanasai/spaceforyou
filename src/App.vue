<template>
 
    
    <div
      class="h-full leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed"
      style="background-image: url('header.png');height: 100vh;"
    >
    <notifications />
      <!--Nav-->
      <Nav> </Nav>
      <!--Main-->
      <div
        class="container pt-2 md:pt-5 mx-auto flex flex-wrap flex-col md:flex-row items-center"
      >
        <router-view />
        <!--Footer-->
        <Footer> </Footer>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted } from "vue";
import Nav from "@/layouts/Nav.vue";
import Footer from "@/layouts/Footer.vue";
import { authStore } from "./stores/authStore";
import { storeToRefs } from "pinia";
import httpService from "./service/httpService";
import { setCookie } from "./service/cookieService";
export default defineComponent({
  components: { Nav, Footer },
  setup() {
    const store = authStore();
  
  },
});
</script>
