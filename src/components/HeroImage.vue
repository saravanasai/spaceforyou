<template>
  <div class="w-full xl:w-2/5 p-12 overflow-hidden">
    <Authentication />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Authentication from "./Authentication.vue"

export default defineComponent({
  name: "HeroImage",
  components:{Authentication},
  setup() {},
});
</script>
