<script setup>
import Heading from './components/Heading.vue';
import {RouterView} from 'vue-router';
import NavBar from './components/NavBar.vue';
import Route from './components/Route.vue';
</script>

<template>
<div class="container mx-auto dark w-full h-screen bg-gray-900">
    <div class="h-1/15 w-full">
      <Heading />
    </div>
    <div class="flex flex-row w-full">
      <div class="w-1/6 bg-slate-100">
        <NavBar />
      </div>
      <div class="w-5/6 p-3 bg-gray-400 border-t-2">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800
        focus:ring-4 focus:ring-blue-300 font-medium
        text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600
        dark:hover:bg-blue-700 focus:outline-none
        dark:focus:ring-blue-800">Default</button>
        <div>
          <Route />
        </div>
        <router-view></router-view>
      </div>
    </div>
</div>
</template>
