<template>
  <div class="w-full md:w-full lg:w-full pl-5 pr-5 mb-1 lg:pl-2 lg:pr-2">
    <div class="rounded-lg p-3 bg-purple-700 flex flex-col">
      <div>
        <h6 class="text-white text-1xl font-bold leading-none">
          Project Name : {{ $props.name }}
        </h6>
        <span class="text-xs text-gray-400 leading-none"
          >{{ $props.description }}.</span
        >
      </div>
      <div class="flex items-center">
        <div class="text-md text-white font-light">
          <p>Application Name : {{ $props.appName }}</p>
          <span class="text-xs text-gray-400 leading-none"
            >{{ $props.appDescription }}.</span
          >
        </div>
      </div>
      <div class="flex items-center">
        <div class="text-md text-white font-light bg-black-200">
          Token : {{ $props.application_key }}
        </div>
      </div>
      <div class="flex items-center justify-end pt-2">
        <button
          @click="handleDelete($props.id)"
          class="bg-gradient-to-r from-red-800 to-red-500 hover:from-red-900 hover:to-red-900 text-white font-bold py-1 px-2 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
          type="button"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import httpService from "@/service/httpService";
import { projectStore } from "@/stores/projectStore";
import { notify } from "@kyvg/vue3-notification";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: Number,
    name: String,
    description: String,
    application_key: String,
    created_at: String,
    appName: String,
    appDescription: String,
  },
  setup(props) {
    const store = projectStore();

    const handleDelete = (id: any) => {
      store.handleProjectDelete(id);
    };

    return { handleDelete };
  },
});
</script>
