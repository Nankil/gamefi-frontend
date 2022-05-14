<script >
import NavBar2 from "@/components/NavBar2.vue";
export default {
  data() {
    return {
      routes: [
        {
          path: "/account/info",
          name: "Info",
          display_name: this.$t("Account.routes[0].display_name"),
        },
        {
          path: "/account/tasks",
          name: "Tasks",
          display_name: this.$t("Account.routes[1].display_name"),
        },
        {
          path: "/account/credit",
          name: "Credit",
          display_name: this.$t("Account.routes[2].display_name"),
        },
        {
          path: "/account/assets",
          name: "Assets",
          display_name: this.$t("Account.routes[3].display_name"),
        },
        {
          path: "/account/nft",
          name: "NFT",
          display_name: this.$t("Account.routes[4].display_name"),
        },
        {
          path: "/account/investment",
          name: "Investment",
          display_name: this.$t("Account.routes[5].display_name"),
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
