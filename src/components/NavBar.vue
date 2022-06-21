<template>
    <!-- 首页导航 -->
    <div class="nav-container">
        <div class="w-full router-wrapper">
            <div
                v-for="item in $tm('home.navber')"
                :key="item"
                @click="$router.push(item.path)"
                class="flex flex-col items-center text-center"
            >
                <!-- 背景亮 -->
                <div
                    v-if="$route.path == item.path"
                    class="dark:text-white selected router-btn"
                    :style="{'font-size':language}"
                >{{ item.title}}</div>
                <!-- 背景不亮 -->
                <div
                    v-else
                    class="dark:text-white router-btn"
                    :style="{'font-size':language}"
                >{{ item.title }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        language() {
            if (this.$i18n.locale == "EN") {
                return '21px'
            }

            return '27px'
        }
    }
};
</script>

<style lang="less" scoped>
.nav-container {
    background-image: url("@/assets/imgs/nav_left.png");
    background-size: 100% 100%;
    width: 247px;
    padding-top: 37px;

    .router-wrapper {
        height: 1054px;
        margin-top: 17px;
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
                background-image: url("@/assets/imgs/nav_selected.png");
                background-size: 185px 56px;
            }
        }
    }
}
</style>
