<template>
    <div>
        <p>ITEM</p>
        <dropdown @update:option="optionUpdate"></dropdown>
    </div>

</template>
<script>
import Dropdown from '../views/Dropdown'
export default {
    name:"List",
    components:{
        Dropdown
    },
    methods:{
        optionUpdate: function(value){
            console.log(value)
        }
    }
}
</script>