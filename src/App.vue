<script setup>
import Heading from './components/Heading.vue';
import {RouterView} from 'vue-router';
import NavBar from './components/NavBar.vue';
import Route from './components/Route.vue';
import Log from './components/Log.vue';
</script>

<script>
import {mapState} from 'vuex';
import {FundingContract} from './api/bsc';
// import {ethers} from 'ethers';
import contractInterface from './contracts/Funding.json';
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
        {
          path: '/tutorial',
          name: 'Turorial',
          display_name: 'Turorial',
        },
        {
          path: '/media',
          name: 'Media',
          display_name: 'Media',
        },
        {
          path: '/roadmap',
          name: 'RoadMap',
          display_name: 'Road Map',
        },
        {
          path: '/gamephase',
          name: 'GamePhase',
          display_name: 'Game Phase',
        },
        {
          path: '/contactus',
          name: 'ContactUs',
          display_name: 'Contact Us',
        },
      ],
      alertMsg: {
        color: '',
        msg: '',
      },
    };
  },


  computed: {
    ...mapState(['errorLog', 'infoLog']),
    currentRoutePath() {
      return this.$route.path;
    },
    isBarActive() {
      console.log(this.$route.path.slice(0, 8));

      return this.$route.path.slice(0, 8)==='/account'?false:true;
    },
  },
  provide() {
    return {
      currentRoutePath: this.currentRoutePath,
    };
  },
  mounted() {
    this.$store.dispatch('setWeb3', window.ethereum);
    const contract =
     new FundingContract(contractInterface.abi,
         '0xc58d6Fac68B761c2F735160fD43bd9176E0B443D');
    contract.fundOf('0xbabF784Cb81452b43055233BeE50d80a866609a6')
        .then((v) => console.log(v));
  },
  watch: {
    errorLog(val) {
      this.alertMsg.color = 'red';
      this.alertMsg.msg = val;
    },
    infoLog(val) {
      console.log('info changed to: ', val);
      this.alertMsg.color = 'blue';
      this.alertMsg.msg = val;
    },
  },
};
</script>

<template >
  <div class="container mx-auto dark w-full">
    <div class="text-white w-1/5 absolute bottom-4 right-4"
    v-if="infoLog.length > 0">
      <Log :msg="infoLog[0]" :color="'blue'" />
    </div>
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
