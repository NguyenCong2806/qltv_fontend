<template>
  <div class="main-wrapper main-wrapper-1">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <div class="main-content">
        <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>
<script setup lang="ts">
import AppHeader from "./AppHeader.vue";
import AppSidebar from "./AppSidebar.vue";
import AppFooter from './AppFooter.vue';

</script>
<style scoped></style>
