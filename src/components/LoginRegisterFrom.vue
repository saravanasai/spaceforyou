<template>
  <form class="search" >
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="fname">Email</label>
            <input
              type="text"
              v-model="email"
              class="form-control"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div class="form-group col-md-6">
            <label for="lname">Password</label>
            <input
            v-model="password"
              type="password"
              class="form-control"
              id="password"
              name="password"
              placeholder="Your Password"
            />
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <button 
          @click="handleRegister"
          type="button" 
          class="btn btn-sm btn-primary mx-2">
            Register
          </button>
          <button 
          @click="handleLogin"
          type="button" 
          class="btn btn-sm btn-primary">
            Login
          </button>
        </div>
      </form>
</template>

<script lang="ts">
import { authStore } from "@/stores/authStore";
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import { setCookie } from "@/service/cookieService.js";
import httpService from "@/service/httpService.js";
import { useRouter } from "vue-router";
import { notify } from "@kyvg/vue3-notification";
export default defineComponent({
  name: "Authentication",
  setup() {
    const store = authStore();

    const { email, password } = storeToRefs(store);
    const router = useRouter();
    const pushToDashboard = () => {
      router.push({ name: "dashboard" });
    };

    const handleLogin = () => {
      httpService
        .post("/auth/login", {
          email: email.value,
          password: password.value,
        })
        .then((e: any) => {
          if (e.status === 200) {
            setCookie("token", e.data.token);
            store.setuserInfo(e.data.data);
            notify({
              title: "Authorization",
              type:"success",
              text: "You have been logged in!",
            });
            pushToDashboard();
          }
        });
    };

    const handleRegister = () => {
      httpService
        .post("/auth/resgiter", {
          email: email.value,
          password: password.value,
        })
        .then((e: any) => {
          if (e.status === 201) {
            setCookie("token", e.data.token);
            store.setuserInfo(e.data.data);
            notify({
              title: "Authorization",
              type:"success",
              text: "You have been Registered!",
            });
            pushToDashboard();
          }
        });
    };

    return { email, password, handleLogin, handleRegister };
  },
});
</script>
