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
    bg-white justify-between w-full h-full">
        <div class="h-full w-1/5">
            <img src="/imgs/main.png" alt="" class="object-cover max-2">
        </div>

        <div class="flex flex-col">
            <div class="flex flex-row">
                <div class="inline-block p-3 m-2 right-0
                bg-orange-100 text-center
                align-middle hover:cursor-pointer" @click="connectWallet"
                v-if="userInfo.walletAddr === ''">
                Connect Wallet</div>
                <div class="inline-block p-3 m-2 right-0
                bg-orange-100 text-center
                align-middle hover:cursor-pointer"
                v-else>{{ truncatedAddr }}</div>
                <div class="inline-block p-3 m-2 right-0
                bg-green-100 text-center
                align-middle hover:cursor-pointer"
                @click="$router.push('/')">Home</div>
            </div>
        </div>

    </div>
</template>
