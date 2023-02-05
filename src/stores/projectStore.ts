import { computed, reactive, toRefs } from "vue";
import { defineStore } from "pinia";
import httpService from "@/service/httpService";
import type {
  ProjectDataInterface,
  ProjectRequestDataInterface,
} from "@/contracts/ProjectContract";
import { notify } from "@kyvg/vue3-notification";

export const projectStore = defineStore("project", () => {
  const store = reactive({
    projectList: [] as ProjectDataInterface[],
    isLoadingProjects: false as boolean,
    isCreatingProject: false as boolean,
  });

  // get project list
  const loadProjectList = () => {
    store.isLoadingProjects = true;
    httpService
      .get("/projects")
      .then((e: any) => {
        store.projectList = e.data.data as ProjectDataInterface[];
        store.isLoadingProjects = false;
      })
      .catch((e) => {
        notify({
          title: e.response.data.message,
          type: "warn",
          text: "Opps!",
        });
      });
  };

  //create project list
  const handleCreateProject = async (data: ProjectRequestDataInterface) => {
    store.isCreatingProject = true;
    return httpService.post("/projects", data);
  };

  const handleProjectDelete = (id: number) => {
    httpService
      .delete("/projects/" + id)
      .then((e: any) => {
        notify({
          title: "Deleted Your Project",
          type: "success",
          text: "Done!",
        });

        loadProjectList();
      })
      .catch((e) => {
        notify({
          title: e.response.data.message,
          type: "warn",
          text: "Opps!",
        });
      });
  };

  const emptyProjectList = () => {
    store.projectList = [];
  };

  //computed properties

  let projectsList = computed(() => {
    return store.projectList;
  });

  return {
    ...toRefs(store),
    loadProjectList,
    handleProjectDelete,
    handleCreateProject,
    emptyProjectList,
    projectsList,
  };
});
