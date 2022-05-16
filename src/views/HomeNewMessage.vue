<template>
  <div class="grid grid-cols-2">
    <div class="nav-container p-16">
      <div class="text-xs">总资产</div>
      <div
        class="text-center text-3xl border-b-2 border-solid totalasset p-2 m-4"
      >
        {{ totalasset }}
      </div>

      <div class="flex p-3" v-for="x in 5" :key="x">
        <img class="w-1/6 mx-1 h-full" src="" alt="图图呢" />
        <div class="w-1/2">
          <div class="font-semibold text-xl">BHD</div>
          <div class="truncate text-xs ce6e6e6">0x7fe….g8ff [ 複製 ]</div>
        </div>
        <div class="text-right">
          <div class="font-semibold">100,000</div>
          <div class="text-xs e6e6e6">≈ $ 1,000</div>
        </div>
      </div>
    </div>

    <div class="container2 p-16 pt-20">
      <div class="m-3  relative" v-for="x in 7" :key="x">
        <div class="font-medium">会员注册人数</div>
        <div class="c21b9b6 inline text-2xl">10000</div>
        <img class="inline absolute right-0 " src="" alt="折线图" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
let totalasset = ref(0);
</script>

<style scoped>
.nav-container {
  background-image: url("./imgs/comm_vouch.png");
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 10%;
  margin-right: 10%;
}
.container2 {
  background-image: url("/imgs/user_stat.png");
  background-size:contain;
  background-repeat: no-repeat;

  margin-left: 10%;
  margin-right: 10%;
}
.totalasset {
  border-bottom-color: #f23ef7;
}
.ce6e6e6 {
  color: #e6e6e6;
}
.c21b9b6 {
  color: #21b9b6;
}
</style>