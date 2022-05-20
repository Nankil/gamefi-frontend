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
    <div class="nav-container" >
      <div class="w-full router-wrapper">
        <div v-for="route in routes" :key="route"
        @click="$router.push(route.path)"
        class="flex flex-col items-center
        text-center single-router">
          <div v-if="matchOfCurrentPath==route.name"
          class="dark:text-white selected router-btn"
          >{{ route.display_name }}</div>
          <div v-else
          class="dark:text-white
          router-btn">{{ route.display_name }}</div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.nav-container {
  background-image: url('/imgs/nav_left.png');
  background-size: 100% 100%;
  width: 247px;
  height: 1087px;
  padding-top: 37px;
}
.selected {
  background-image: url('/imgs/nav_selected.png');
  background-size: 185px 56px;
}

.router-btn {
  height: 56px;
  width: 185px;
  font-size: 27px;
  line-height: 56px;
}

.single-router {
  margin-bottom: 27px;
}

.router-wrapper {
  margin-top: 17px;
}
</style>
