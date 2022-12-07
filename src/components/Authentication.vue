<template>
  <form
    class="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
  >
    <div class="mb-4">
      <label class="block text-blue-300 py-2 font-bold mb-2" for="emailaddress">
        Start Building Something .....
      </label>
      <input
        class="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
        id="emailaddress"
        type="text"
        v-model="email"
        placeholder="you@zerocode.com"
      />
      <input
        class="mt-2 shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
        id="emailaddress"
        type="password"
        v-model="password"
        placeholder="password"
      />
    </div>

    <div class="flex items-center justify-between pt-4">
      <button
        @click="handleRegister"
        class="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
        type="button"
      >
        Sign Up
      </button>
      <button
        @click="handleLogin"
        class="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
        type="button"
      >
        Log In
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
