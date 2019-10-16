<template>
<div>
  <v-row >
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Entries</v-btn>
      </template>
      <div class="round3">
      <v-card>
        <v-card-title>
          <span class="headline">Invoices</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              
  <v-row>
    
       
      
 
    <v-col cols="12" sm="6" md="4">
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
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
       <v-text-field 
       v-model="client_no"
       label="Client No*" required></v-text-field> 
    </v-col>
    <v-col cols="12" sm="6" md="4">
       <v-text-field   v-model="invoice" label="Invoice*" required></v-text-field> 
    </v-col>
  </v-row>
         <v-row>
              <v-col cols="12" sm="6">
       <v-text-field  v-model="ticket_no" label="Ticket NO.*" required></v-text-field> 
    </v-col>
     <v-col cols="12" sm="6">
       <v-text-field  v-model="passenger" label="Passenger*" required></v-text-field> 
    </v-col>
         </v-row>
          <v-row>
              <v-col cols="12" sm="6">
       <v-text-field  v-model="sector" label="Sector*" required></v-text-field> 
    </v-col>
     <v-col cols="12" sm="3">
       <v-text-field  v-model="face" label="Face*" required></v-text-field> 
    </v-col>
      <v-col cols="12" sm="3">
       <v-text-field  v-model="taxes" label="Taxes*" required></v-text-field> 
    </v-col>
         </v-row>
             
             
            </v-row>
          </v-container>
         
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="readRefs()">Save</v-btn>
        </v-card-actions>
      </v-card>
      </div>
    </v-dialog>
  </v-row>
  <br/>
  <br/>
  <div class="round3">
  <v-card>
    <v-card-title>
     Invoices
      <div class="flex-grow-1"></div>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
       dense
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  
  </v-card>
  </div>
</div>
</template>
<script>
  export default {
    data () {
      return {
        search: '',
        invoice:"",
        client_no:"",
        ticket_no:"",
        passenger:"",
        sector:"",
        face:"",
        taxes:"",

         dialog: false,
       date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
        headers: [
          {
            text: 'Date',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Invoice', value: 'calories' },
          { text: 'Ticket No.', value: 'fat' },
          { text: 'Passenger', value: 'carbs' },
          { text: 'Sector', value: 'protein' },
          { text: 'Fare', value: 'iron' },
          { text: 'Taxes', value: 'iron' },
          { text: 'Sp', value: 'iron' },
          { text: 'Kb', value: 'iron' },
          { text: 'Net', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
      methods: {
    readRefs: function() {
      console.log(this.invoice,this.client_no,this.ticket_no,this.passenger,this.sector,this.face,this.taxes,this.date);
      
    }},
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