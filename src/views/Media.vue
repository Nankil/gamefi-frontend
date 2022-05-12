<script>
import NavBar2 from '@/components/NavBar2.vue';
export default {
  data() {
    return {
      routes: [
        {
          path: '/media/photos',
          name: 'photos',
          display_name: 'photos',
        },
        {
          path: '/media/videos',
          name: 'videos',
          display_name: 'videos',
        },
      ],
    };
  },
  components: {
    NavBar2,
  },
};
</script>


<template>
  <div class="w-full">
    <div>
      <NavBar2 :routes="routes" />
      <router-view></router-view>
    </div>
  </div>
</template>
