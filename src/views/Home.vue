<style scoped>


.message-container {
  width: 85.4%;
}

.message-bar {
  margin-left: 18.42%;
  margin-right: 14.57%;
  margin-bottom: 3%;
}
</style>
<template>
  <div class="dark:text-white flex flex-col items-center">
    <div class="message-container flex flex-col">
      <img src="/imgs/new_message.png" alt=""
      class="message-bar" />
      <Homeswiper />
      <img class="h-10 self-end icon-more" src="/imgs/more.png" alt="" />
    </div>
    <img src="/imgs/spliter1.png" alt="splitter"  />

    <HomeNewMessage />

    <img src="/imgs/spliter2.png" alt="splitter">
    <img src="/imgs/economic_bar.png " class="fengeimg h-20" alt="" />

    <Hometoken />

    <div class="h-20 px-40 my-10 text-4xl text-purple-500">{{ $t("Home.PDR") }}</div>
    <div class="h-20 px-40 text-4xl text-purple-500">{{ $t("Home.partners") }}</div>
  </div>
</template>
<script>
import HomeNewMessage from './HomeNewMessage.vue';
import Homeswiper from './Homeswiper.vue';
import Hometoken from './Hometoken.vue';
export default {
  name: 'app',
  data() {
    return {locale: 'en'};
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    },
  },
  components: {Homeswiper, HomeNewMessage, Hometoken},
};
</script>
