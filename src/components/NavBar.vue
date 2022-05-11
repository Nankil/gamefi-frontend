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
      ],
    };
  },
  computed: {
    currentRoutePath() {
      return this.$route.path;
    },
    matchOfCurrentPath() {
      if (this.currentRoutePath === '/') {
        return this.routes[0].name;
      } else {
        return this.routes.filter((route) => route.path != '/').find(
            (route) => this.currentRoutePath.startsWith(route.path)).name;
      }
    },
  },
};
</script>

<template>
    <div class="dark:bg-black w-full h-full">
      <div v-for="route in routes" :key="route">
      <div v-if="matchOfCurrentPath==route.name"
      class="dark:text-white p-2 border-r-0 border-2 border-x-white bg-gray-400"
      >{{ route.display_name }}</div>
      <div v-else class="dark:text-white p-2
      border-r-2 border-x-white">{{ route.display_name }}</div>
      </div>
    </div>
</template>
