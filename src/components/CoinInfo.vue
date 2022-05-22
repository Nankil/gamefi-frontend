<template>
  <div class="flex flex-row Coininfo justify-between">
    <div class="flex flex-row ">
      <img src="/imgs/bnb_coin.png" alt="" class="bnb_coin" />
      <div class="flex flex-col ">
        <div class="bnb">BNB</div>
        <div class="flex flex-row  ">
          <div class="number">0x5068…Cc2f2b3</div>
          <img src="/imgs/copy.png" alt="" class="h-3 ml-2" />
        </div>
      </div>
    </div>
    <div>
      <div class="bnb">1000</div>
      <div class="number">=$400</div>
    </div>
  </div>
</template>
<style scoped>
.Coininfo{
    margin-bottom: 26px;
}
.bnb_coin {
  width: 40px;
  height: 40px;
  margin-right: 22px;
}
.bnb{
    line-height: 27px;
    font-size: 26px;
    color:#2d2d2d;
    text-align: left;
    margin-bottom: 7px;
    font-family: 'PingFang';
}
.number{
    line-height: 13px;
    font-size: 13px;
    color:#2d2d2d;
    text-align: left;
}
</style>
