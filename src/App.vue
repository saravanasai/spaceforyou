<template>
  <div class="h-full">
    <notifications />
    <div
      class="h-full leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed"
      style="background-image: url('header.png')"
    >
      <!--Nav-->
      <Nav> </Nav>
      <!--Main-->
      <div
        class="h-full container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center"
      >
        <router-view />
        <!--Footer-->
        <Footer> </Footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Nav from "@/layouts/Nav.vue";
import Footer from "@/layouts/Footer.vue";
export default defineComponent({
  components: { Nav, Footer },
  setup() {
   
  },
});
</script>
