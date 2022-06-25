<template>
    <!-- 注册成功（无推荐人）--弹窗 -->
    <div class="nothingToRegister">
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
        <div class="button" @click="$router.push('/account/info/basic')"></div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nothingToRegister {
    background-image: url("@/assets/imgs/注册成功无推荐码2.svg");
    width: 709px;
    height: 633px;
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
    margin-top: 36px;
    cursor: pointer;
}
</style>