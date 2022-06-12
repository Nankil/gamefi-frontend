<template>
    <!-- 查看所有会员功能權限及階級 -->
    <div class="seeAll">
        <ul>
            <li
                v-for="(item,idx) of info"
                :key="idx"
                :class="{active:item.title==$route.meta.title}"
                @click="go(item.path,idx)"
            >
                <p>會員權限與獎勵</p>
                <p>({{item.title}})</p>
            </li>
        </ul>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0,   //选项卡切换
            info: [
                {
                    path: 'seedWheel',
                    title: '種子輪'
                },
                {
                    path: 'privateWheel',
                    title: '私募轮'
                },
                {
                    path: 'presaleWheel',
                    title: '預售輪'
                },
                {
                    path: 'ordinary',
                    title: '普通'
                },
            ],
        }
    },
    methods: {
        go(path, idx) {    //选项卡切换、跳转
            this.index = idx
            this.$router.push(path)
        }
    }
}
</script>

<style lang="less" scoped>
.seeAll {
    margin-top: -12px;
}
ul {
    display: flex;
    li {
        flex: 1;
        color: #525252;
        font-size: 32px;
        font-family: PingFang-SC-Bold;
        height: 155px;
        background: rgba(215, 215, 215, 0.6);
        border: 1px solid white;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &.active {
            background: rgba(255, 255, 255, 0.6);
        }
    }
}
</style>