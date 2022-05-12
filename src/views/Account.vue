<script>
import NavBar2 from '@/components/NavBar2.vue';
export default {
  setup() {
  },
  data() {
    return {
      routes: [
        {
          path: '/account/info',
          name: 'Info',
          display_name: 'Info',
        },
        {
          path: '/account/tasks',
          name: 'Tasks',
          display_name: 'Tasks',
        },
        {
          path: '/account/credit',
          name: 'Credit',
          display_name: 'Credit',
        },
        {
          path: '/account/assets',
          name: 'Assets',
          display_name: 'Assets',
        },
        {
          path: '/account/nft',
          name: 'NFT',
          display_name: 'NFT',
        },
        {
          path: '/account/investment',
          name: 'Investment',
          display_name: 'Investment',
        },
      ],
    };
  },
  components: {NavBar2},
};
</script>

<template>
  <div class="w-full h-full">
    <NavBar2 :routes="routes" />
    <br>
    <router-view></router-view>
  </div>
</template>
