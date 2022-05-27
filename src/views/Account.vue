<script >
import NavBar2 from '@/components/NavBar2.vue';
import Route from '@/components/Route.vue';
export default {
  data() {
    return {
      routes: [
        {
          path: '/account/info',
          name: 'Info',
          display_name: this.$t('Account.routes[0].display_name'),
        },
        {
          path: '/account/recommend',
          name: 'Recommend',
          display_name: this.$t('Account.routes[1].display_name'),
        },
        {
          path: '/account/tasks',
          name: 'Tasks',
          display_name: this.$t('Account.routes[2].display_name'),
        },
        {
          path: '/account/assets',
          name: 'Assets',
          display_name: this.$t('Account.routes[4].display_name'),
        },
        {
          path: '/account/nft',
          name: 'NFT',
          display_name: this.$t('Account.routes[5].display_name'),
        },
        {
          path: '/account/investment',
          name: 'Investment',
          display_name: this.$t('Account.routes[6].display_name'),
        },
      ],
    };
  },
  components: {
    NavBar2,
    Route,
  },
  mounted() {
    console.log(this);
  },
};
</script>

<template>
<div class="wrapper w-full">
  <div class="background"></div>
  <div class="account-container">
    <div class="content-container">
      <div>
        <Route />
      </div>
      <div style="margin:0 auto;" >
        <NavBar2 :routes="routes"  />
      </div>

      <router-view></router-view>
    </div>
  </div>
</div>
</template>
<style scoped>
.background {
  width: 100%;
  height: 2000px;
  position: absolute;
  background: white;
  opacity: 50%;
  z-index: -1;
}
.content-container {
  padding-top: 79px;
}
.wrapper {
  margin-top: 260px;
  position: absolute;
  background-size: 100% 100%;
  top: -10%;
}
.account-container {
  margin-left: 86px;
  width: 1746px;
}
</style>
