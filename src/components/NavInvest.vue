<template>
<div class="w-full">
  <div class="invest-open h-12"></div>
  <div class="w-full invest-container p-4">
      <div class="w-full invest-tab1 tab">
        <a href="/account/investment">seeds</a>
      </div>
      <div class="w-full invest-tab2 tab">
        <a href="/account/investment">seeds</a>
      </div>
      <div class="w-full invest-tab3 tab">
        <a href="/account/investment">seeds</a>
      </div>
    </div>
</div>

</template>

<style scoped>
.invest-container {
  background-image: url('/imgs/invest_container.png');
  background-size: 100% 100%;
  padding-top: 10%;
  padding-bottom: 20%;
  padding-left: 10%;
  padding-right: 20%;
}
.invest-tab1 {
  background-image: url('/imgs/invest_tab1.png');
  background-size: 100% 100%;
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
  padding: 10%;
  margin-top: 10%;
  margin-bottom: 10%;
}
.invest-open {
  background-image: url('/imgs/invest_open.png');
  background-size: 100% 100%;
  margin-bottom: -8%;
}
</style>
