<template>
  <notifications />
  <!-- header section  -->
  <Header />
  <!-- banner -->
  <section class="section pb-0">
    <div class="container">
      <router-view />
    </div>
  </section>
  <!-- /banner -->

  <!-- topics -->
  <!-- space for future extention  -->
  <!-- /topics -->

  <!-- faq -->

  <!-- /faq -->

  <!-- sponser section -->
  <section class="section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 text-center d-lg-block d-none">
          <img src="images/cta-illustration.jpg" class="img-fluid" alt="" />
        </div>
        <div class="col-lg-8 text-lg-left text-center">
          <h2 class="mb-3">What is GoDoc's Api?</h2>
          <p>
              GoDocsApi can be used with any type of front-end or mobile application project that need backend API 's , 
              Curently We have 2 applications 
                <ul>
                  <li>Todo Application</li>
                  <li>Contact Application</li>
                </ul>
               
             you can use GoDoc's Api works and feel free to enjoy it in your awesome projects! 
          </p>
          <router-link  :to="{name:'app-docs'}" class="btn btn-primary">Explore Doc's</router-link>
        </div>
      </div>
    </div>
  </section>
  <!-- /sponser section -->

  <!-- footer section -->
  <Footer />
  <!-- /footer section -->
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted } from "vue";

import { authStore } from "./stores/authStore";
import { storeToRefs } from "pinia";
import httpService from "./service/httpService";
import { setCookie } from "./service/cookieService";
import Header from "./layouts/Header.vue";
import Footer from "./layouts/Footer.vue";
export default defineComponent({
  setup() {
    const store = authStore();
  },
  components: { Header, Footer },
});
</script>
