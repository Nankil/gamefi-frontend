<template>
    <div class="bg">
        <div class="tip" style="padding-top: 91px">請再次至您填寫的電子郵件中</div>
        <div class="tip" style="padding-top: 21px">打開驗證簡訊並點擊『驗證電郵郵件』</div>
        <div class="tip2" style="padding-top: 27px">如果您尚未收到驗證電子郵件，</div>
        <div class="tip2" style="padding-top: 13px">請查看『垃圾郵件』或『廣告電子郵件』檔案夾，</div>
        <div class="tip2" style="padding-top: 13px">您也可以在下麵選擇重寄按鈕，要求再寄一次</div>
        <div class="resend" @click="jump"></div>
        <div class="delete" @click="deleteEl">X</div>
    </div>
</template>

<script>
export default {
    methods: {
        jump() {
            this.$emit('aaa')
        },
        deleteEl() {
            this.$emit('bbb')
        }

    }
};
</script>

<style scoped>
.bg {
    background-image: url("@/assets/imgs/未验证成功2.svg");
    width: 709px;
    height: 417px;
    position: relative;
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
.resend {
    background-image: url("@/assets/imgs/确认.svg");
    height: 59px;
    width: 183px;
    margin: 0 auto;
    margin-top: 36px;
    cursor: pointer;
}

.delete {
    position: absolute;
    top: 71px;
    right: 42px;
    font-size: 22px;
    cursor: pointer;
}
</style>