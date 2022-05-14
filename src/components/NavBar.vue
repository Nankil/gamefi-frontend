<script>
export default {
  props: ['routes'],
  data() {
    return {
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
        const match = this.routes.filter((route) => route.path != '/').find(
            (route) => this.currentRoutePath.startsWith(route.path),
        );
        if (match) {
          return match.name;
        } else {
          return '';
        }
      }
    },
  },
};
</script>

<template>
    <div class="dark:bg-black w-full">
      <div v-for="route in routes" :key="route"
      @click="$router.push(route.path)">
      <div v-if="matchOfCurrentPath==route.name"
      class="dark:text-white p-2 border-r-0 border-2 border-x-white bgc"
      >{{ route.display_name }}</div>
      <div v-else class="dark:text-white p-2
      border-r-2 border-x-white">{{ route.display_name }}</div>
      </div>
    </div>
</template>
