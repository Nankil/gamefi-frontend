<template>
    <div class="bg">
        <div class="nav">
            网站首页
            <img
                style="display: inline; height: 26px"
                src="@/assets/imgs/箭头4.svg"
                height="26"
                width="30"
                alt
            />
            最新消息
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

<style scoped>
.number {
    margin-left: 47px;
    font-style: 32px;
    line-height: 32px;
    color: #000;
}
.bg {
    padding-left: 125px;
    padding-top: 25px;
}
.nav {
    font-family: PingFang-regular;
    font-size: 26px;
    line-break: 26px;
    color: #5d5d5d;
}
</style>