<template>
  <div class="col-md-9 mt-3">
    <h5 class="text-bold h5 mb-3"><span :class="icon"></span> {{ title }}</h5>
    <pre>
        <code class="language-javascript">
        {{ codeBlock }}
        </code>
      </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
    icon: String,
    codeBlock: String,
  },
  setup() {},
});
</script>
