<template>
    <div>
        <menus :items="menusData"/>
    </div>
    
</template>

<script setup lang="ts">
import { computed } from 'vue'
import menus from './menus.vue'

import router from '@/router'
const menusData = computed(()=>{
    console.log(router.options.routes)
    return router.options.routes.filter((i)=>i.component)
})
/* const menusData =  [
    {
        title:'首页',
        path:'/'
    },
    {
        title:'个人中心',
        path:'/mine'
    },
] */
</script>