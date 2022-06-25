<template>
    <!-- 最新消息 -->
    <div class="latestNews">
        <!-- 返回和首页 -->
        <div class="returnAndHome">
            <img src="@/assets/imgs/返回.svg" @click="$router.go(-1)" alt="return" />
            <img src="@/assets/imgs/首页图标.svg" @click="$router.push('/')" alt="home" />
        </div>

        <Item />
        <div style="margin-left: 377px;">
            <div class="flex" style="width: fit-content; padding-top: 50px">
                <img src="@/assets/imgs/上一页.svg" alt />

                <div v-for="x in 9" :key="x" class="number">{{ x }}</div>

                <img src="@/assets/imgs/下一页2.svg" alt style="margin-left: 47px" />
            </div>
        </div>
    </div>
</template>

<script>
import Item from "@/components/LatestNews/Item.vue"
export default {
    components: {
        Item
    }
}
</script>

<style lang="less" scoped>
.latestNews {
    width: 1302px;
    padding-top: 1px;
    position: relative;
    .returnAndHome {
        position: absolute;
        top: -31px;
        right: 0;
        display: flex;
        img {
            margin-left: 8px;
            cursor: pointer;
        }
    }
}
.number {
    margin-left: 47px;
    font-style: 32px;
    line-height: 32px;
    color: #000;
}
.nav {
    font-family: PingFang-regular;
    font-size: 26px;
    line-break: 26px;
    color: #5d5d5d;
}
</style>