<script >
import NavBar2 from '@/components/NavBar2.vue';
export default {
  data() {
    return {
      routes: [
        {
          path: this.$t('Account.routes[0].path'),
          name: this.$t('Account.routes[0].name'),
          display_name: this.$t('Account.routes[0].display_name'),
        },
        {
          path: this.$t('Account.routes[1].path'),
          name: this.$t('Account.routes[1].name'),
          display_name: this.$t('Account.routes[1].display_name'),
        },
        {
          path: this.$t('Account.routes[2].path'),
          name: this.$t('Account.routes[2].name'),
          display_name: this.$t('Account.routes[2].display_name'),
        },
        {
          path: this.$t('Account.routes[3].path'),
          name: this.$t('Account.routes[3].name'),
          display_name: this.$t('Account.routes[3].display_name'),
        },
        {
          path: this.$t('Account.routes[4].path'),
          name: this.$t('Account.routes[4].name'),
          display_name: this.$t('Account.routes[4].display_name'),
        },
        {
          path: this.$t('Account.routes[5].path'),
          name: this.$t('Account.routes[5].name'),
          display_name: this.$t('Account.routes[5].display_name'),
        },
      ],
    };
  },
  components: {
    NavBar2,
  },
  mounted() {
    console.log(this);
  },

};
</script>

<template>
  <div class="w-full h-full px-8">
    <NavBar2 :routes="routes" />
    <br />
    <router-view></router-view>
  </div>
</template>
