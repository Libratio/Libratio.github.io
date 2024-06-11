<script setup lang="ts">
import Layout from './components/layout/index.vue'
</script>

<template>
  <div class="flex">
    <Layout></Layout>
  <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/reset.scss';
.flex{
  display:flex;
  width:100vw;
  height:100vh;
}
</style>
