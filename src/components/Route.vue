<template>
    <!-- 导航 -->
    <div class="route flex flex-row">
        <span @click="$router.push('/')">网站首页</span>

        <div class="con" v-for="item of routers" :key="item.path">
            <div class="divider">></div>
            <span @click="$router.push(item.path)">{{item.meta.name}}</span>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        routers() {    //各个层级的所有路由信息
            //this.$route.matched方法可以获取各个层级的所有路由信息，包括path、meta......
            //filter()是为了剔除掉不需要的路由信息，如"/account/info/basic"这个页面的路由信息不需要用到
            let arr = this.$route.matched.filter(item => {
                return item.meta.name
            })

            return arr
        }

    }

};
</script>

<style lang="less" scoped>
.route {
    font-family: PingFang;
    font-size: 24px;

    .con {
        display: flex;

        .divider {
            margin: -1px 18px;
        }
    }

    span {
        cursor: pointer;
    }
}
</style>
