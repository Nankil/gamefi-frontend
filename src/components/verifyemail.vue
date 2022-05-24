<template>
  <div class="bg">
    <div class="first">我们已将电子邮件发送到您的邮箱</div>
    <div class="second">Please check your email</div>
    <div class="tip" style="margin-top: 12px">
      您必须在五分钟内验证电子邮箱，才能完成注册并开启会员！
    </div>
    <div class="tip" style="margin-top: 25px">
      如果您尚未收到验证电子邮件，请查看垃圾邮件或广告电子邮件
    </div>
    <div style="margin-top: 9px" class="tip">您也可以在下面按钮重新发送</div>
    <div class="resend"></div>
    <div class="resend2">重新验证电子邮件</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.resend{
    background-image: url("/imgs/自动跳转按钮.svg");
    height: 58px;
    width: 367px;
    margin: 0 auto;
    margin-top: 36px;
}
.resend2{
    font-family: PingFang-Bold;
    font-size: 15px;
    line-height: 15px;
    color: #c745dc;
    text-align: center;
    padding-top: 8px;
}
.bg {
  background-image: url("/imgs/验证邮箱.svg");
  width: 709px;
  height: 424px;
}
.first {
  font-family: PingFang-Bold;
  font-size: 26px;
  line-height: 26px;
  color: #5a5a5a;
  padding-top: 95px;
  padding-left: 37px;
}
.second {
  width: 636px;
  height: 54px;
  font-family: PingFang-Bold;
  font-size: 29px;
  line-height: 29px;
  color: #55c9ec;
  padding-top: 21px;
  padding-left: 37px;
}
.tip {
  font-family: PingFang-Bold;
  font-size: 16px;
  text-align: center;
  line-height: 16px;
  color: #525252;
}
</style>