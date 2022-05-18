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
    <div class="w-full nav-container" >
      <div class="w-full p-6 px-10">
        <div v-for="route in routes" :key="route"
        @click="$router.push(route.path)" class="text-center">
          <div v-if="matchOfCurrentPath==route.name"
          class="dark:text-white p-2 selected m-2"
          >{{ route.display_name }}</div>
          <div v-else
          class="dark:text-white p-2 m-2">{{ route.display_name }}</div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.nav-container {
  background-image: url('/imgs/nav_left.png');
  background-size: 100% 100%;
}
.selected {
  background-image: url('/imgs/nav_selected.png');
  background-size: 100% 100%;
}

</style>
