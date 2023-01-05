<template>
  <h3 class="">Docs</h3>
  <pre>
        <code class="language-js">
            // code here for example
            function hello(){
                console.log("")
            } 
        </code>
</pre>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
export default defineComponent({
  components: { Prism },
  setup() {},
});
</script>
