<template>
<div class="w-full">
  <div class="invest-open"></div>
  <div class="w-full invest-container">
      <div class="w-full invest-tab1 tab">
        <a href="/account/investment">种子轮</a>
      </div>
      <div class="w-full invest-tab2 tab">
        <a href="/account/investment">私募轮</a>
      </div>
      <div class="w-full invest-tab3 tab">
        <a href="/account/investment">预售轮</a>
      </div>
    </div>
</div>

</template>

<style scoped>
.invest-container {
  background-image: url('@/assets/imgs/invest_container.png');
  width: 246px;
  height: 319px;
  background-size: 100% 100%;
  position: absolute;
}
.invest-tab1 {
  background-image: url('@/assets/imgs/invest_tab1.png');
  background-size: 100% 100%;
  margin-top: 34px;
}

.invest-tab2 {
  background-image: url('@/assets/imgs/invest_tab2.png');
  background-size: 100% 100%;
}

.invest-tab3 {
  background-image: url('@/assets/imgs/invest_tab3.png');
  background-size: 100% 100%;
}
.tab {
  width: 187px;
  height: 61px;
  margin-bottom: 18px;
  margin-left: 24px;
}
.invest-open {
  background-image: url('@/assets/imgs/invest_open.png');
  background-size: 100% 100%;
  width: 246px;
  height: 63px;
  margin-bottom: -2px;
}

.tab > a {
  margin-top: 21px;
  margin-left: 64px;
  position: absolute;
  color: #8e8e8e;
  font-size: 23px;
  font-family: 'PingFang-medium';
}
</style>
