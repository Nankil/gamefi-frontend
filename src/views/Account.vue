<script>
import NavBar2 from '@/components/NavBar2.vue';
export default {
  setup() {
  },
  components: {NavBar2},
};
</script>

<template>
  <div class="w-full h-full">
    <NavBar2 />
    <br>
    <router-view></router-view>
  </div>
</template>
