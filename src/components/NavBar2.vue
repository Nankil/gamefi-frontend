<script>
export default {
  props: ["routes"],
  data() {
    return {
      // routes: [
      //  {
      //    path: '/account/info',
      //    name: 'Info',
      //    display_name: 'Info',
      //  },
      //  {
      //    path: '/account/tasks',
      //    name: 'Tasks',
      //    display_name: 'Tasks',
      //  },
      //  {
      //    path: '/account/credit',
      //    name: 'Credit',
      //    display_name: 'Credit',
      //  },
      //  {
      //    path: '/account/assets',
      //    name: 'Assets',
      //    display_name: 'Assets',
      //  },
      //  {
      //    path: '/account/nft',
      //    name: 'NFT',
      //    display_name: 'NFT',
      //  },
      //  {
      //    path: '/account/investment',
      //    name: 'Investment',
      //    display_name: 'Investment',
      //  },
      // ],
    };
  },
  computed: {
    currentRoutePath() {
      console.log(this.$route.path);
      return this.$route.path;
    },
  },
};
</script>

<template>
  <div class="w-full flex flex-wrap ">
    <div
      v-for="route in routes"
      :key="route"
      class="w-1/6 p-2"
      @click="$router.push(route.path)"
    >
      <button
        v-if="currentRoutePath == route.path"
        class="bg-orange-400 w-full"
      >
        {{ route.display_name }}
      </button>
      <button v-else class="bg-orange-200 w-full">
        {{ route.display_name }}
      </button>
    </div>
  </div>
</template>
<style>

</style>
