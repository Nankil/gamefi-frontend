<template>
    <!-- 首页 --- 已开放投资权限 -->
    <div class="w-full">
        <div class="w-full-title" :style="{'font-size':language?'15px':'19px'}">{{info.title}}</div>
        <div class="invest-container">
            <div class="tab">
                <a href="/account/investment">{{info.seedWheel}}</a>
            </div>
            <div class="tab">
                <a href="/account/investment">{{info.privateOfferings}}</a>
            </div>
            <div class="tab">
                <a href="/account/investment">{{info.preSaleRound}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        info() {       //拿文本
            return this.$tm('home.investAuthority')
        },
        language() {    //判断当前是什么语言
            if (this.$i18n.locale == "EN") return true
            return false
        }
    }
}
</script>

<style lang="less" scoped>
.w-full {
    height: 374px;
    background: url("@/assets/imgs/已开放投资权限无字边框.svg") no-repeat;

    .w-full-title {
        color: #c050c5;
        font-family: PingFang-SC-Bold;
        padding: 14px 28px 43px 52px;
        text-align: center;
        line-height: 33px;
    }
}

.invest-container {
    width: 246px;
    height: 319px;
    background-size: 100% 100%;
    position: absolute;
}
.tab {
    width: 187px;
    height: 61px;
    margin-bottom: 18px;
    margin-left: 24px;
    background-image: url("@/assets/imgs/投资权限 边框.svg");
    background-size: 100% 100%;
}
.tab > a {
    display: block;
    width: 100%;
    height: 100%;
    color: #c050c5;
    text-align: center;
    font-size: 21px;
    font-family: "PingFang-SC-Bold";
    padding-top: 21px;
}
</style>
