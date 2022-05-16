<style scoped>
.center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.right {
  position: absolute;
  left: 0;
}
.nav-container {
  background-image: url("/imgs/comm_vouch.png");
  background-size: 100% 100%;
  margin-left: 10%;
  margin-right: 10%;
}
.container2 {
  background-image: url("/imgs/user_stat.png");
  background-size: 100% 100%;
  margin-left: 10%;
  margin-right: 10%;
}
.container3 {
  background-image: url("/imgs/token2.png");
  background-size: 100% 100%;
  margin-left: 10%;
  margin-right: 10%;
}
.container4 {
  background-image: url("/imgs/token1.png");
  background-size: 100% 100%;
  margin-left: 10%;
  margin-right: 10%;
}
</style>
<template>
  <div class="dark:text-white  h-full px-10">
    <img src="/imgs/new_message.png" alt="" class="w-full" />
    <Homeswiper />
    <div class="text-right">
      <img class="inline h-9" src="/imgs/more.png" alt="" />
    </div>
    <img src="/imgs/spliter1.png" alt="splitter" />
    <HomeNewMessage />

    <img src="/imgs/spliter1.png" alt="splitter">

    <div class="grid lg:grid-cols-2 sm:grid-cols-1">
      <div class="flex-1 nav-container p-14">
        <div class="border-2 border-solid border-white w-4/5">
          <div class="text-center">总资产</div>
          <div class="text-center border-b-2 border-solid border-white">
            ≈ $ 10,000.008
          </div>

          <div class="h-1/5 flex" v-for="x in 5" :key="x">
            <div class="w-1/6 mx-1 h-full"><img src="" alt="" /></div>
            <div class="w-1/2">
              <div class="text-yellow-600">BHD</div>
              <div class="truncate text-xs">0x7fe….g8ff [ 複製 ]</div>
            </div>
            <div class="text-right text-green-500">
              <div>100,000</div>
              <div>≈ $ 1,000</div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-1 container2 p-14">
        <div
          class="
            border-2 border-solid border-white
            flex flex-col
            justify-around
          "
        >
          <div class="mx-3 my-1" v-for="x in 7" :key="x">
            <div class="text-purple-500">会员注册人数</div>
            <div class="text-yellow-700 text-xs">10000</div>
          </div>
        </div>
      </div>
    </div>

    <img src="/imgs/spliter2.png" alt="splitter">
    <img src="/imgs/economic_bar.png" alt="" />

    <Hometoken />
    <div class="h-20 my-10 text-4xl text-purple-500">{{ $t("Home.PDR") }}</div>
    <div class="h-20 text-4xl text-purple-500">{{ $t("Home.partners") }}</div>
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
