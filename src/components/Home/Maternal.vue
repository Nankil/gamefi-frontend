<template>
    <!-- 母币、子币 -->
    <div
        class="maternal"
        :class="{motherBgZH:language=='ZH' && type=='mother',motherBgCN:language=='CN'  && type=='mother',motherBgEN:language=='EN'  && type=='mother',
                 sonBgZH:language=='ZH'  && type=='son',sonBgCN:language=='CN'  && type=='son',sonBgEN:language=='EN'  && type=='son',
                 mother:type=='mother',son:type=='son'}"
    >
        <!-- 头像部分 -->
        <div class="maternal-avatar token-head">
            <img src="https://picsum.photos/id/2/100/100" />
            <div>
                <div class="token-title">Gene Player Coin</div>
                <div class="token-symbol">(SSC / BNB)</div>
            </div>
        </div>

        <!-- 中间部分 -->
        <div class="maternal-center">
            <ul class="left">
                <li v-for="item of maternal.center" :key="item">{{item}}</li>
            </ul>

            <ul class="right">
                <li v-for="item of information" :key="item">{{item}}</li>
            </ul>
        </div>

        <!-- 合约地址 -->
        <div class="maternal-address">
            <div class="bsc">Binance Smart Chain</div>
            <div class="gpc" :class="{en:language=='EN'}">({{maternal.GPC}})</div>
            <div class="address">
                <div class="text">{{contractAddress}}</div>
                <div class="border"></div>
                <img
                    src="@/assets/imgs/母币复制.svg"
                    alt="copy"
                    @click="copyText($refs.img,contractAddress)"
                    ref="img"
                    v-if="type=='mother'"
                />
                <img
                    src="@/assets/imgs/子币复制.svg"
                    alt="copy"
                    @click="copyText($refs.img,contractAddress)"
                    ref="img"
                    v-else
                />
            </div>
        </div>

        <!-- 底部 -->
        <ul class="bottom">
            <li
                v-for="(item,index) of maternal.bottom"
                :key="item"
                :class="{mother:type=='mother',son:type=='son',fontSize:language=='EN' && index!=2,lineHeight:language=='EN' && index==0}"
            >{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['type'],
    data() {
        return {
            contractAddress: "0x5068…Cc2f2b3",
            information: {
                hours: '300%',
                currency: "$ 10",
                market: '$ 10,000,000',
                coin: '100,000',
                slippage: 'Buy 0.1% Sell 0.1%'
            }
        }
    },
    computed: {
        maternal() {    //母币文本
            return this.$tm('home.maternal')
        },
        language() {    //当前语言
            return this.$i18n.locale
        }
    }
}
</script>

<style lang="less" scoped>
.maternal {
    height: 863px;
    width: 629px;
    padding: 90px 66px 0 60px;
    font-family: PingFang-SC-Bold;

    //背景
    &.motherBgZH {
        background: url("@/assets/imgs/母币zh.svg") no-repeat;
    }
    &.motherBgCN {
        background: url("@/assets/imgs/母币cn.svg") no-repeat;
    }
    &.motherBgEN {
        background: url("@/assets/imgs/母币en.svg") no-repeat;
    }

    &.sonBgZH {
        background: url("@/assets/imgs/子币zh.svg") no-repeat;
    }
    &.sonBgCN {
        background: url("@/assets/imgs/子币cn.svg") no-repeat;
    }
    &.sonBgEN {
        background: url("@/assets/imgs/子币en.svg") no-repeat;
    }

    // 颜色
    &.mother {
        color: #f36cf7;
    }
    &.son {
        color: #009d9e;
    }

    // 头像
    .maternal-avatar {
        display: flex;
        border-bottom: currentColor solid 1px;

        img {
            width: 87px;
            height: 87px;
            margin-right: 21px;
            border-radius: 50%;
            border: currentColor solid 4px;
        }

        .token-title {
            font-size: 33px;
        }

        .token-symbol {
            font-size: 20px;
            margin-bottom: 40px;
        }
    }

    //中间部分
    .maternal-center {
        padding-top: 40px;
        display: flex;
        justify-content: space-between;

        li {
            margin-bottom: 35px;
            font-size: 27px;
        }

        .left {
            color: rgba(51, 51, 51, 0.8);
        }

        .right {
            text-align: right;
            color: currentColor;
        }
    }

    //合约地址
    .maternal-address {
        font-size: 27px;
        .bsc {
            color: rgba(51, 51, 51, 0.8);
        }
        .gpc {
            font-size: 19px;
            line-height: 16px;
            letter-spacing: 2px;
            color: rgba(51, 51, 51, 0.8);

            &.en {
                letter-spacing: 0;
            }
        }
        .address {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
            position: relative;

            .text {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                color: rgba(51, 51, 51, 0.8);
                font-size: 25px;
            }
            .border {
                width: 450px;
                height: 36px;
                border: currentColor solid 2px;
                border-radius: 10px;
            }
            > img {
                width: 33px;
                cursor: pointer;
            }
        }
    }

    // 底部
    .bottom {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        > li {
            width: 131px;
            height: 41px;
            line-height: 41px;
            font-size: 17px;
            text-align: center;
            font-family: PingFang-SC-Regular;
            color: currentColor;
            cursor: pointer;

            &.mother {
                background: url(@/assets/imgs/red_button.svg) no-repeat;
            }
            &.son {
                background: url(@/assets/imgs/green_button.svg) no-repeat;
            }

            &.fontSize {
                font-size: 13px;
            }

            &.lineHeight {
                line-height: 13px;
                padding-top: 7px;
            }
        }
    }
}
</style>