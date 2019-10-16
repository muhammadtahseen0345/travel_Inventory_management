<template>
<div>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Entries</v-btn>
      </template>
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
       <v-text-field label="Client No*" required></v-text-field> 
    </v-col>
    <v-col cols="12" sm="6" md="4">
       <v-text-field label="Invoice*" required></v-text-field> 
    </v-col>
  </v-row>
         <v-row>
              <v-col cols="12" sm="6">
       <v-text-field label="Ticket NO.*" required></v-text-field> 
    </v-col>
     <v-col cols="12" sm="6">
       <v-text-field label="Passenger*" required></v-text-field> 
    </v-col>
         </v-row>
          <v-row>
              <v-col cols="12" sm="6">
       <v-text-field label="Sector*" required></v-text-field> 
    </v-col>
     <v-col cols="12" sm="3">
       <v-text-field label="Face*" required></v-text-field> 
    </v-col>
      <v-col cols="12" sm="3">
       <v-text-field label="Taxes*" required></v-text-field> 
    </v-col>
         </v-row>
             
             
            </v-row>
          </v-container>
         
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</div>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
       date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
    }),
  }
</script>