<template>
    <!-- 首页导航--左边 -->
    <div class="nav-container">
        <div class="w-full router-wrapper">
            <div
                v-for="item in $tm('home.navber')"
                :key="item"
                @click="$router.push(item.path)"
                class="flex flex-col justify-center items-center text-center"
            >
                <!-- 背景亮 -->
                <div
                    v-if="$route.path == item.path"
                    class="dark:text-white selected router-btn"
                    :style="{'font-size':language?'21px':'27px'}"
                >{{ item.title}}</div>
                <!-- 背景不亮 -->
                <div
                    v-else
                    class="dark:text-white router-btn"
                    :style="{'font-size':language?'21px':'27px'}"
                >{{ item.title }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        language() {    //判断当前是什么语言
            if (this.$i18n.locale == "EN") return true
            return false
        }
    }
};
</script>

<style lang="less" scoped>
.nav-container {
    width: 247px;
    margin-top: 30px;

    .router-wrapper {
        // margin-top: 17px;
        background-image: url("@/assets/imgs/nav_left.png");
        background-size: 100% 1079px;
        height: 1055px;
        padding: 60px 0 31px 0;
        display: flex;
        flex-flow: column;
        > div {
            flex: 1;
            cursor: pointer;

            .router-btn {
                height: 56px;
                width: 185px;
                line-height: 56px;
            }
            .selected {
                background-image: url("@/assets/imgs/侧边栏选中图标.svg");
                background-size: 185px 57px;
            }
        }
    }
}
</style>
