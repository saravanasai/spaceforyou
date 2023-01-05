<template>
  <footer>
    <div class="container">
      <div class="row align-items-center border-bottom py-5">
        <div class="col-lg-4">
          <ul class="list-inline footer-menu text-center text-lg-left">
            <li class="list-inline-item">
              <a arget="_blank" href="https://github.com/saravanasai"
                >Changelog</a
              >
            </li>
            <li class="list-inline-item">
              <a href="">contact: +91 9025807876</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 text-center mb-4 mb-lg-0">
          <router-link :to="{ name: 'home' }" class="navbar-brand">
            <img
              class="img-fluid"
              src="images/logo.png"
              alt="ZeroCode Documentation"
            />
          </router-link>
        </div>
        <div class="col-lg-4">
          <ul class="list-inline social-icons text-lg-right text-center">
            <li class="list-inline-item">
              <a target="_blank" href="https://twitter.com/Sai_Saravana_"
                ><i class="ti-twitter-alt"></i
              ></a>
            </li>
            <li class="list-inline-item">
              <a target="_blank" href="https://github.com/saravanasai"
                ><i class="ti-github"></i
              ></a>
            </li>
            <li class="list-inline-item">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/saravanathiyagarajan1412/"
                ><i class="ti-linkedin"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="py-4 text-center">
        <small class="text-light"
          >Copyright © 2023
          <a href="https://github.com/saravanasai">ZeroCode</a></small
        >
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  setup() {},
});
</script>
