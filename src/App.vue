<template>
  <div
    class="h-full leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed"
    style="background-image: url('header.png')"
  >
    <!--Nav-->
    <Nav> </Nav>
    <!--Main-->
    <div
      class="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <router-view />
      <!--Footer-->
      <Footer> </Footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "@/layouts/Nav.vue";
import Footer from "@/layouts/Footer.vue";
export default defineComponent({
  components: { Nav, Footer },
  setup() {},
});
</script>
