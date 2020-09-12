<template>
    <select name="dropdown" id="dropdown" v-model="selectedOption" v-on:change="optionChanged">
        <option value="0">OPtio 1</option>
        <option value="1">OPtio 1</option>
        <option value="2">OPtio 1</option>
    </select>

</template>
<script>
export default {
    name: "Dropdown",
    data: function(){
        return{
            selectedOption:null,
        }
    },
    methods:{
        optionChanged:function(value){
           this.$emit('update:option',this.selectedOption)
        }
    }
}
</script>