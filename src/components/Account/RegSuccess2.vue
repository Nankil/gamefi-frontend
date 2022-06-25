<template>
    <!-- 注册成功（有推荐人）--弹窗 -->
    <div class="thereIsASuccessfulRegistration">
        <div style="text-align: center;padding-top: 42px;">
            <img
                style="display:inline-block"
                src="@/assets/imgs/logo.svg"
                width="278"
                height="297"
                alt
            />
        </div>
        <div class="first">恭喜注册成功</div>
        <div class="second">会员功能已为您开启</div>
        <div class="tip">获得20积分奖励可至我的积分查看</div>
        <div class="tip" style="margin-top:20px;">积分可用于盲盒页面兑换</div>
        <div class="button" @click="$router.push('/account/info/basic')"></div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.thereIsASuccessfulRegistration {
    background-image: url("@/assets/imgs/注册成功有推荐码2.svg");
    width: 709px;
    height: 744px;
}
.first {
    font-family: PingFang-Bold;
    font-size: 42px;
    line-height: 42px;
    color: #3ccbf6;
    text-align: center;
    padding-top: 41px;
}
.second {
    font-family: PingFang-Bold;
    font-size: 42px;
    line-height: 42px;
    color: #ca44cd;
    text-align: center;
    padding-top: 24px;
}
.button {
    background-image: url("@/assets/imgs/开始旅程.svg");
    height: 59px;
    width: 182px;
    margin: 0 auto;
    margin-top: 60px;
    cursor: pointer;
}
.tip {
    font-family: PingFang-Bold;
    font-size: 19px;
    line-height: 19px;
    color: #5a5a5a;
    text-align: center;
    margin-top: 40px;
}
</style>