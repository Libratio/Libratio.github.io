<template>
    <ul>
        <li v-for="(item,index) in items" :key="index">
           <menuItem :item="item"></menuItem>
        </li>
    </ul>
    
</template>

<script setup lang="ts">
import menuItem from './menuItem.vue'


const props = defineProps({
    items:{
        type:Array,
        default:()=>[]
    }
})

</script>