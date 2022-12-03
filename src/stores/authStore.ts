import { ref, computed, reactive, toRefs } from "vue";
import { defineStore } from "pinia";

export const authStore = defineStore("auth", () => {
  const store = reactive({
    email: "user@gmail.com",
    password: "123456",
    isAuthenticated: false,
  });

  const setToken = (token: string) => {
    localStorage.setItem("token", token);
  };

  return { ...toRefs(store), setToken };
});
