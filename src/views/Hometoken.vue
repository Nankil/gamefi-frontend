<template>
  <div class="grid lg:grid-cols-2 sm:grid-cols-1 px-40">
    <div class="container3 pr-80 py-16 w-full flex flex-col items-center">
      <div class="flex flex-row 
      items-center border-b pb-4 border-pink-400 w-3/4">
        <img src="https://picsum.photos/id/2/100/100" class="rounded-full border-4 border-pink-400" />
        <div class="token-info ml-2 text-pink-400">
          <div class="token-title text-2xl font-bold">
            Gene Player Coin
          </div>
          <div class="token-symbol text-xl">(SSC / BNB)</div>
        </div>
      </div>
      <div class="flex flex-col w-3/4 mt-4">
        <div class="flex flex-row justify-between text-lg mt-2">
          <div class="self-start text-gray-300 font-semibold">24d小时涨跌</div>
          <div class="self-end text-pink-400"><img class="inline" src="" alt=""> 300%</div>
        </div>
        <div class="flex flex-row justify-between text-lg mt-2">
          <div class="self-start text-gray-300 font-semibold">币价</div>
          <div class="self-end text-pink-400">$ 10</div>
        </div>
        <div class="flex flex-row justify-between text-lg mt-2">
          <div class="self-start text-gray-300 font-semibold">市值</div>
          <div class="self-end text-pink-400">$10,000,000</div>
        </div>
        <div class="flex flex-row justify-between text-lg mt-2">
          <div class="self-start text-gray-300 font-semibold">持币地址</div>
          <div class="self-end text-pink-400">100,000</div>
        </div>
        <div class="flex flex-row justify-between text-lg mt-2">
          <div class="self-start text-gray-300 font-semibold">滑点</div>
          <div class="self-end text-pink-400">买0.1% 卖0.1%</div>
        </div>
      </div>
      <div class="flex flex-col w-3/4 mt-4">
        <div class="flex flex-col w-3/4 text-lg text-gray-300 font-semibold">
          <div> Binance Smart Chain </div>
          <div>(GPC合约地址)</div>
        </div>
        <div class="flex flex-row w-full">
          <div class="rounded-lg border border-pink-400 text-xl text-center w-11/12">0x5068…Cc2f2b3</div>
          <img src="/imgs/copy.png" alt="copy" class="h-8">
        </div>
        <div class="flex flex-row justify-between mt-6 text-sm">
          <div class="btn-red">合约地址查看</div>
          <div class="btn-red">勘察插值网站</div>
          <div class="btn-red">购买 $GPC</div>
        </div>
      </div>
    </div>

    <div class="container4 pl-80 py-16 w-full flex flex-col items-center">
      <div class="flex flex-row 
      items-center border-b pb-4 border-green-500 w-3/4">
        <img src="https://picsum.photos/id/2/100/100" class="rounded-full border-4 border-green-400" />
        <div class="token-info ml-2 text-green-400">
          <div class="token-title text-2xl font-bold">
            Gene Player Coin
          </div>
          <div class="token-symbol text-xl">(SSC / BNB)</div>
        </div>
      </div>
      <div class="flex flex-col w-3/4 mt-4">
        <div class="flex flex-row justify-between text-lg mt-2">
          <div class="self-start text-gray-300 font-semibold ">24d小时涨跌</div>
          <div class="self-end text-green-400"><img class="inline" src="" alt=""> 300%</div>
        </div>
        <div class="flex flex-row justify-between text-lg mt-2">
          <div class="self-start text-gray-300 font-semibold">币价</div>
          <div class="self-end text-green-400">$ 10</div>
        </div>
        <div class="flex flex-row justify-between text-lg mt-2">
          <div class="self-start text-gray-300 font-semibold">市值</div>
          <div class="self-end text-green-400">$10,000,000</div>
        </div>
        <div class="flex flex-row justify-between text-lg mt-2">
          <div class="self-start text-gray-300 font-semibold">持币地址</div>
          <div class="self-end text-green-400">100,000</div>
        </div>
        <div class="flex flex-row justify-between text-lg mt-2">
          <div class="self-start text-gray-300 font-semibold">滑点</div>
          <div class="self-end text-green-400">买0.1% 卖0.1%</div>
        </div>
      </div>
      <div class="flex flex-col w-3/4 mt-4">
        <div class="flex flex-col w-3/4 text-lg text-gray-300 font-semibold">
          <div > Binance Smart Chain </div>
          <div>(GPC合约地址)</div>
        </div>
        <div class="flex flex-row w-full">
          <div class="rounded-lg border border-green-400 text-xl text-center w-11/12">0x5068…Cc2f2b3</div>
          <img src="/imgs/copy.png" alt="copy" class="h-8">
        </div>
        <div class="flex flex-row justify-between mt-6 text-sm">
          <div class="btn-green">合约地址查看</div>
          <div class="btn-green">勘察插值网站</div>
          <div class="btn-green">购买 $GPC</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>

.container3 {
    background-image: url('/imgs/token2.png');
    background-size: contain;
    background-position: left;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
}
.container4 {
    background-image: url('/imgs/token1.png');
    background-size: contain;
    background-position: right;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
}

.btn-red {
  background-image: url('/imgs/red_button.svg');
  background-size: 100% 100%;
  padding: 3%;
}

.btn-green {
  background-image: url('/imgs/green_button.svg');
  background-size: 100% 100%;
  padding: 3%;
}
</style>