<script setup>
import Heading from './components/Heading.vue';
import {RouterView} from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>

<template>
<div class="container mx-auto dark w-full h-screen bg-gray-900">
    <div class="h-1/15 w-full">
      <Heading />
    </div>
    <div class="flex flex-row">
      <NavBar />
      <router-view></router-view>
    </div>
</div>
</template>
