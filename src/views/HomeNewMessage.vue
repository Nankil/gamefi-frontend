<script>
import CoinInfo from "@/components/CoinInfo.vue";
export default {
  components: {
    CoinInfo,
  },
};
</script>

<template>
  <div class="grid lg:grid-cols-2 sm:grid-cols-1">
    <div class="container3 pt-20 w-full flex flex-col items-center">
      <div class="flex flex-col mt-10 border-b border-pink-500 w-3/4 pb-8">
        <div>总资产</div>
        <div class="text-pink-500 font-bold text-3xl text-center">
          =$1,800,000,000
        </div>
      </div>
      <div class="w-3/4"><CoinInfo /></div>
      <div class="w-3/4"><CoinInfo /></div>
      <div class="w-3/4"><CoinInfo /></div>
      <div class="w-3/4"><CoinInfo /></div>
      <div class="w-3/4"><CoinInfo /></div>
    </div>

    <div class="container4 p-16 w-full flex flex-col items-center">
      <div class="w-3/4 h-1/6 my-1"><UserAmount1 /></div>
      <div class="w-3/4 h-1/6 my-1"><UserAmount /></div>
      <div class="w-3/4 h-1/6 my-1"><UserAmount /></div>
      <div class="w-3/4 h-1/6 my-1"><UserAmount /></div>
      <div class="w-3/4 h-1/6 my-1"><UserAmount /></div>
      <div class="w-3/4 h-1/6 my-1"><UserAmount /></div>
    </div>
  </div>
</template>

<script setup>
import UserAmount from "@/components/UserAmount.vue";
import UserAmount1 from "@/components/UserAmount1.vue";
</script>

<style scoped>
.container3 {
  background-image: url("/imgs/comm_vouch.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  /* width: 100%;
    height: 0;
    padding-top: 134.48%; */
  /* (img-height / img-width * container-width) */
  /* (853 / 1280 * 100) */
}
.container4 {
  background-image: url("/imgs/user_stat.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}

.btn-red {
  background-image: url("/imgs/red_button.svg");
  background-size: 100% 100%;
  padding: 3%;
}

.btn-green {
  background-image: url("/imgs/green_button.svg");
  background-size: 100% 100%;
  padding: 3%;
}
</style>