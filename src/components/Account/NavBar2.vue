<template>
    <!-- 我的资料、推荐管理......的选项卡 -->
    <div class="father" style="padding-top:48px;padding-bottom:60px;">
        <div v-for="item in $tm('account.routes')" :key="item" @click="jumpPage(item.path)">
            <!-- 注册页面时 -->
            <button
                v-if="$route.path=='/account/register'"
                class="unchecked register"
                style="cursor:unset"
            >{{ item.title }}</button>

            <!-- 选中 -->
            <button
                v-else-if="$route.path == item.path || myProfilePath == item.path"
                class="w-full selected"
            >{{ item.title }}</button>
            <!-- 未选中 -->
            <button v-else class="unchecked">{{ item.title }}</button>
        </div>
    </div>
</template>


<script>
export default {
    computed: {
        myProfilePath() {   //我的资料路径   判断是否为"查看所有会员权限功能与进度"那一页,让选项卡"我的资料"为点亮状态
            let boo = this.$route.path.includes('basic') || this.$route.path.includes('seeAll')
            if (boo) {
                return '/account/info'
            }
        }
    },
    methods: {
        jumpPage(path) {    //跳转页面
            if (this.$route.path == '/account/register') {
                return
            } else {
                this.$router.push(path)
            }

        }
    }
};
</script>

<style scoped>
.father {
    display: flex;
    justify-content: space-between;
}

.father button:focus {
    outline: none;
}

.unchecked {
    background-image: url("@/assets/imgs/nav2_button.svg");
    background-repeat: no-repeat;
    height: 75px;
    width: 211px;
    font-family: PingFang-Bold;
    font-size: 32px;
    line-height: 32px;
    color: #6b6b6b;
}

.register {
    background: url("@/assets/imgs/Account/按钮_画板 1.svg") no-repeat !important;
}

.selected {
    background: url("@/assets/imgs/nav2_button_selected.svg");
    background-repeat: no-repeat;
    height: 75px;
    width: 211px;
    font-family: PingFang-Bold;
    font-size: 32px;
    line-height: 32px;
    color: #fff;
}
</style>
