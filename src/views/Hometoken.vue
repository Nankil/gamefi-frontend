<template>
  <div class="flex justify-between">
    <div class="container3 flex flex-col">
      <div class="flex flex-row token-head">
        <img
          src="https://picsum.photos/id/2/100/100"
          class="rounded-full token-img"
        />
        <div class="token-info">
          <div class="token-title">Gene Player Coin</div>
          <div class="token-symbol">(SSC / BNB)</div>
        </div>
      </div>
      <div class="flex flex-col token-middle">
        <div class="flex flex-row justify-between">
          <div class="self-start middle-message">24d小时涨跌</div>
          <div class="self-end middle-number">
            <img class="inline" width="36px" height="26px" src="" alt="" /> 300%
          </div>
        </div>
        <div class="flex flex-row justify-between">
          <div class="self-start middle-message">币价</div>
          <div class="self-end middle-number">$ 10</div>
        </div>
        <div class="flex flex-row justify-between">
          <div class="self-start middle-message">市值</div>
          <div class="self-end middle-number">$10,000,000</div>
        </div>
        <div class="flex flex-row justify-between">
          <div class="self-start middle-message">持币地址</div>
          <div class="self-end middle-number">100,000</div>
        </div>
        <div class="flex flex-row justify-between">
          <div class="self-start middle-message">滑点</div>
          <div class="self-end middle-number">买0.1% 卖0.1%</div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="flex flex-col middle-message" style="margin-bottom: 21px">
          <div>Binance Smart Chain</div>
          <div>(GPC合约地址)</div>
        </div>
        <div class="flex flex-row" style="margin-bottom: 42px">
          <div class="id middle-message">0x5068…Cc2f2b3</div>
          <img
            src="/imgs/copy.png"
            width="36px"
            height="36px"
            alt="copy"
            class=""
            style="margin-left: 10px"
          />
        </div>
        <div class="flex flex-row justify-between">
          <div class="btn-red">合约地址查看</div>
          <div class="btn-red">勘察插值网站</div>
          <div class="btn-red">购买 $GPC</div>
        </div>
      </div>
    </div>

    <div class="container4 flex flex-col">
      <div class="flex flex-row token-head1">
        <img
          src="https://picsum.photos/id/2/100/100"
          class="rounded-full token-img1"
        />
        <div class="token-info">
          <div class="token-title1">Gene Player Coin</div>
          <div class="token-symbol1">(SSC / BNB)</div>
        </div>
      </div>
      <div class="flex flex-col token-middle">
        <div class="flex flex-row justify-between">
          <div class="self-start middle-message">24d小时涨跌</div>
          <div class="self-end middle-number1">
            <img class="inline" width="36px" height="26px" src="" alt="" /> 300%
          </div>
        </div>
        <div class="flex flex-row justify-between">
          <div class="self-start middle-message">币价</div>
          <div class="self-end middle-number1">$ 10</div>
        </div>
        <div class="flex flex-row justify-between">
          <div class="self-start middle-message">市值</div>
          <div class="self-end middle-number1">$10,000,000</div>
        </div>
        <div class="flex flex-row justify-between">
          <div class="self-start middle-message">持币地址</div>
          <div class="self-end middle-number1">100,000</div>
        </div>
        <div class="flex flex-row justify-between">
          <div class="self-start middle-message">滑点</div>
          <div class="self-end middle-number1">买0.1% 卖0.1%</div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="flex flex-col middle-message" style="margin-bottom: 21px">
          <div>Binance Smart Chain</div>
          <div>(GPC合约地址)</div>
        </div>
        <div class="flex flex-row" style="margin-bottom: 42px;">
          <div class="id1 middle-message">0x5068…Cc2f2b3</div>
          <img
            src="/imgs/copy2.png"
            width="36px"
            height="36px"
            alt="copy"
            style="margin-left: 10px"
          />
        </div>
        <div class="flex flex-row justify-between">
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
  background-image: url("/imgs/token2.png");
  background-size: cover;
  height: 888px;
  width: 644px;
  padding-right: 66px;
  padding-left: 60px;
  padding-top: 90px;
}
.token-head {
  border-bottom: #f36cf7 solid 1px;
}
.token-head1 {
  border-bottom: #009d9e solid 1px;
}
.token-img {
  width: 87px;
  height: 87px;
  margin-right: 21px;
  border: #f36cf7 solid 4px;
}
.token-img1 {
  width: 87px;
  height: 87px;
  margin-right: 21px;
  border: #009d9e solid 4px;
}
.token-title {
  font-family: PingFang-bold;
  font-size: 33px;
  line-height: 33px;
  color: #f36cf7;
  text-align: left;
  margin-bottom: 15px;
}
.token-title1 {
  font-family: PingFang-bold;
  font-size: 33px;
  line-height: 33px;
  color: #009d9e;
  text-align: left;
  margin-bottom: 15px;
}
.token-info {
  padding-top: 18px;
}
.middle-message {
  font-size: 27px;
  line-height: 27px;
  color: rgba(51, 51, 51, 0.8);
  text-align: left;
}
.middle-number {
  font-size: 27px;
  line-height: 27px;
  color: #dd51e2;
  text-align: left;
}
.middle-number1 {
  font-size: 27px;
  line-height: 27px;
  color: #009d9e;
  text-align: left;
}
.token-symbol {
  font-size: 20px;
  line-height: 20px;
  color: #f36cf7;
  text-align: left;
  margin-bottom: 58px;
}
.token-symbol1 {
  font-size: 20px;
  line-height: 20px;
  color: #009d9e;
  text-align: left;
  margin-bottom: 58px;
}
.token-middle {
  padding-top: 54px;
}
.justify-between {
  margin-bottom: 48px;
}

.container4 {
  background-image: url("/imgs/token1.png");
  background-size: cover;
  height: 888px;
  width: 644px;
  padding-right: 66px;
  padding-left: 60px;
  padding-top: 87px;
}
.id {
  width: 463px;
  height: 37px;
  border: #f36cf7 solid 1px;
  border-radius: 4px;
  text-align: center;
}
.id1 {
  width: 463px;
  height: 37px;
  border: #009d9e solid 1px;
  border-radius: 4px;
  text-align: center;
}

.btn-red {
  background-image: url("/imgs/red_button.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 134px;
  height: 45px;
  text-align: center;
  font-size: 20px;
  line-height: 45px;
  color: #dd51e2;
}

.btn-green {
  background-image: url("/imgs/green_button.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 134px;
  height: 45px;
  text-align: center;
    font-size: 20px;
  line-height: 45px;
  color:#009d9e;
}
</style>