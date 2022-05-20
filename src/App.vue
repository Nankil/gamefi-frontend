<script setup>
import Heading from './components/Heading.vue';
import {RouterView} from 'vue-router';
import NavBar from './components/NavBar.vue';
import Route from './components/Route.vue';
import Log from './components/Log.vue';
import NavInvest from './components/NavInvest.vue';
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
          display_name: this.$t('routes[0].display_name'),
        },
        {
          path: '/events',
          name: 'Events',
          display_name: this.$t('routes[1].display_name'),
        },
        {
          path: '/community',
          name: 'Community',
          display_name: this.$t('routes[2].display_name'),
        },
        {
          path: '/lock',
          name: 'Lock',
          display_name: this.$t('routes[3].display_name'),
        },
        {
          path: '/account',
          name: 'Account',
          display_name: this.$t('routes[4].display_name'),
        },
        {
          path: '/tutorial',
          name: 'Turorial',
          display_name: this.$t('routes[5].display_name'),
        },
        {
          path: '/media',
          name: 'Media',
          display_name: this.$t('routes[6].display_name'),
        },
        {
          path: '/roadmap',
          name: 'RoadMap',
          display_name: this.$t('routes[7].display_name'),
        },
        {
          path: '/gamephase',
          name: 'GamePhase',
          display_name: this.$t('routes[8].display_name'),
        },
        {
          path: '/contactus',
          name: 'ContactUs',
          display_name: this.$t('routes[9].display_name'),
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

      return this.$route.path.slice(0, 8) === '/account' ? false : true;
    },
  },
  provide() {
    return {
      currentRoutePath: this.currentRoutePath,
    };
  },
  mounted() {
    this.$store.dispatch('setWeb3', window.ethereum);
    const contract = new FundingContract(
        contractInterface.abi,
        '0xc58d6Fac68B761c2F735160fD43bd9176E0B443D',
    );
    contract
        .fundOf('0xbabF784Cb81452b43055233BeE50d80a866609a6')
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
  <div>
    <div
      class="text-white w-1/5 absolute bottom-10 right-4"
      v-if="infoLog.length > 0"
    >
      <Log :msg="infoLog[0]" :color="'blue'" />
    </div>
    <div
      class="text-white w-1/5 absolute bottom-3 right-4"
      v-if="errorLog.length > 0"
    >
      <Log :msg="errorLog[0]" :color="'red'" />
    </div>
    <div class="w-full">
      <Heading />
    </div>
    <div class="flex flex-row w-full h-full">
      <div v-if="isBarActive" class="navbar">
        <NavBar :routes="routes" />
        <div class="w-full mt-10 invest-wrapper">
          <NavInvest />
        </div>
      </div>


      <div
        class="main "
        :class="[isBarActive ? 'content' : 'w-full']"
        style="margin:0 auto"
      >
        <!-- <div>
          <Route />
        </div> -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main {
  height: fit-content;
}
.navbar{
  background-image: url('/imgs/nav_left_bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding-left: 30px;
  padding-right: 30px;
}

.invest-wrapper {
  margin-top: 96px;
}
</style>
