<template>
    <!-- 我的资料 -->
    <div class="heart">
        <!-- 基本资料 -->
        <div class="basic-info">
            <div class="register-time">
                <div id="line1">{{$t('account.Info.time')}}</div>
                <div id="line2">2022-08-08</div>
            </div>
            <ul class="user-form flex flex-row">
                <div class="col bg-slate-300" id="1">
                    <div class="key-pair flex flex-row">
                        <div class="key">
                            <div class="key-item">{{$t('account.Info.promote_code')}}</div>
                            <div class="key-item">{{$t('account.Info.id')}}</div>
                            <div class="key-item">{{$t('account.Info.region')}}</div>
                            <div class="key-item">{{$t('account.Info.phone')}}</div>
                        </div>
                        <div class="value">
                            <div style="display:flex">
                                <div class="value-item">{{basic.promote_code}}</div>
                                <img
                                    style="position:relative; bottom:-20px ; left:22px"
                                    src="@/assets/imgs/复制.svg"
                                    alt="复制"
                                    @click="copyText($refs.left,basic.promote_code)"
                                    ref="left"
                                />
                            </div>
                            <div class="value-item">{{basic.id}}</div>
                            <div class="value-item">{{basic.region}}</div>
                            <div class="value-item">{{basic.phone}}</div>
                        </div>
                    </div>
                </div>
                <div class="col bg-slate-900 flex">
                    <div class="key">
                        <div class="key-item">{{$t('account.Info.wallet_addr')}}</div>
                        <div class="key-item">{{$t('account.Info.nickname')}}</div>
                        <div class="key-item">{{$t('account.Info.email')}}</div>
                    </div>
                    <div class="value content">
                        <div style="display:flex">
                            <div class="value-item">{{basic.wallet_addr}}</div>
                            <img
                                style="position:relative; bottom:-20px ; left:22px"
                                src="@/assets/imgs/复制.svg"
                                alt="复制"
                                @click="copyText($refs.right,basic.wallet_addr)"
                                ref="right"
                            />
                        </div>
                        <div class="value-item">{{basic.nickname}}</div>
                        <div class="value-item">{{basic.email}}</div>
                        <img src="@/assets/imgs/修改.svg" alt="修改" />
                    </div>
                </div>
            </ul>
        </div>
        <!-- VIp -->
        <div class="vip" :class="{generally:index==0,gold:index==1}">
            <div class="swapper">
                <!-- 选项卡 -->
                <!-- 会员级别 -->
                <div class="level">
                    <ul>
                        <li @click="index = 0" :class="{active:index == 0}">
                            <img src="@/assets/imgs/Account/當前權限階級.svg" alt="當前權限階級" />
                            <div>
                                <p>
                                    一般会员
                                    <span>(种子轮)</span>
                                </p>
                                <img src="@/assets/imgs/Account/一般.svg" alt="一般" />
                            </div>
                        </li>
                        <li @click="index = 1" :class="{active:index == 1}">
                            <img src="@/assets/imgs/Account/下一權限階級.svg" alt="下一權限階級" />
                            <div>
                                <p>
                                    黄金会员
                                    <span>(种子轮)</span>
                                </p>
                                <img src="@/assets/imgs/Account/黄金.svg" alt="黄金" />
                            </div>
                        </li>
                    </ul>
                    <img
                        @click="$router.push('seeAll/seedWheel')"
                        src="@/assets/imgs/Account/查看當前權限階級.svg"
                        alt="查看所有会员功能權限及階級"
                    />
                </div>
                <!-- 【會員階級提升規則】 -->
                <promoteRule :index="index" />
                <!-- 一般会员 -->
                <div v-if="index == 0">
                    <GeneralMembership />
                    <div style="height:40px;background:rgba(255, 255, 255, 0.3)"></div>
                </div>

                <!-- 黄金会员 -->
                <GoldMember v-else />
            </div>
        </div>
    </div>
</template>



<script>
import promoteRule from "@/components/Account/promoteRule.vue"
import GeneralMembership from "@/components/Account/GeneralMembership.vue"
import GoldMember from "@/components/Account/GoldMember.vue"

export default {
    data() {
        return {
            basic: {//基本资料
                promote_code: 'code',
                wallet_addr: 'wallet',
                id: 'id',
                nickname: "名字",
                region: 'region',
                email: 'email',
                phone: 'phone'
            },
            index: 0,  //控制选项卡
        };
    },
    components: {
        promoteRule,
        GeneralMembership,
        GoldMember
    }
};

</script>


<style lang="less" scoped>
#html {
    margin: 0;
}

.heart {
    margin: 0 auto;
}

// 基本资料
.basic-info {
    height: 600px;
    background: url("@/assets/imgs/account_basic_info.svg") no-repeat;
    background-size: 100%;
    overflow: hidden;

    .register-time {
        margin: 35px 0 0 229px;
        font-size: 19px;
        color: #c35fc9;
        font-family: PingFang-bold;
        div {
            line-height: 19px;
        }
    }

    .col {
        background: none;
        width: 822px;
    }

    .key {
        width: 268px;
        height: 462px;
    }
    .value {
        margin-left: 30px;
        img {
            cursor: pointer;
        }
    }
    .content {
        position: relative;
        img {
            position: absolute;
            bottom: 3px;
            right: 186px;
        }
    }
    .value-item {
        width: 459px;
        line-height: 71px;
        text-align: center;
        margin-top: 40px;
        background-color: #ffffff;
        color: #525252;
        font-size: 25px;
        font-family: PingFang-SC-Bold;
    }
    .key-item {
        height: 65px;
        line-height: 65px;
        margin-top: 46px;
        text-align: right;
        font-family: PingFang-SC-Bold;
        font-size: 25px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #434343;
        white-space: nowrap;
    }
}

// vip
.vip {
    padding-top: 2px;

    &.generally {
        //一般会员边框
        height: 1123px;
        background: url("@/assets/imgs/Account/一般会员边框.svg") no-repeat;
    }

    &.gold {
        //黄金会员边框
        height: 1470px;
        background: url("@/assets/imgs/Account/黄金会员边框.svg") no-repeat;
    }

    .swapper {
        height: 1074px;
        margin: 45px;
        font-family: PingFang-SC-Bold;

        //选项卡
        // 会员级别
        .level {
            display: flex;
            justify-content: space-between;
            padding-bottom: 30px;
            background: rgba(255, 255, 255, 0.3);

            ul {
                width: 1302px;
                height: 209px;
                display: flex;

                li {
                    flex: 1;
                    padding: 27px 0 0 65px;
                    background: rgba(215, 215, 215, 0.6);
                    cursor: pointer;

                    &.active {
                        background: rgba(255, 255, 255, 0.3);
                    }
                    div {
                        height: 133px;
                        line-height: 133px;
                        display: flex;
                        align-items: center;
                        p {
                            width: 391px;
                            line-height: 87px;
                            text-align: center;
                            color: white;
                            font-size: 49px;
                            letter-spacing: 2px;
                            background: url("@/assets/imgs/Account/会员名称.svg")
                                no-repeat;
                            span {
                                font-size: 24px;
                                display: inline-block;
                                margin-left: -18px;
                            }
                        }
                        img {
                            width: 132px;
                            margin-left: 5px;
                        }
                    }
                }
            }

            > img {
                cursor: pointer;
            }
        }
    }
}
</style>
