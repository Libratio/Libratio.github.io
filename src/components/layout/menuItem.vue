<template>
    <router-link :to="item.path">{{item.title}}</router-link>
</template>
<script setup lang="ts">
const props = defineProps({
    item:{
        type:Object,
        default:()=>{
            return {}
        }
    }
})
</script>