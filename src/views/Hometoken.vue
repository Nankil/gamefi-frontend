<template>
  <div class="grid grid-cols-2">
    <div class="container3 p-16">
      <div class="flex">
        <img class="w-1/4" src="" alt="图图" />
        <div class="ce570e6">
          <div class="text-2xl">name</div>
          <div class="">简介</div>
        </div>
      </div>

      <hr color="#e570e6" class="my-10" />

      <div class="flex my-4" v-for="x in 5" :key="x">
        <div class="w-1/2">24小时涨跌</div>
        <div class=" w-1/2 ce570e6 text-right">100%</div>
      </div>

      <div>haha</div>
      <div class="text-sm">haha</div>

      <div class=" my-3 border1">0x5068…Cc2f2b3 [ 複製 ]</div>
      <div class="flex justify-around ce570e6">
        <button>合約機制查看</button>
        <button>222222</button>
        <button>3333</button>
      </div>
    </div>

    <div class="container4 p-16">
      <div class="flex">
        <img class="w-1/4" src="" alt="图图" />
        <div class="ce570e6">
          <div class="text-2xl">name</div>
          <div class="">简介</div>
        </div>
      </div>

      <hr color="#e570e6" class="my-10" />

      <div class="flex my-4" v-for="x in 5" :key="x">
        <div class="w-1/2">24小时涨跌</div>
        <div class="text-yellow-600 w-1/2 text-right">100%</div>
      </div>

      <div>haha</div>
      <div>haha</div>

      <div class="my-3 border2">0x5068…Cc2f2b3 [ 複製 ]</div>
      <div class="flex justify-around ce570e6">
        <button>合約機制查看</button>
        <button>222222</button>
        <button>3333</button>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container3 {
  background-image: url("/imgs/token2.png");
  background-size: contain;
  background-repeat: no-repeat;

  margin-left: 10%;
  margin-right: 10%;
}
.container4 {
  background-image: url("/imgs/token1.png");
  background-size: contain;
  background-repeat: no-repeat;

  margin-left: 10%;
  margin-right: 10%;
}
.ce570e6 {
  color: #e570e6;
}
.border1{
    border: 1px solid #e570e6;
    border-radius: 20px;
    padding: 5px;
}
.border2{
    border: 1px solid #79c5c5;
    border-radius: 20px;
    padding: 5px;
}
</style>