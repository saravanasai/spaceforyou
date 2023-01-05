<template>
  <div class="col-lg-12 col-md-12 col-sm-12 mb-2">
    <div class="card">
      <div class="card-body">
        <form class="search">
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="fname">Project Name</label>
              <input
                v-model="projectName"
                type="text"
                class="form-control"
                id="project-name"
                name="project_name"
                placeholder="Your Project Name"
                required
              />
            </div>
            <div class="form-group col-md-4">
              <label for="roject-description">Description</label>
              <input
                v-model="description"
                type="text"
                class="form-control"
                id="project-description"
                name="project_description"
                placeholder="Eg: my first project"
              />
            </div>
            <div class="form-group col-md-4">
              <label for="application_type">Choose Application</label>
              <select
                id="application_type"
                class="form-control custom-select"
                name="application_type"
                v-model="projectType"
                required
              >
                <option disabled value="0">Choose Your application</option>
                <template
                  v-for="apptype in appStore.appTypeList"
                  :key="apptype.id"
                >
                  <option :value="apptype.id">{{ apptype.name }}</option>
                </template>
              </select>
            </div>
          </div>

          <div class="d-flex justify-content-end">
            <button
              @click="handleCreate"
              type="button"
              class="btn btn-sm btn-primary"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
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
