<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <Navbar v-if="route.meta.showNavbar" />
  <router-view />
</template>

<style scoped></style>
