<script>
import {mapActions} from 'vuex';
export default {
  data() {
    return {
      lang: 'cn',
    };
  },
  methods: {
    ...mapActions(['connectWallet']),
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
                align-middle hover:cursor-pointer" @click="connectWallet">
                Connect Wallet</div>
                <div class="inline-block p-3 m-2 right-0
                bg-green-100 text-center
                align-middle">Home</div>
            </div>
        </div>

    </div>
</template>
