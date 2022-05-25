<template>
  <div class="bg">
    <div class="tip" style="padding-top: 91px">1</div>
    <div class="tip" style="padding-top: 21px">2</div>
    <div class="tip2" style="padding-top: 27px">2</div>
    <div class="tip2" style="padding-top: 13px">2</div>
    <div class="tip2" style="padding-top: 13px">2</div>
    <div class="resend"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg {
  background-image: url("/imgs/未验证成功2.svg");
  width: 709px;
  height: 417px;
}
.tip {
  font-family: PingFang-Bold;
  font-size: 29px;
  text-align: center;
  line-height: 29px;
  color: #5a5a5a;
  text-align: center;
}
.tip2 {
  font-family: PingFang-Bold;
  font-size: 23px;
  text-align: center;
  line-height: 23px;
  color: #525252;
  text-align: center;
}
.resend{
    background-image: url("/imgs/重新发送.svg");
    height: 59px;
    width: 183px;
    margin: 0 auto;
    margin-top: 36px;
}
</style>