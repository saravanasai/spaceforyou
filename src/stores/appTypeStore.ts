import { computed, reactive, toRefs } from "vue";
import { defineStore } from "pinia";
import httpService from "@/service/httpService";
import type {
  AppTypeInterface,
  ProjectDataInterface,
  ProjectRequestDataInterface,
} from "@/contracts/ProjectContract";
import { notify } from "@kyvg/vue3-notification";

export const appTypeStore = defineStore("appType", () => {
  const store = reactive({
    appTypes: [] as AppTypeInterface[],
  });

  const loadAppTypeList = async () => {
    httpService.get("/app-types").then((e: any) => {
      if (e.status === 200) {
        store.appTypes = e.data.data as AppTypeInterface[];
      }
    });
  };

  let appTypeList = computed(() => {
    return store.appTypes;
  });

  return {
    ...toRefs(store),
    loadAppTypeList,
    appTypeList,
  };
});
