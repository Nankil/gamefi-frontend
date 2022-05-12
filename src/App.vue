<script setup>
import Heading from './components/Heading.vue';
import {RouterView} from 'vue-router';
import NavBar from './components/NavBar.vue';
import Route from './components/Route.vue';
</script>

<script>
export default {
  data() {
    return {
      routes: [
        {
          path: '/',
          name: 'Home',
          display_name: 'Home',
        },
        {
          path: '/events',
          name: 'Events',
          display_name: 'Events',
        },
        {
          path: '/community',
          name: 'Community',
          display_name: 'Community',
        },
        {
          path: '/lock',
          name: 'Lock',
          display_name: 'Lock',
        },
        {
          path: '/account',
          name: 'Account',
          display_name: 'Account',
        },
        {
          path: '/tutorial',
          name: 'Turorial',
          display_name: 'Turorial',
        },
      ],
    };
  },
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
        <NavBar :routes="routes" />
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
