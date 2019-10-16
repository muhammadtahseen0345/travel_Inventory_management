<template>
<div>
<nav>
    
    <v-toolbar app class="secondary">
     
      <v-toolbar-title class="text-uppercase grey--text">
        <v-img  width="170px" height="37" :src="image_src"></v-img>
      </v-toolbar-title>
      
      <v-spacer></v-spacer>
 <v-toolbar-items v-for="link in links" :key="link.text" >       
        <v-btn text class="secondary"  route :to="link.route">{{link.text}}</v-btn>
      </v-toolbar-items>
      
    </v-toolbar>

   <!-- <v-navigation-drawer app v-model="drawer" class="secondary" :width="200">
    <v-list>
        <v-list-tile v-for="link in links" :key="link.text" route :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>-->
    
  </nav>
  
  </div>
</template>


<script>
export default {
  data() {
    return {
      
       image_src: require("../src/assets/logo.png"),
      links: [
        { icon: "dashboard", text: "Home", route: "/" },
        { icon: "folder", text: "Invoices", route: "/projects" },
        { icon: "person", text: "Void/Refund", route: "/team" },
        { icon: "note_add", text: "Debit Note", route: "/dummy" },
        { icon: "note_add", text: "Summary", route: "/dummy" },
       
      ]
    };
  }
};
</script>

