<template>
    <!-- 首页导航 -->
    <div class="nav-container">
        <div class="w-full router-wrapper">
            <div
                v-for="route in routes"
                :key="route"
                @click="go(route)"
                class="content flex flex-col items-center text-center single-router"
            >
                <div
                    v-if="matchOfCurrentPath==route.name"
                    class="dark:text-white selected router-btn"
                >{{ route.display_name }}</div>
                <div v-else class="dark:text-white router-btn">{{ route.display_name }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['routes'],
    data() {
        return {
        };
    },
    computed: {
        currentRoutePath() {
            return this.$route.path;
        },
        matchOfCurrentPath() {
            if (this.currentRoutePath === '/') {
                return this.routes[0].name;
            } else {
                const match = this.routes.filter((route) => route.path != '/').find(
                    (route) => this.currentRoutePath.startsWith(route.path),
                );
                if (match) {
                    return match.name;
                } else {
                    return '';
                }
            }
        },
    },
    methods: {
        go(route) {    //跳转页面
            if (route.display_name === "賬戶") {
                this.$router.push("/account/info/basic")
                return
            }
            this.$router.push(route.path)
        }
    }
};
</script>

<style scoped>
.nav-container {
    background-image: url("/imgs/nav_left.png");
    background-size: 100% 100%;
    width: 247px;
    height: 1087px;
    padding-top: 37px;
}
.selected {
    background-image: url("/imgs/nav_selected.png");
    background-size: 185px 56px;
}

.router-btn {
    height: 56px;
    width: 185px;
    font-size: 27px;
    line-height: 56px;
}

.single-router {
    margin-bottom: 27px;
}

.router-wrapper {
    margin-top: 17px;
}
.content {
    cursor: pointer;
}
</style>
