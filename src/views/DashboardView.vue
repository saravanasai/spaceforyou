<template>
  <!--Left Col-->
  <div
    class="h-full bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-6 pt-1 pb-6 mb-1"
  >
    <div class="flex w-full justify-around my-3">
      <div class="w-2/5 xl:w-2/5 p-2 overflow-hidden">
        <div class="container ml-auto mr-auto flex flex-wrap items-start">
          <template v-for="project in store.projectsList" :key="project.id">
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
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import HeroSection from "@/components/HeroSection.vue";
import HeroImage from "@/components/HeroImage.vue";
import AddNewProjectComponent from "@/components/Projects/AddNewProjectComponent.vue";
import ProjectListCard from "@/components/Projects/ProjectListCard.vue";
import { projectStore } from "@/stores/projectStore";
export default defineComponent({
  name: "HomeView",
  components: {
    HeroSection,
    HeroImage,
    AddNewProjectComponent,
    ProjectListCard,
  },
  setup() {
    const store = projectStore();

    onMounted(() => {
      if (Object.keys(store.projectsList).length == 0) {
        store.loadProjectList();
      }
    });

    return { store };
  },
});
</script>
