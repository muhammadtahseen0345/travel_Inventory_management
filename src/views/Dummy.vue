<template>
<div class="round3">

  <v-data-table
 v-model="selected"
 :search="search"
    :headers="headers"
    :items="desserts"
    :single-select="singleSelect"
    item-key="name"
    show-select
    dense
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title><h3>DEBIT NOTE</h3></v-toolbar-title>
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
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
              
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
                      <v-text-field v-model="editedItem.client_no" label="Debit Note No*" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.invoice" label="Xo No*" required></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="editedItem.ticket_no" label="Remarks*" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="editedItem.passenger" label="Debit*" required></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="editedItem.sector" label="Credit" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3">
                      <v-text-field v-model="editedItem.fare" label="Net Amount*" required></v-text-field>
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
     search: "",
      invoice: "",
      client_no: "",
      ticket_no: "",
      passenger: "",
      sector: "",
      face: "",
      taxes: "",
      output: null,
      dialog: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      hello: "",
      modal: false,
      menu2: false,
      singleSelect: true,
        selected: [],
      
      headers: [
        {
          text: "Date",
          align: "left",
          sortable: false,
          value: "date"
        },
        {  align:'center', text: "Debit Note No.", value: "invoice" },
        {  align:'center', text: "Xo No.", value: "client_no" },
        {   align:'center',text: "Remarks", value: "ticket_no" },
        {  align:'center', text: "Debit", value: "passenger" },
        {  align:'center', text: "Credit", value: "sector" },
        {  align:'center', text: "Net Amount", value: "fare" },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
       invoice:'',
       ticket_no:'',
       client_no:'',
       passenger:'',
       sector:'',
       fare:'',
      
       date:''
      },
      defaultItem: {
        invoice:'',
       ticket_no:'',
       passenger:'',
       sector:'',
       fare:'',
       
       date:'',
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
