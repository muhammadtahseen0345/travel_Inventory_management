<template>
  <v-app class="blue-lighten">
    <app-navigation></app-navigation>
    <v-content class="mx-4 my-2">
      
      
    
       
      <router-view></router-view>
      
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  data() {
    return {
      //
    };
  },
  components: {
    appNavigation: Navbar,
   
  }
};
</script>
