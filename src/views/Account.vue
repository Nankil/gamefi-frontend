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
          path: "/account/recommend",
          name: "Recommend",
          display_name: this.$t("Account.routes[1].display_name"),
        },
        {
          path: "/account/tasks",
          name: "Tasks",
          display_name: this.$t("Account.routes[2].display_name"),
        },
        {
          path: "/account/credit",
          name: "Credit",
          display_name: this.$t("Account.routes[3].display_name"),
        },
        {
          path: "/account/assets",
          name: "Assets",
          display_name: this.$t("Account.routes[4].display_name"),
        },
        {
          path: "/account/nft",
          name: "NFT",
          display_name: this.$t("Account.routes[5].display_name"),
        },
        {
          path: "/account/investment",
          name: "Investment",
          display_name: this.$t("Account.routes[6].display_name"),
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
  <div class="nav-container">
    <div style="margin-left: 95px; margin-right: 0px">
      <NavBar2 :routes="routes" />
    </div>

    <br />
    <router-view></router-view>
  </div>
</template>
<style>
.nav-container {
  background-image: url("/imgs/nav_top.png");
  background-size: 100% 100%;
}
</style>
