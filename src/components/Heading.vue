<script>
import {mapActions, mapState} from 'vuex';
export default {
  data() {
    return {
      lang: 'cn',
    };
  },
  methods: {
    ...mapActions(['connectWallet']),
  },
  computed: {
    ...mapState(['userInfo']),
    truncatedAddr() {
      return this.userInfo.walletAddr.slice(0, 4) +
      '...' + this.userInfo.walletAddr.slice(38, -1);
    },
  },
};
</script>
<template>
    <div class="flex flex-row
    justify-between w-full h-full heading-container">
        <div class="h-full w-1/5">
            <img src="/imgs/main.png" alt="" class="object-cover max-2">
        </div>

        <div class="flex flex-col">
            <div class="flex flex-row items-center">
                <div class="flex flex-row p-3 m-2 right-0
                text-center border rounded-full border-teal-400
                align-middle hover:cursor-pointer" @click="connectWallet"
                v-if="userInfo.walletAddr === ''">
                <img src="/imgs/fox_icon.png" alt="fox" class="h-6 mr-1">
                {{$t('header.cw')}}</div>
                <div class="flex fle-row p-3 m-2 right-0
                text-center border rounded-full border-teal-400
                align-middle hover:cursor-pointer"
                v-else>
                <img src="/imgs/fox_icon.png" alt="fox" class="h-6 mr-1">
                {{ truncatedAddr }}</div>
                <div class="flex flex-row p-3 m-2 right-0
                text-center border rounded-full border-purple-400
                align-middle hover:cursor-pointer"
                @click="$router.push('/')">
                <img src="/imgs/internet_icon.png" alt="fox" class="h-6 mr-1">
                Home
                </div>
                <img src="/imgs/sun.png" alt="sun"
                class="h-10 hover:cursor-pointer">
            </div>
            <div class="flex flex-row ml-20 w-full">
              <div class="flex flex-row items-center">
                <img src="/imgs/utc+8.png" alt="">
                <div class="ml-2">08:00 </div>
              </div>
              <div class="flex flex-row items-center ml-5">
                <img src="/imgs/utc+8.png" alt="">
                <div class="ml-2">08:00 </div>
              </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.heading-container {
  background-image: url('/imgs/nav_top.png');
  background-size: 100% 100%;
}
</style>>
