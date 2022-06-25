<template>
    <!-- 社区金库和用户统计 -->
    <div class="valleyAndStatistics">
        <!-- 社区金库 -->
        <div
            class="container3 flex flex-col"
            :class="{container3Bgzh:language=='ZH',container3Bgcn:language=='CN',container3Bgen:language=='EN'}"
        >
            <div class="totalAssets">
                <div class="totalAssetsTitle">{{$tm('home.communityVault')}}</div>
                <div class="totalassets1">≈ $1,800,000,000</div>
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
        <div
            class="container4 flex flex-col"
            :class="{container4Bgzh:language=='ZH',container4Bgcn:language=='CN',container4Bgen:language=='EN'}"
            ref="graphs"
        >
            <div class="con">
                <!-- 近7天新增量文本 -->
                <div
                    class="increase"
                    :class="{'en':language=='EN'}"
                >{{$tm('home.statistics.increase')}}</div>

                <!-- 文本 -->
                <ul class="text">
                    <li v-for="item of statistics" :key="item">{{item}}</li>
                </ul>

                <!-- 数据 -->
                <ul class="userData">
                    <li v-for="item of userData" :key="item">
                        <span>{{item.num}}</span>
                        <img :src="item.img" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import CoinInfo from '@/components/Home/CoinInfo.vue';

export default {
    data() {
        return {
            userData: [
                { num: 9524, img: "https://picsum.photos/id/2/125/49" },
                { num: 15453, img: "https://picsum.photos/id/2/125/49" },
                { num: 4951, img: "https://picsum.photos/id/2/125/49" },
                { num: 959, img: "https://picsum.photos/id/2/125/49" },
                { num: 289, img: "https://picsum.photos/id/2/125/49" },
                { num: 3484, img: "https://picsum.photos/id/2/125/49" }
            ]
        }
    },
    components: {
        CoinInfo
    },
    computed: {
        language() {    //当前语言
            return this.$i18n.locale
        },
        statistics() {    //用户统计数量 -- 文本
            return this.$tm('home.statistics.con')
        }
    }
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
    height: 736px;
    width: 629px;
    flex-shrink: 0;
}
.container3Bgzh {
    background: url("@/assets/imgs/社区金库zh.svg") no-repeat;
}
.container3Bgcn {
    background: url("@/assets/imgs/社区金库cn.svg") no-repeat;
}
.container3Bgen {
    background: url("@/assets/imgs/社区金库en.svg") no-repeat;
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
    padding: 49px 55px 0 53px;
}
.container4 {
    height: 736px;
    width: 629px;
    padding-right: 61px;
    padding-left: 64px;
    padding-top: 119px;
    flex-shrink: 0;
}
.container4Bgzh {
    background: url("@/assets/imgs/用户数量统计zh.svg") no-repeat;
}
.container4Bgcn {
    background: url("@/assets/imgs/用户数量统计cn.svg") no-repeat;
}
.container4Bgen {
    background: url("@/assets/imgs/用户数量统计en.svg") no-repeat;
}
.container4 .con {
    font-family: PingFang-SC-Regular;
    font-size: 19px;
    color: rgba(45, 45, 45, 0.8);
    position: relative;
    .increase {
        width: 170px;
        text-align: right;
        line-height: 18px;
        position: absolute;
        top: 0;
        right: 12px;
        letter-spacing: 2px;

        &.en {
            top: -19px;
            right: 0px;
            letter-spacing: 0;
        }
    }
    .text {
        li {
            margin-bottom: 65px;
        }
    }

    .userData {
        margin-top: -536px;
        li {
            font-family: PingFang-SC-Bold;
            font-size: 39px;
            color: #28c2c2;
            margin-bottom: 35px;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>
