<template>
    <div class="valleyAndStatistics">
        <!-- 社区金库 -->
        <div class="container3 flex flex-col">
            <div class="totalAssets">
                <div class="totalAssetsTitle">总资产</div>
                <div class="totalassets1">=$1,800,000,000</div>
            </div>

            <div class="coininfo">
                <CoinInfo />
                <CoinInfo />
                <CoinInfo />
                <CoinInfo />
                <CoinInfo />
                <CoinInfo />
            </div>
        </div>

        <!-- 用户数量统计 -->
        <div class="container4 flex flex-col" ref="graphs">
            <div v-for="stat in user_stats" :key="stat.title" class>
                <div v-if="stat.title == user_stats[0].title" class="incre">近七天增量</div>
                <div class="incre-stat">
                    <IncreStat :title="stat.title" :incre="stat.incre" :data="stat.data" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CoinInfo from '@/components/CoinInfo.vue';
import IncreStat from '@/components/IncreStat.vue';

export default {
    data() {
        return {
            user_stats: [
                {
                    title: '会员注册人数',
                    incre: '9524',
                    data: [1, 2, 43, 4],
                },
                {
                    title: 'GPC地址数',
                    incre: '15453',
                    data: [1, 2, 43, 4],
                },
                {
                    title: 'SSC地址数',
                    incre: '10481',
                    data: [1, 2, 43, 4],
                },
                {
                    title: '电报人数',
                    incre: '24567',
                    data: [1, 2, 43, 4],
                },
                {
                    title: 'DC人数',
                    incre: '20013',
                    data: [1, 2, 43, 4],
                },
                {
                    title: 'twitter追踪数',
                    incre: '10088',
                    data: [1, 2, 43, 4],
                },
            ],
        };
    },
    components: {
        CoinInfo,
        IncreStat,
    },
    computed: {},
    methods: {},
};
</script>-

<style lang="less" scoped>
.valleyAndStatistics {
    width: 1345px;
    display: flex;
    justify-content: space-between;

    .totalAssets {
        width: 521px;
        margin: 0 auto;
        // height: 223px;
        padding: 91px 0 45px 0;
        border-bottom: 1px solid #f36cf7;

        .totalAssetsTitle {
            font-size: 19px;
            color: #252525;
            font-weight: PingFang-SC-Regular;
            margin-bottom: 9px;
        }
    }
}
.container3 {
    background-image: url("@/assets/imgs/comm_vouch.png");
    background-size: cover;
    height: 758px;
    width: 647px;
    flex-shrink: 0;
}
.totalassets1 {
    width: 439px;
    padding-left: 40px;
    font-size: 49px;
    font-family: DIN-Black;
    color: #f36cf7;
    line-height: 49px;
    text-align: left;
}
.coininfo {
    padding-top: 49px;
    padding-left: 60px;
    padding-right: 68px;
}
.container4 {
    background-image: url("@/assets/imgs/user_stat.png");
    background-size: cover;
    height: 758px;
    width: 647px;
    padding-right: 64px;
    padding-left: 60px;
    padding-top: 117px;
    flex-shrink: 0;
}

.btn-red {
    background-image: url("@/assets/imgs/red_button.svg");
    background-size: 100% 100%;
    padding: 3%;
}

.btn-green {
    background-image: url("@/assets/imgs/green_button.svg");
    background-size: 100% 100%;
    padding: 3%;
}

.incre {
    position: absolute;
    width: 120px;
    margin-left: 401px;
    line-break: unset;
    font-size: 19px;
    margin-bottom: 10px;
    font-family: PingFang;
}
.incre-stat {
    height: 98px;
}
</style>
