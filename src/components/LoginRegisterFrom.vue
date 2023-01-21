<template>
  <form class="search">
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
        @disable="isProcessing"
        class="btn btn-sm btn-primary mx-2"
      >
        Register
      </button>
      <button
        @click="handleLogin"
        type="button"
        @disable="isProcessing"
        class="btn btn-sm btn-primary"
      >
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

    const { email, password, isProcessing } = storeToRefs(store);
    const router = useRouter();
    const pushToDashboard = () => {
      router.push({ name: "dashboard" });
    };

    const resetFrom = () => {
      email.value = "";
      password.value = "";
    };

    const handleLogin = () => {
      store.isProcessing = true;

      notify({
        title: "Processing",
        type: "info",
        text: "Please wait kindly!",
      });

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
              type: "success",
              text: "You have been logged in!",
            });
            resetFrom();
            store.isProcessing = false;
            pushToDashboard();
          }
        })
        .catch((e) => {
          if (e.response.status === 422) {
            notify({
              title: e.response.data.message,
              type: "warn",
              text: "Opps!",
            });
          }
        });
    };

    const handleRegister = () => {
      store.isProcessing = true;

      notify({
        title: "Processing",
        type: "info",
        text: "Please wait kindly!",
      });

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
              type: "success",
              text: "You have been Registered!",
            });
            resetFrom();
            store.isProcessing = false;
            pushToDashboard();
          }
        })
        .catch((e) => {
          if (e.response.status === 422) {
            notify({
              title: e.response.data.message,
              type: "warn",
              text: "Opps!",
            });
          }
        });
    };

    return { email, password, handleLogin, handleRegister, isProcessing };
  },
});
</script>
