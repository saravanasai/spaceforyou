import { computed, reactive, toRefs } from "vue";
import { defineStore } from "pinia";
import { getCookie, removeCookie, setCookie } from "@/service/cookieService";
import httpService from "@/service/httpService";


export const authStore = defineStore("auth", () => {
  const store = reactive({
    email: "",
    name:"",
    password: "",
    isAuthenticated: false,
    isProcessing : false ,
    userInfo: {} as userInfo,
    token: "",
  });

  const setuserInfo = (info: userInfo) => {
    store.userInfo = info;
    store.email = info.email;
    store.name = info.name;
    store.isAuthenticated = true;
    localStorage.setItem("user", JSON.stringify(info));
  };

  const resetUserInfo = () => {
   
    store.email = "";
    store.name = "";
 
  };
  

  const updateProfileInfo = () => {

    store.isProcessing = true;
    return httpService.put("/auth/profile", {name:store.name,email:store.email});
  }



  const changeProfilePassword = (data : userPasswordChangeData) => {

    store.isProcessing = true;
    return httpService.put("/auth/profile-password-update",data);
  }

  const checkAuthOnServerSide = () => {
    if (!getCookie("token")) {
      httpService
        .get("/auth/is-authenticated")
        .then((e: any) => {
          if (e.status === 200) {
            setCookie("token", e.data.token);
            setuserInfo(e.data.data);
          }
        })
        .catch((err) => {
          removeCookie("token");
        });
    } else {
      getUserInfo();
    }
  };

  const getAccessToken = () => {
    return store.token ? store.token : getCookie("token");
  };

  const getUserInfo = () => {
    let info: string | any = localStorage.getItem("user");
    let userData: userInfo = JSON.parse(info);
    setuserInfo(userData);
  };

  return {
    ...toRefs(store),
    setuserInfo,
    resetUserInfo,
    getAccessToken,
    updateProfileInfo,
    changeProfilePassword,
    checkAuthOnServerSide,
  };
});

export interface userInfo {
  name: string;
  email: string;
  available_app_count: null | number;
}

export interface userPasswordChangeData {
  oldPassword: string;
  newPassword: string;
  confrimPassword: string;
  
}
