<template>
  <div class="w-full md:w-full lg:w-full pl-5 pr-5 mb-2 lg:pl-2 lg:pr-2">
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
    </div>
  </div>
</template>

<script lang="ts">
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
  setup(props) {},
});
</script>
