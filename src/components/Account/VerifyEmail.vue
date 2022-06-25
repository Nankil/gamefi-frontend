<template>
    <!-- 验证您的邮箱--弹窗 -->
    <div class="verifyYourMailbox">
        <div class="first">我們已將電子郵件發送至</div>
        <div class="second">{{email}}</div>
        <div class="tip" style="margin-top: 12px">您必須在五分鐘內驗證電子郵箱，才能完成注册並開啟會員！</div>
        <div class="tip" style="margin-top: 25px">如果您尚未收到驗證電子郵件，請查看『垃圾郵件』或『廣告電子郵件』檔案夾，</div>
        <div style="margin-top: 9px" class="tip">您也可以在下面選擇重寄按鈕，要求再寄一次！</div>
        <div class="resend" @click="jumpPage"></div>
        <div class="resend2" @click="resend">重新驗證電子郵件</div>
        <div class="delete" @click="deleteEl">X</div>
    </div>
</template>

<script>
export default {
    props: ['email'],
    methods: {
        jumpPage() {
            this.$emit('aaa')
        },
        resend() {
            this.$emit('bbb')
        },
        deleteEl() {
            this.$emit('ccc')
        }
    }
};
</script>

<style scoped>
.resend {
    background-image: url("@/assets/imgs/自动跳转按钮.svg");
    height: 58px;
    width: 367px;
    margin: 0 auto;
    margin-top: 36px;
    cursor: pointer;
}
.resend2 {
    font-family: PingFang-Bold;
    font-size: 15px;
    line-height: 15px;
    color: #c745dc;
    text-align: center;
    padding-top: 8px;
    cursor: pointer;
    text-decoration: underline;
}
.verifyYourMailbox {
    background-image: url("@/assets/imgs/验证邮箱.svg");
    width: 709px;
    height: 424px;
    position: relative;
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
    line-height: 54px;
    text-align: center;
    font-family: PingFang-Bold;
    font-size: 29px;
    color: #55c9ec;
    padding-left: 37px;
    border: 1px solid #55c9ec;
    margin: 10px auto 0;
}
.tip {
    font-family: PingFang-Bold;
    font-size: 16px;
    text-align: center;
    line-height: 16px;
    color: #525252;
}
.delete {
    position: absolute;
    top: 71px;
    right: 42px;
    font-size: 22px;
    cursor: pointer;
}
</style>