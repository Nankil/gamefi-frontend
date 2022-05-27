<script>
import {accountRegistered} from '../api/backend.mjs';
import {mapActions, mapState} from 'vuex';
export default {
  data() {
    return {
      lang: 'cn',
    };
  },
  methods: {
    ...mapActions(['connectWallet']),
    async connectWalletWrapper() {
      const res = await this.connectWallet();
      console.log(res);
      if (res === 'success') {
        console.log('confirming');
        const regRes = await accountRegistered(this.userInfo.walletAddr);
        console.log(regRes);
        if (regRes.status === false) {
          this.$router.push('/account/register');
        }
      }
    },
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
        <div class="main self-center" @click="$router.push('/')">
            <img src="/imgs/main.png" alt="" class="object-cover max-2">
        </div>

        <div class="flex flex-col right-bar">
            <div class="flex flex-row items-center row-funcs">
                <div id="wallet" class=" flex flex-row h-8
                border rounded-full border-teal-400
                hover:cursor-pointer justify-center items-center"
                @click="connectWalletWrapper"
                v-if="userInfo.walletAddr === ''">
                  <img src="/imgs/fox_icon.png" alt="fox" class="h-6 mr-1">
                  {{$t('header.cw')}}</div>
                <div id="wallet" class=" flex fle-row h-8 justify-center
                text-center border rounded-full border-teal-400
                hover:cursor-pointer items-center"
                v-else>
                  <img src="/imgs/fox_icon.png" alt="fox" class="h-6 mr-1">
                  {{ truncatedAddr }}</div>
                <div id="lang" class="flex flex-row h-8 justify-center
                border rounded-full border-purple-400
                hover:cursor-pointer items-center"
                @click="$router.push('/')">
                <img src="/imgs/internet_icon.png" alt="fox" class="h-6 mr-1">
                CN *
                </div>
                <img id="night-switch" src="/imgs/sun.png" alt="sun"
                class="h-10 hover:cursor-pointer">
            </div>
            <div class="w-full flex flex-row-reverse">
              <div class="flex flex-row-reverse utc-time">
                <div id="utc-8" class="flex flex-row items-center">
                  <div id="time-whole" class="flex flex-col">
                    <div class="self-end time">22:32</div>
                    <div class="text-sm">2022:5:2</div>
                  </div>
                  <img class="h-10" src="/imgs/utc+8.png" alt="">
                </div>
                <div id="utc" class="flex flex-row items-center">
                  <div id="time-whole" class="flex flex-col">
                    <div class="self-end time">22:32</div>
                    <div class="text-sm">2022:5:2</div>
                  </div>
                  <img class="h-10" src="/imgs/utc.png" alt="">
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
  height: 219px;
}

.main {
  width: 23.7%;
  margin-left: 80px;
}

.right-bar {
  width: 575px;
}

#wallet, #lang {
  width: 240px;
  height: 58px;
  font-size: 25px;
}

#lang {
  margin-left: 34px;
}

#night-switch {
  width: 58px;
  height: 58px;
  margin-left: 18px;
  margin-right: 43px;
}

.row-funcs {
  margin-top: 55px;
}

#time {
  margin-bottom: 9px;
}

#time-whole {
  margin-right: 5px;
}

#utc {
  margin-right: 20px;
}

#utc-8 {
  margin-right: 52px;
}

.utc-time {
  margin-top: 33px;
  font-family: 'PingFang';
}
</style>>
