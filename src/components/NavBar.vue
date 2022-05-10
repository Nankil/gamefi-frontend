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
      ],
    };
  },
  computed: {
    currentRoutePath() {
      return this.$route.path;
    },
  },
};
</script>

<template>
    <div class="dark:bg-black">
      <div v-for="route in routes" :key="route">
      <div v-if="route.path == currentRoutePath"
      class="dark:text-white p-2 border-r-0 border-2 border-x-white"
      >{{ route.display_name }}</div>
      <div v-else class="dark:text-white p-2
      border-r-2 border-x-white">{{ route.display_name }}</div>
      </div>
    </div>
</template>
