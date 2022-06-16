<script>
export default {
    props: ['routes'],
    computed: {
        currentRoutePath() {    //当前路由路径
            return this.$route.path;
        },
        boo() {    //判断是否为"查看所有会员权限功能与进度"那一页,让选项卡"我的资料"为点亮状态
            let boo = this.$route.path.includes('seeAll') || this.$route.path.includes('basic')
            if (boo) {
                return '/account/info/basic'

            } else {
                return 'aaaa'
            }
        }
    }
};
</script>

<template>
    <div class="father" style="padding-top:48px;padding-bottom:60px;">
        <div v-for="route in routes" :key="route" @click="this.$router.push(route.path)">
            <!-- 选中 -->
            <button
                v-if="(currentRoutePath == route.path) || (boo == route.path)"
                class="w-full selected"
            >{{ route.display_name }}</button>
            <!-- 未选中 -->
            <button v-else class="register">{{ route.display_name }}</button>
        </div>
    </div>
</template>
<style scoped>
.father {
    display: flex;
    justify-content: space-between;
}

.register {
    background-image: url("/imgs/nav2_button.svg");
    background-repeat: no-repeat;
    height: 75px;
    width: 211px;
    font-family: PingFang-Bold;
    font-size: 32px;
    line-height: 32px;
    color: #6b6b6b;
}

.selected {
    background: url("/imgs/nav2_button_selected.svg");
    background-repeat: no-repeat;
    height: 75px;
    width: 211px;
    font-family: PingFang-Bold;
    font-size: 32px;
    line-height: 32px;
    color: #fff;
}
</style>
