<template>
<div >
 
<nav>

    <v-toolbar app class="secondary">
               <!--  <v-btn
          color="pink"
          dark
          @click.stop="drawer = !drawer"
        >
          My Data
        </v-btn>--><v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>


    <!--  <v-toolbar-title class="text-uppercase grey--text">
        <v-img  width="170px" height="37" :src="image_src"></v-img>
      </v-toolbar-title>
      -->
     
 <v-toolbar-items v-for="link in links" :key="link.text" >       
        <v-btn text class="secondary"  route :to="link.route">{{link.text}}</v-btn>
       
      </v-toolbar-items>
     <v-spacer></v-spacer>
  <v-btn dark  color="pink"  @click="reload()" >
       <span>Sign Out</span>
       <v-icon right>exit_to_app</v-icon>
     </v-btn>

     <div >

      <v-toolbar-title class="grey--text" >
      </v-toolbar-title></div>
       
    </v-toolbar>
  <!--<v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      dark
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Sameed BayG</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          route :to="item.route"
         
        >
          <v-list-item-icon>
            <v-icon >{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content >
            <v-list-item-title >{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>-->
  </nav>
  
  </div>
</template>


<script>

export default {

  
  data() {
    return {
      drawer: null,
      hello:"hi",
       image_src: require("../src/assets/logo.png"),
       items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'My invoices', icon: 'question_answer', },
          { title: 'My void/Refund', icon: 'dashboard' ,route: "/"},
          { title: 'My Debit Note', icon: 'question_answer', },
          { title: 'Summary', icon: 'question_answer', },
        ],
      links: [
        { icon: "dashboard", text: "Home", route: "/" },
        { icon: "folder", text: "Invoices", route: "/projects" },
        { icon: "person", text: "Void/Refund", route: "/team" },
        { icon: "note_add", text: "Debit Note", route: "/dummy" },
        { icon: "note_add", text: "Summary", route: "/register" },
       
      ],
      

    };
    
   
  },
  methods:{
    reload: function(){
     location.reload();
    }
  }
};
</script>

