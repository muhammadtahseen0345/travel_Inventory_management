<!--<template>
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
</template>
<<script>

export default {
  data() {
    return {
      show1:true,
      show2:true
      };
  },
   methods: {
 login: function () {
   const { username, password } = this;
   if(username=='admin' && password=='admin'){
     this.show1=true,this.show2=false}
   }
 },
 
};
</script>
-->
<template>
<div class="round3">

  <v-data-table
 v-model="selected"
    :headers="headers"
    :items="desserts"
    :single-select="singleSelect"
    item-key="name"
    show-select
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title><h3>MY ITEMS</h3></v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
         <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
         
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
          </template>
          <div class="round3">
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
               <!-- <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Travel Agency Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.calories" label="Address"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.fat" label="E-mail"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.carbs" label="Contact#"></v-text-field>
                  </v-col>
                 
                </v-row>-->
                   <v-row>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-dialog
                        ref="dialog"
                        v-model="modal"
                        :return-value.sync="editedItem.date"
                        persistent
                        width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="date"
                            label="Picker in dialog"
                            prepend-icon="event"
                            readonly
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="date" scrollable>
                          <v-spacer></v-spacer>
                          <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                          <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                        </v-date-picker>
                      </v-dialog>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.name" label="Travel Agency Name*" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.calories" label="Address*" required></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="editedItem.fat" label="E-mail*" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="editedItem.carbs" label="Contact#*" required></v-text-field>
                    </v-col>
                  </v-row>
                  
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
            
          </v-card>
          </div>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
      color="pink"
        small
        class="mr-2"
        @click="editItem(item)"
      >
        edit
      </v-icon>
      <v-icon
      color="black"
        small
        @click="deleteItem(item)"
      >
        delete
      </v-icon>
    </template>
    
  </v-data-table>
</div>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
      search:"",
      singleSelect: true,
        selected: [],
      
      headers: [
        {
          text: 'Travel Agency Name',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Address', value: 'calories',sortable: false  },
        { text: 'Date', value: 'date',sortable: false  },
        { text: 'E-mail', value: 'fat',sortable: false  },
        { text: 'Contact#', value: 'carbs',sortable: false  },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: '',
        fat: '',
        carbs: '',
        protein: '',
        date: '',
      },
      defaultItem: {
        name: '',
        calories: '',
        fat: '',
        carbs: '',
        protein: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>
<style>
.round3 {
  width: auto;
  height: auto;
  border: 2px solid rgb(66, 66, 66);
}
.stepper_style {
  background-color: #818181;
}
</style>
