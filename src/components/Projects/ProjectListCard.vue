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
      </div>
      <div class="d-flex justify-content-end mb-3 mr-3">
        <router-link
          :to="{ name: 'app-docs'}"
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
    apptype: Number,
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
