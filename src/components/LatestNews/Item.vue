<template>
    <!-- 最新消息-单个组件 -->
    <div class="item">
        <div class="time2">2022.6.06</div>
        <div class="flex">
            <img width="414" src alt />
            <div style="padding-left: 50px">
                <div class="title">基因玩家达成共识</div>
                <div class="time">15:35发布</div>
                <div class="detail">基因玩家达成共识</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.item {
    height: 300px;
    margin-top: 21px;
    background: url("@/assets/imgs/消息边框.svg") no-repeat;
    background-size: 100%;
}
.time2 {
    font-size: 26px;
    color: #fff;
    line-height: 26px;
    text-align: right;
    padding-right: 20px;
    justify-content: center;
    padding-top: 5px;
}
.detail {
    font-family: PingFang-regular;
    font-size: 26px;
    line-break: 26px;
    color: #676767;
}
.time {
    font-size: 23px;
    line-height: 23px;
    color: #5a5a5a;
    padding-top: 26px;
}
.bg1 {
    width: 1302px;
    height: 299px;
    overflow: hidden;
}
img {
    background-color: red;
    margin-top: 23px;
    margin-left: 25px;
    height: 221px;
}
.title {
    font-size: 41px;
    line-height: 41px;
    color: #000;
    padding-top: 65px;
}
</style>