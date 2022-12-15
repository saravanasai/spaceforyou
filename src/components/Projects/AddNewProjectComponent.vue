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
        <template v-for="types in appStore.appTypeList" :key="types.id">
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
        @click="handleCreate"
        class="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
        type="button"
      >
        Create
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import httpService from "@/service/httpService.js";
import { notify } from "@kyvg/vue3-notification";
import type {
  AppTypeInterface,
  ProjectRequestDataInterface,
} from "@/contracts/ProjectContract";
import { projectStore } from "@/stores/projectStore";
import { appTypeStore } from "@/stores/appTypeStore";

export default defineComponent({
  name: "AddNewProjectComponent",
  setup() {
    const store = projectStore();
    const appStore = appTypeStore();
    const state = reactive({
      projectName: "",
      projectType: 0,
      description: "",
    });

    const handleCreate = () => {
      let data: ProjectRequestDataInterface = {
        name: state.projectName,
        description: state.description,
        app_type_id: Number(state.projectType),
      };

      store
        .handleCreateProject(data)
        .then((e: any) => {
          if (e.status === 201) {
            state.projectName = "";
            state.description = "";
            state.projectType = 0;
            store.loadProjectList();
            notify({
              title: "New Project Created",
              type: "success",
              text: "Build Something!",
            });
          }
        })
        .catch((e) => {
          if (e.response.status === 422) {
            console.log(e);

            notify({
              title: e.response.data.message,
              type: "warn",
              text: "Opps!",
            });
          }
        });
    };

    onMounted(() => {
      if (Object.keys(appStore.appTypeList).length == 0)
        appStore.loadAppTypeList();
    });

    return { handleCreate, ...toRefs(state), appStore };
  },
});
</script>
