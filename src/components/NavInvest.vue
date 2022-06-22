<template>
    <div class="w-full">
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
        info() {
            return this.$tm('home.investAuthority')
        }
    }
}
</script>

<style scoped>
.w-full {
    padding-top: 91px;
    height: 374px;
    background: url("@/assets/imgs/已开放投资权限en.svg") no-repeat;
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
