<template>
  <div class="col-lg-12 col-md-12 col-sm-12 mb-2">
    <div class="card">
      <div class="card-body">
        <form class="search">
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="fname">username</label>
              <input
                v-model="store.name"
                type="text"
                class="form-control"
                id="profile-username"
                name="username"
                placeholder="Your User Name"
                required
              />
            </div>
            <div class="form-group col-md-4">
              <label for="roject-description">Email</label>
              <input
                v-model="store.email"
                type="email"
                class="form-control"
                id="profile-email"
                name="profile_email"
                placeholder="eg:abc@zerocode.com"
              />
            </div>
          </div>

          <div class="d-flex justify-content-end">
            <button
              v-if="!showChangePassword"
              @click="showChangePassword = !showChangePassword"
              :disabled="store.isProcessing"
              type="button"
              class="btn btn-sm btn-primary mr-2"
            >
              {{ showChangePassword ? "Cancel" : "Change Password" }}
            </button>
            <button
              @click="handleProfileInfoUpdate"
              :disabled="store.isProcessing"
              type="button"
              class="btn btn-sm btn-primary"
            >
              Save
            </button>
          </div>
        </form>
        <template v-if="showChangePassword">
          <div class="mt-5">
            <form class="search">
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="roject-description">Old Password</label>
                  <input
                    v-model="oldPassword"
                    type="password"
                    class="form-control"
                    id="profile-old-password"
                    name="profile-old-password"
                    placeholder="Enter old password"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="roject-description">New Password</label>
                  <input
                    v-model="newPassword"
                    type="password"
                    class="form-control"
                    id="profile-new-password"
                    name="profile-new-password"
                    placeholder="Enter new password"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="roject-description">Confrim Password</label>
                  <input
                    v-model="newPasswordConfrim"
                    type="password"
                    class="form-control"
                    id="profile-new-confrim-password"
                    name="profile-new-confrim-password"
                    placeholder="Confrim password"
                  />
                </div>
              </div>
              <div class="d-flex justify-content-end">
                <button
                  @click="showChangePassword = !showChangePassword"
                  :disabled="store.isProcessing"
                  type="button"
                  class="btn btn-sm btn-primary mr-2"
                >
                  {{ showChangePassword ? "Cancel" : "Change Password" }}
                </button>
                <button
                  @click="handleProfilePasswordChange"
                  :disabled="store.isProcessing"
                  type="button"
                  class="btn btn-sm btn-primary"
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import httpService from "@/service/httpService.js";
import { notify } from "@kyvg/vue3-notification";
import { authStore } from "@/stores/authStore";

export default defineComponent({
  name: "ProfileManagemntComponent",
  setup() {
    const store = authStore();

    const state = reactive({
      oldPassword: "",
      newPassword: "",
      newPasswordConfrim: "",
      showChangePassword: false,
    });

    function resetState (){

        state.oldPassword=""
        state.newPassword=""
        state.newPasswordConfrim=""
        state.showChangePassword=false
    }

    const handleProfilePasswordChange = () => {
      let data = {
        oldPassword: state.oldPassword,
        newPassword: state.newPassword,
        confrimPassword: state.newPasswordConfrim,
      };

      store
        .changeProfilePassword(data)
        .then((e: any) => {
          store.isProcessing = false;

          if (e.status === 200) {
            resetState()
            store.setuserInfo(e.data.data);
            notify({
              title: "Password Changed Successfully",
              type: "success",
              text: "Great!",
            });
          }
        })
        .catch((e) => {
          store.isProcessing = false;
          if (e.response.status === 422) {
            notify({
              title: e.response.data.message,
              type: "warn",
              text: "Opps!",
            });
          }
        });
    };

    const handleProfileInfoUpdate = () => {
      store
        .updateProfileInfo()
        .then((e: any) => {
          store.isProcessing = false;

          if (e.status === 200) {
            store.setuserInfo(e.data.data);
            notify({
              title: "Profile Information Updated",
              type: "success",
              text: "Great!",
            });
          }
        })
        .catch((e) => {
          store.isProcessing = false;
          if (e.response.status === 422) {
            notify({
              title: e.response.data.message,
              type: "warn",
              text: "Opps!",
            });
          }
        });
    };

    return {
      handleProfilePasswordChange,
      handleProfileInfoUpdate,
      ...toRefs(state),
      store,
    };
  },
});
</script>
