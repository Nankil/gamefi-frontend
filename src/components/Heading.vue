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
        <div class="h-full main" @click="$router.push('/')">
            <img src="/imgs/main.png" alt="" class="object-cover max-2">
        </div>

        <div class="flex flex-col right-bar">
            <div class="flex flex-row items-center row-funcs">
                <div id="wallet" class=" flex flex-row h-8
                text-center border rounded-full border-teal-400
                align-middle hover:cursor-pointer justify-center" @click="connectWallet"
                v-if="userInfo.walletAddr === ''">
                  <img src="/imgs/fox_icon.png" alt="fox" class="h-6 mr-1">
                  {{$t('header.cw')}}</div>
                <div id="wallet" class=" flex fle-row h-8 justify-center
                text-center border rounded-full border-teal-400
                align-middle hover:cursor-pointer"
                v-else>
                  <img src="/imgs/fox_icon.png" alt="fox" class="h-6 mr-1">
                  {{ truncatedAddr }}</div>
                <div id="lang" class="flex flex-row h-8 justify-center
                text-center border rounded-full border-purple-400
                align-middle hover:cursor-pointer"
                @click="$router.push('/')">
                <img src="/imgs/internet_icon.png" alt="fox" class="h-6 mr-1">
                CN *
                </div>
                <img id="night-switch" src="/imgs/sun.png" alt="sun"
                class="h-10 hover:cursor-pointer">
            </div>
            <div class="w-full flex flex-row-reverse">
              <div class="flex flex-row utc-time">
                <div class="flex flex-row  items-center">
                  <div class="flex flex-col">
                    <div class="self-end font-semibold">22:32</div>
                    <div class="text-sm">2022:5:2</div>
                  </div>
                  <img class="h-10 ml-2" src="/imgs/utc+8.png" alt="">
                </div>
                <div class="flex flex-row items-center ml-5">
                  <div class="flex flex-col">
                    <div class="self-end font-semibold">22:32</div>
                    <div class="text-sm">2022:5:2</div>
                  </div>
                  <img class="h-10 ml-2" src="/imgs/utc.png" alt="">
                </div>
              </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.heading-container {
  background-image: url('/imgs/nav_top.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.main {
  width: 23.7%;
  margin-left: 4.7%;
}

.right-bar {
  width: 29.6%;
  margin-right: 2.2%;
}

#wallet, #lang {
  width: 40.54%;
}

#lang {
  margin-left: 6.08%;
}

#night-switch {
  width: 8.7%;
  margin-left: 4.04%;
}

.utc-time {
  width: 40%;
  margin-top: 2%;
}

.row-funcs {
  margin-top: 4%;
}


</style>>
