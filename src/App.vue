<script setup>
import Heading from './components/Heading.vue';
import {RouterView} from 'vue-router';
import NavBar from './components/NavBar.vue';
import Route from './components/Route.vue';
</script>

<script>
export default {
  computed: {
    currentRoutePath() {
      return this.$route.path;
    },
  },
  provide() {
    return {
      currentRoutePath: this.currentRoutePath,
    };
  },
};
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
        <div>
          <Route />
        </div>
        <router-view></router-view>
      </div>
    </div>
</div>
</template>
