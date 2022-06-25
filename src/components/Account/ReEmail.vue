<template>
    <!-- 重发电子邮件-确认键 -->
    <div class="reEmail">
        <p>電子郵件驗證信已重新發送至您的電子郵箱中</p>
        <img src="@/assets/imgs/确认.svg" alt="确认" @click="closure" />
    </div>
</template>

<script>
export default {
    methods: {
        closure() {
            this.$emit('aaa')
        }
    }
}
</script>

<style lang="less" scoped>
.reEmail {
    height: 202px;
    width: 709px;
    padding-top: 55px;
    background: url("@/assets/imgs/Account/新增边框.svg");
    p {
        text-align: center;
        font-family: PingFang-SC-Bold;
        font-size: 29px;
        color: #5a5a5a;
        margin-bottom: 20px;
    }
    img {
        width: 183px;
        margin: 0 auto;
        cursor: pointer;
    }
}
</style>