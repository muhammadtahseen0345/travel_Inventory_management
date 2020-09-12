<template>
<div>
 
  <v-app class="blue-lighten">
    <login v-show="show2" @updatebool="optionUpdate"></login>
  
 <div v-show="show1" >
   <appnavigation ></appnavigation>
    <v-content class="mx-4 my-2">
    
      <router-view></router-view>
      
    </v-content></div>
  </v-app>
</div>
</template>

<script>
import Navbar from "./components/Navbar";
import login from "./views/login";
export default {
 
  data() {
    return {
     show1:false,
     show2:true,
      Log:""
      };
  },
 
   methods: {
      optionUpdate: function(){
          
           this.show1=true;
           this.show2=false;
           console.log(this.show2,this.show1)
        },
       
		
 /*login: function () {
   const { username, password } = this;
   if(username=='admin' && password=='admin'){
     this.show1=true,this.show2=false;
     this.Log="Admin"}
     else if(username=='guest' && password=='guest'){
            this.show1=true,this.show2=false;
              this.Log="Guest"
     }
   }*/
 },
  components: {
  appnavigation: Navbar,
  login
  }
};
</script>
