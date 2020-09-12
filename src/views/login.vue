<!--<template>
 <div>
   <form class="login" @submit='login()'>
     <h1>Sign in</h1>
     <label>User name</label>
     <input required v-model="username" type="text" placeholder="Snoopy"/>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <hr/>
     <button type="submit">Login</button>
   </form>
 </div>
</template>
<script>
export default {
    methods: {
 login: function () {
   const { username, password } = this;
   if(username=='admin' && password=='admin'){
     this.$router.push('/dashboard')}
   }
 }
}

</script>
-->
<template>
<div>
  
   <div >
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-xs-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Log in
        </v-card-title>
        <v-card-text>
          <form >
            <v-text-field
              label="Name"
              v-model="username"
              required
            ></v-text-field>
            
            <v-text-field
              label="Password"
              v-model="password"
              type="password"
              required
            ></v-text-field>
            <v-btn @click="login()" dark block>
              Sign In
            </v-btn>
           
          </form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
   </div>
 </div>
 </template>
 
<script>

export default {
  data() {
    return {
      show1:false,
      show2:true
      };
  },
   methods: {
 login: function () {
   const { username, password } = this;
   if(username=='admin' && password=='admin'){
    this.$emit('updatebool',this.show2=false);
   }
   else if(username=='guest' && password=='guest'){
           this.$emit('updatebool',this.show2=false);
              
     }
   }
 },
 
};
</script>
<!--
<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } 
                } 
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>-->