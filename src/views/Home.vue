<style scoped>
.Home {
  margin: 0 auto;
  width: 1385px;
}
.icon-more{
}
.message-bar {
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 51px;
  width: 923px;
  height: 85px;
}
.economic-bar {
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 51px;
  width: 923px;
  height: 85px;
}
</style>
<template>
  <div class="dark:text-white flex flex-col Home">
    <img src="/imgs/new_message.png" alt="" class="message-bar" />
    <Homeswiper />
    <img class="self-end icon-more" src="/imgs/more.png" alt="" />
    <img src="/imgs/spliter1.png" alt="splitter" />


    <HomeNewMessage />

    <img src="/imgs/spliter2.png" alt="splitter" />
    <img src="/imgs/economic_bar.png " class="economic-bar" alt="" />

    <Hometoken />

    <div class="h-20 px-40 my-10 text-4xl text-purple-500">
      {{ $t("Home.PDR") }}
    </div>
    <div class="h-20 px-40 text-4xl text-purple-500">
      {{ $t("Home.partners") }}
    </div>
  </div>
</template>
<script>
import HomeNewMessage from "./HomeNewMessage.vue";
import Homeswiper from "./Homeswiper.vue";
import Hometoken from "./Hometoken.vue";
export default {
  name: "app",
  data() {
    return { locale: "en" };
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    },
  },
  components: { Homeswiper, HomeNewMessage, Hometoken },
};
</script>
