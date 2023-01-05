<template>
  <header class="sticky-top navigation">
    <div class="container">
      <Nav />
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Nav from "./Nav.vue";
export default defineComponent({
  components: { Nav },
  setup() {},
});
</script>
