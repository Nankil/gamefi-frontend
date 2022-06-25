<template>
    <!-- 最新消息 -->
    <div class="latestNews">
        <!-- 返回和首页 -->
        <div class="returnAndHome">
            <!-- <img src alt />
            <img src alt />-->
        </div>

        <LatestnewslistVue></LatestnewslistVue>
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
export default {};
</script>

<script setup>
import LatestnewslistVue from "@/components/Latestnewslist.vue";
</script>

<style lang="less" scoped>
.latestNews {
    width: 1302px;
    padding-top: 7px;
    position: relative;
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