<template>
<div class="w-full">
  <div class="text-3xl font-bold text-purple-600">Game Phase</div>
  <div class="mt-10">
    貨幣名稱：這個貨幣取的名字，例如：比特幣BTC。
    團隊背景：發行的個人或公司背景介紹。
    項目概念：說明公司或個人發行這個加密貨幣要做什麼用途、流通度如何。
    運作方式：採用哪種工作量證明機制，是否需要採礦、挖礦，用什麼方式來執行記帳工作。
    未來發展：說明這個加密貨幣未來有那些發展、未來可能的商業模式。
  </div>
  <div class="border bg-black grid grid-cols-3 mt-10">
    <div class="p-5">
      <div class="font-bold text-purple-500 m-2 text-2xl">{{$t('ICO.ru')}}</div>
      <div class="font-bold text-orange-400 m-2 text-xl">1000000</div>
    </div>
    <div class="p-5">
      <div class="font-bold text-purple-500 m-2 text-2xl">{{$t('ICO.Parties')}}</div>
      <div class="font-bold text-orange-400 m-2 text-xl">30000</div>
    </div>
    <div class="p-5">
      <div class="font-bold text-purple-500 m-2 text-2xl">{{$t('ICO.Holders')}}</div>
      <div class="font-bold text-orange-400 m-2 text-xl">20000</div>
    </div>
    <div class="p-5">
      <div class="font-bold text-purple-500 m-2 text-2xl">{{$t('ICO.Market Size')}}</div>
      <div class="font-bold text-orange-400 m-2 text-xl">$100000</div>
    </div>
  </div>
  <div class="w-full mt-10 flex flex-row justify-center">
    <img src="https://picsum.photos/id/100/500/300" alt="somepic">
  </div>
</div>
</template>
