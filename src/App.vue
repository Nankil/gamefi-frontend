<script setup>
import Heading from "./components/Heading.vue";
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Route from "./components/Route.vue";
</script>

<script>
export default {
  data() {
    return {
      routes: [
        {
          path: "/",
          name: "Home",
          display_name: "Home",
        },
        {
          path: "/events",
          name: "Events",
          display_name: "Events",
        },
        {
          path: "/community",
          name: "Community",
          display_name: "Community",
        },
        {
          path: "/lock",
          name: "Lock",
          display_name: "Lock",
        },
        {
          path: "/account",
          name: "Account",
          display_name: "Account",
        },
        {
          path: "/tutorial",
          name: "Turorial",
          display_name: "Turorial",
        },
        {
          path: "/media",
          name: "Media",
          display_name: "Media",
        },
        {
          path: "/roadmap",
          name: "RoadMap",
          display_name: "Road Map",
        },
        {
          path: "/gamephase",
          name: "GamePhase",
          display_name: "Game Phase",
        },
        {
          path: "/contactus",
          name: "ContactUs",
          display_name: "Contact Us",
        },
      ],
    };
  },

  computed: {
    currentRoutePath() {
      return this.$route.path;
    },
    isBarActive() {
      console.log(this.$route.path.slice(0,8));

      return this.$route.path.slice(0,8)==="/account"?false:true;
    },
  },
  provide() {
    return {
      currentRoutePath: this.currentRoutePath,
    };
  },
  mounted() {
    const ethereum = window.ethereum;
    if (ethereum === undefined) {
      alert('Please install MetaMask to use this website.');
    }
    this.$store.dispatch('setWeb3', window.ethereum);
  },
};
</script>

<template >
  <div class="container mx-auto dark w-full  ">
    <div class="h-1/15 w-full">
      <Heading />
    </div>
    <div class="flex flex-row w-full h-full bg-black">
      <div v-if="isBarActive" class="w-1/6 " style="background-color:black">
        <NavBar  :routes="routes" />
      </div>
      <div class="w-5/6 px-3 main   #262626 border-t-2" >
        <div >
          <Route />
        </div>
        <router-view class="dark:text-white bg-black"></router-view>
      </div>
    </div>
  </div>
</template>
<style>
.main {
  height: fit-content;
}
</style>