<template>
  <div>
    <h5 class="section-title">Create New Project</h5>
    <div class="row">
      <AddNewProjectComponent />
    </div>
    <h5 class="section-title mt-3">Your Projects</h5>
    <div class="row">
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
  <!-- <div class="w-1/5 xl:w-2/5 p-2 overflow-hidden">
        <AddNewProjectComponent />
      </div> -->
  <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import HeroSection from "@/components/HeroSection.vue";
import AddNewProjectComponent from "@/components/Projects/AddNewProjectComponent.vue";
import ProjectListCard from "@/components/Projects/ProjectListCard.vue";
import { projectStore } from "@/stores/projectStore";
export default defineComponent({
  name: "HomeView",
  components: {
    HeroSection,
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
