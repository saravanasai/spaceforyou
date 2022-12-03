<template>
  <div class="w-full container mx-auto">
    <div class="w-full flex items-center justify-between">
      <a
        class="m-3 flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
        href="#"
      >
        Zero<span
          class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500"
          >Code</span
        >
      </a>

      <div class="flex w-1/2 justify-end content-center">
        <a
          class="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
          type="button"
        >
          GitHub
        </a>
        <button
          v-if="isAuthenticated"
          class="bg-gradient-to-r ml-2 from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
          type="button"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { authStore } from "@/stores/authStore";
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
export default defineComponent({
  name: "Nav",
  setup() {

    const store = authStore()


    const {isAuthenticated} = storeToRefs(store)

    return {isAuthenticated}
  },
});
</script>
