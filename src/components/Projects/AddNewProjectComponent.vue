<template>
  <form>
    <div class="mb-4">
      <label class="block text-blue-300 py-2 font-bold mb-2" for="emailaddress">
        Create New Project
      </label>
      <input
        class="shadow appearance-none border rounded w-full mb-2 p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
        id="project_name"
        type="text"
        v-model="projectName"
        placeholder="my-todo-app"
      />
      <select
        class="shadow appearance-none border mb-2 rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
        name="project_app_type"
        id="project_app_type"
        v-model="projectType"
      >
        <option value="">Please choose</option>
        <template v-for="types in appTypes" :key="types.id">
          <option :value="types.id">{{ types.name }}</option>
        </template>
      </select>
      <input
        class="shadow appearance-none border rounded w-full mb-2 p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
        id="project_name"
        type="text"
        v-model="description"
        placeholder="description"
      />
    </div>

    <div class="flex items-center justify-end pt-4">
      <button
        @click="handleCreateProject"
        class="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
        type="button"
      >
        Create
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { authStore } from "@/stores/authStore";
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import httpService from "@/service/httpService.js";
import { notify } from "@kyvg/vue3-notification";

export default defineComponent({
  name: "AddNewProjectComponent",
  setup() {
    const store = authStore();

    const state = reactive({
      projectName: "",
      projectType: "",
      description: "",
      appTypes: [] as appTypeInterface[],
      projectList: [] as projectDataInterface[],
    });

    interface appTypeInterface {
      id: number;
      name: string;
      description: string;
    }

    interface projectDataInterface {
      id: number;
      name: string;
      description: string;
      application_key: string;
      created_at: string;
      app_info: appTypeInterface;
    }

    const handleCreateProject = () => {
      httpService
        .post("/projects", {
          name: state.projectName,
          description: state.description,
          app_type_id: state.projectType,
        })
        .then((e: any) => {
          if (e.status === 201) {
            state.projectName = "";
            state.description = "";
            state.projectType = "";

            notify({
              title: "New Project Created",
              type: "success",
              text: "Build Something!",
            });

          }
        }).catch(e=>{
            if(e.response.status===422)
          {
            console.log(e);
            
            notify({
              title: e.response.data.message,
              type: "warn",
              text: "Opps!",
            });
          }
        });
    };

    const getAppTypeList = () => {
      httpService.get("/app-types").then((e: any) => {
        if (e.status === 200) {
          state.appTypes = e.data.data as appTypeInterface[];
        }
      });
    };

    onMounted(() => {
      getAppTypeList();
    });

    return { handleCreateProject, ...toRefs(state) };
  },
});
</script>
