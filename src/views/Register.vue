<template>
<div>
  <div class="round3">
  <v-data-table
  dense
    v-model="selected"
    :headers="headers"
    :items="desserts"
    
    item-key="name"
   
    class="elevation-1"
  >
   <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title><h3>MY SUMMARY</h3></v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
      </v-toolbar></template>
  </v-data-table>
  </div>
  <br>
  <br>
  <div class="round3">
   <v-data-table
  dense
    v-model="selected"
    :headers="headers"
    :items="desserts"
    
    item-key="name"
   
    class="elevation-1"
  >
   <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title><h3>OTHERS</h3></v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
      </v-toolbar></template>
  </v-data-table>
  </div>
</div>
</template>
<script>
  export default {
    data () {
      return {
       
        headers: [
          {
            text: 'Add',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: '', value: 'calories' },
          { text: '', value: '' },
          { text: 'Less', value: 'fat' },
          { text: '', value: 'carbs' },
          { text: '', value: '' },
          
        ],
        desserts: [
          {
            name: 'Sale Invoices',
            calories: 159,
            fat: "Void/Refund",
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Service Charges',
            calories: 237,
            fat: "Credit NOtes",
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Debit Note',
            calories: 262,
            fat: "Tour Cancellation",
            carbs: 23,
            protein_3:"",
            iron: '7%',
          },
          {
            name: 'Visa Invoices',
            calories: 305,
            fat: "Less Receipt",
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Tour Booking',
            calories: 356,
            fat: "Add Payment",
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Total',
            calories: 'Total Value appear',
            fat: "",
            carbs: "Total value appear",
            protein_2: "",
            iron: '0%',
          },
          {
            name: '',
            calories:" ",
            fat: '',
            carbs: '' ,
            protein: '' ,
            iron: '',
          },
          {
            name: 'Net Balance',
            calories: "",
            fat: "",
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
         
        ],
      }
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
