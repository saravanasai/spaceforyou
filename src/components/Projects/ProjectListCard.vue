<template>
  <div class="col-lg-6 col-md-6 col-sm-6 mb-4">
    <div class="card">
      <div class="card-body">
        <i class="card-icon ti-panel mb-4"></i>
        <h5 class="card-title h6">Project Name : {{ $props.name }}</h5>

        <p class="card-title h6">Application Name : {{ $props.appName }}</p>
        <span></span>
        <p class="card-text mb-2">
          <strong>Description :</strong>
          {{ $props.description ?? "Start Build Your Application" }}
        </p>
        <p class="card-text mb-1">
          <strong>App Key :</strong> {{ $props.application_key }}
        </p>
        <p class="card-text">
          <strong>Created On :</strong> {{ $props.created_at }}
        </p>
      </div>
      <div class="d-flex justify-content-end mb-3 mr-3">
        <router-link
          :to="{ name: 'app-docs' }"
          class="btn btn-sm btn-success ml-lg-4"
        >
          Doc's
        </router-link>
        <button
          @click="handleDelete($props.id)"
          type="button"
          class="btn btn-sm btn-primary ml-lg-4"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
  <!-- <div class="w-full md:w-full lg:w-full pl-5 pr-5 mb-1 lg:pl-2 lg:pr-2">
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
        <template v-if="$props.appName === 'Contact Application'">
          <router-link
            :to="{ name: 'app-docs', params: { type: 'contact' } }"
            class="bg-gradient-to-r from-green-800 to-green-500 hover:from-green-900 hover:to-green-900 text-white font-bold py-1 px-2 mx-2 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Doc's
          </router-link>
        </template>

        <button
          @click="handleDelete($props.id)"
          class="bg-gradient-to-r from-red-800 to-red-500 hover:from-red-900 hover:to-red-900 text-white font-bold py-1 px-2 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
          type="button"
        >
          Delete
        </button>
      </div>
    </div>
  </div> -->
</template>

<script lang="ts">
import { projectStore } from "@/stores/projectStore";
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
