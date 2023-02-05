<template>
    <div>
      <h5 class="section-title">My Profile</h5>
      <div class="row">
        <ProfileManagemntComponent />
      </div>
      
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted } from "vue";

  import ProfileManagemntComponent from "@/components/Profile/ProfileManagemntComponent.vue";

  export default defineComponent({
    name: "PrifileView",
    components: {
        ProfileManagemntComponent
    },
    setup() {
      
  
    
  
    
    },
  });
  </script>
  