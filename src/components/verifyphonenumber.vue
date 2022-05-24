<template>
  <div class="bg">
    <div class="first">验证码发送过于频繁</div>
    <div class="second">请稍后重试</div>
    <div class="third">剩余时间</div>
    <div class="fourth">
      <span class="number" style="margin-right:5px">2</span>
      <span class="number" style="margin-right:22px">9</span>
      <span class="number" style="margin-right:5px">4</span>
      <span class="number">3</span>
    </div>
    <div class="fifth"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.fifth{
    background-image: url("/imgs/确认.svg");
    height: 59px;
    width: 182px;
    margin: 0 auto;
    margin-top:36px ;
}
.fourth{
    height: 60px;
    text-align: center;
    margin-top: 18px;
}
.number {
  background-color: #c745dc;
  height: 60px;
  width: 40px;
  font-family: PingFanf-Bold;
  color: #fff;
    font-size: 60px;
  margin:0 2px;
}
.bg {
  background-image: url("/imgs/验证手机4.svg");
  width: 709px;
  height: 417px;
}
.first {
  font-family: PingFang-Bold;
  font-size: 29px;
  line-height: 29px;
  color: #5a5a5a;
  text-align: center;
  padding-top: 94px;
}
.second {
  font-family: PingFang-Bold;
  font-size: 29px;
  line-height: 29px;
  color: #5a5a5a;
  text-align: center;
  padding-top: 21px;
}
.third {
  font-family: PingFang-Bold;
  font-size: 23px;
  line-height: 23px;
  color: #c745dc;
  text-align: center;
  padding-top: 24px;
}
</style>