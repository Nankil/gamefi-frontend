<template>
<div class="w-full">
  <div class="invest-open h-14"></div>
  <div class="w-full invest-container p-4">
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
  background-image: url('/imgs/invest_container.png');
  width: 247px;
  height: 320px;
  background-size: 100% 100%;
}
.invest-tab1 {
  background-image: url('/imgs/invest_tab1.png');
  background-size: 100% 100%;
  margin-top: 15px;
}

.invest-tab2 {
  background-image: url('/imgs/invest_tab2.png');
  background-size: 100% 100%;
}

.invest-tab3 {
  background-image: url('/imgs/invest_tab3.png');
  background-size: 100% 100%;
}
.tab {
  width: 189px;
  height: 62px;
  margin-bottom: 23px;
  margin-left: 22px;
  margin-right: 34px;
}
.invest-open {
  background-image: url('/imgs/invest_open.png');
  background-size: 100% 100%;
  height: 70px;
  margin-bottom: -19px;
}

.tab > a {
  margin-top: 28px;
  margin-left: 64px;
  position: absolute;
  color: #8e8e8e;
  font-size: 23px;
}
</style>
