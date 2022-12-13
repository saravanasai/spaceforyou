<template>
  <!--Left Col-->
  <div
    class="h-full bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-6 pt-1 pb-6 mb-1"
  >
    <div class="flex w-full justify-around my-3">
      <div class="w-2/5 xl:w-2/5 p-2 overflow-hidden"> 
        <div class="container ml-auto mr-auto flex flex-wrap items-start">
          <template v-for="project in projectList" :key="project.id">
            <ProjectListCard
              :id="project.id"
              :name="project.name"
              :description="project.description"
              :created_at="project.created_at"
              :app-description="project.app_info.description"
              :application_key="project.application_key"
              :app-name="project.app_info.name"
            />
          </template>
        </div>
      </div>
      <div class="w-1/5 xl:w-2/5 p-2 overflow-hidden">
        <AddNewProjectComponent />
      </div>
    </div>
  </div>
  <!-- <HeroSection  /> -->
  <!--Right Col-->
  <!-- <HeroImage  /> -->
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import HeroSection from "@/components/HeroSection.vue";
import HeroImage from "@/components/HeroImage.vue";
import AddNewProjectComponent from "@/components/Projects/AddNewProjectComponent.vue";
import ProjectListCard from "@/components/Projects/ProjectListCard.vue";
import httpService from "@/service/httpService";
import { notify } from "@kyvg/vue3-notification";
export default defineComponent({
  name: "HomeView",
  components: {
    HeroSection,
    HeroImage,
    AddNewProjectComponent,
    ProjectListCard,
  },
  setup() {
    const state = reactive({
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

    const getProjectList = () => {
      httpService
        .get("/projects")
        .then((e: any) => {
          state.projectList = e.data.data as projectDataInterface[];
        })
        .catch((e) => {
          notify({
            title: e.response.data.message,
            type: "warn",
            text: "Opps!",
          });
        });
    };

    onMounted(() => {
      getProjectList();
    });

    return { ...toRefs(state) };
  },
});
</script>
