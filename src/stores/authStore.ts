import { computed, reactive, toRefs } from "vue";
import { defineStore } from "pinia";
import {getCookie} from "@/service/cookieService"

export const authStore = defineStore("auth", () => {
  const store = reactive({
    email: "user@gmail.com",
    password: "123456",
    isAuthenticated: false,
    userInfo: {} as userInfo,
    token : ""
  });

  const setuserInfo = (info: userInfo) => {
    store.userInfo = info;
    store.isAuthenticated = true;
  };

  const getAccessToken = () => {

    return  store.token ? store.token :  getCookie('token')
  }
  

  return { ...toRefs(store), setuserInfo, getAccessToken };
});

interface userInfo {
  name: string;
  email: string;
  available_app_count: null | number;
}
