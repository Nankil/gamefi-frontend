<template>
    <!-- 我的资料 -->
    <div class="heart">
        <!-- 基本资料 -->
        <div class="basic-info">
            <div class="register-time">
                <div id="line1">首次註冊時間</div>
                <div id="line2">2022-08-08</div>
            </div>
            <ul class="user-form flex flex-row">
                <div class="col bg-slate-300" id="1" style="margin-left:82px">
                    <div class="key-pair flex flex-row">
                        <div class="key">
                            <div class="key-item">{{$t('Account.Info.promote_code')}}</div>
                            <div class="key-item">{{$t('Account.Info.id')}}</div>
                            <div class="key-item">{{$t('Account.Info.region')}}</div>
                            <div class="key-item">{{$t('Account.Info.phone')}}</div>
                        </div>
                        <div class="value">
                            <div style="display:flex">
                                <div class="value-item">{{basic.promote_code}}</div>
                                <img
                                    style="position:relative; bottom:-20px ; left:22px"
                                    src="/imgs/复制.svg"
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
                        <div class="key-item">{{$t('Account.Info.wallet_addr')}}</div>
                        <div class="key-item">{{$t('Account.Info.nickname')}}</div>
                        <div class="key-item">{{$t('Account.Info.email')}}</div>
                    </div>
                    <div class="value content">
                        <div style="display:flex">
                            <div class="value-item">{{basic.wallet_addr}}</div>
                            <img
                                style="position:relative; bottom:-20px ; left:22px"
                                src="/imgs/复制.svg"
                                alt="复制"
                                @click="copyText($refs.right,basic.wallet_addr)"
                                ref="right"
                            />
                        </div>
                        <div class="value-item">{{basic.nickname}}</div>
                        <div class="value-item">{{basic.email}}</div>
                        <img src="/imgs/修改.svg" alt="修改" />
                    </div>
                </div>
            </ul>
        </div>
        <!-- VIp -->
        <div class="vip">
            <div class="swapper">
                <!-- 选项卡 -->
                <!-- 会员级别 -->
                <div class="level">
                    <ul>
                        <li @click="index = 0" :class="{active:index == 0}">
                            <img src="/imgs/Account/當前權限階級.svg" alt="當前權限階級" />
                            <img src="/imgs/Account/一般会员.svg" alt="一般会员" />
                        </li>
                        <li @click="index = 1" :class="{active:index == 1}">
                            <img src="/imgs/Account/下一權限階級.svg" alt="下一權限階級" />
                            <img src="/imgs/Account/黄金会员.svg" alt="黄金会员" />
                        </li>
                    </ul>
                    <img
                        @click="$router.push('seeAll/seedWheel')"
                        src="/imgs/Account/查看當前權限階級.svg"
                        alt="查看所有会员功能權限及階級"
                    />
                </div>
                <div v-if="index == 0" class="con">
                    <!-- 【會員階級提升規則】 -->
                    <div class="rule">
                        <h4>【會員階級提升規則】</h4>
                        <p>
                            <span>(1)</span>
                            <span>完成該階級全部『升級條件』及『當前任務』才可提升至下一階級，完成下一階級『升級條件』，系統自動升級會員資格，</span>
                        </p>
                        <p>
                            <span>(2)</span>
                            <span>因部分功能尚未開放，用戶完成該階級『升級條件』及『當前任務』可先升級，待『未來補充任務』功能開放後，用戶可補完成『補充任務』並『開放相應階級權</span>
                        </p>
                        <p>
                            <span style="color:transparent">(3)</span>
                            <span>限』及『領取相應階級空頭獎勵』</span>
                        </p>
                    </div>
                    <!-- 會員階級 -->
                    <ul class="task">
                        <li class="left">
                            <h3>會員階級</h3>
                            <div>
                                <img src="/imgs/Account/一般.svg" alt="一般会员" />
                                <p>一般會員</p>
                                <p>（種子輪）</p>
                            </div>
                        </li>
                        <li class="center">
                            <h3>升級條件/任務</h3>
                            <div>
                                <h4>【升級任務】</h4>
                                <p>
                                    <img v-if="tick.one" src="/imgs/Account/打勾.svg" alt="完成" />
                                    完成會員註冊
                                </p>
                            </div>
                            <div>
                                <h4>
                                    【當前任務
                                    <span>①</span>】
                                </h4>
                                <p>
                                    <img v-if="tick.two[0]" src="/imgs/Account/打勾.svg" alt="完成" />
                                    <span>①</span>
                                    加入Telegram(黿轂社醫)：Gene Player Official
                                </p>
                                <p>
                                    <img v-if="tick.two[1]" src="/imgs/Account/打勾.svg" alt="完成" />
                                    <span>②</span>
                                    加入Discord(DC)頻道：Gene Player
                                </p>
                                <p>
                                    <img v-if="tick.two[2]" src="/imgs/Account/打勾.svg" alt="完成" />
                                    <span>③</span>
                                    Twitter(推特)上關註我們
                                </p>
                                <h5>
                                    <span style="color:transparent">1</span>（請至『升級條件』頁面透過網址鏈接完成任務驗證）
                                </h5>
                                <!-- 进度条 -->
                                <div class="progress" style="margin-top:10px">
                                    <el-progress
                                        :percentage="progress.n*33.333"
                                        color="#ce7bd1"
                                        :stroke-width="15"
                                    >
                                        <el-button text></el-button>
                                    </el-progress>
                                    <p>任务进度 &nbsp; {{progress.n}}/3</p>
                                </div>
                            </div>
                            <div>
                                <h4>
                                    【當前任務
                                    <span>②</span>】
                                </h4>
                                <p>
                                    <img
                                        v-if="progress.m<10"
                                        src="/imgs/Account/进行中.svg"
                                        alt="进行中"
                                        style="width:43px;left:-55px"
                                    />
                                    <img v-if="progress.m>=10" src="/imgs/Account/打勾.svg" alt="完成" />
                                    種子輪投資至少10BNB
                                </p>
                                <!-- 进度条 -->
                                <div class="progress">
                                    <el-progress
                                        :percentage="progress.m*10"
                                        color="#ce7bd1"
                                        :stroke-width="15"
                                    >
                                        <el-button text style="width:0px"></el-button>
                                    </el-progress>
                                    <p>任务进度 &nbsp; {{progress.m}}BNB / 10BNB</p>
                                </div>
                            </div>
                        </li>
                        <li class="right">
                            <h3>權限/空頭獎勵</h3>

                            <div>
                                <p class="spot">開放會員功能</p>
                            </div>
                            <div class="paddingTop">
                                <p class="spot">參與種子輪投資資格，獲得投資額度 10~100BNB</p>
                                <p class="spot red">空投『白名單圖鑑碎片卡包』*3包（價值5USDT）</p>
                            </div>
                            <div>
                                <p class="spot">參與『NTF創世生化機甲頭像盲盒』優先購買資格</p>
                                <p class="spot red">空投『白名單圖鑑碎片卡包』*5（價值25USDT）</p>
                                <p class="spot red">空投『創世生化機甲頭像盲盒』*1（價值400USDT）</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div v-if="index == 1" class="con">我是黄金会员</div>
            </div>
            <div class="con"></div>
        </div>
    </div>
</template>



<script>
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
            tick: {    //控制打勾、进行中
                one: true,
                two: [true, false, false],
                three: 4.6
            }
        };
    },
    computed: {
        progress() {
            let two = this.tick.two
            let n = 0
            two.forEach(item => {
                if (item) {
                    n++
                }
            })

            let m = this.tick.three

            return { n, m }
        }
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
    background: url("/imgs/account_basic_info.svg") no-repeat;
    background-size: 100%;
    overflow: hidden;

    .register-time {
        margin: 35px 0 0 234px;
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
        width: 175px;
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
    }
}

// vip
.vip {
    margin-top: 80px;
    height: 1123px;
    background: url("/imgs/Account/大框.svg") no-repeat;
    overflow: hidden;

    .swapper {
        height: 1074px;
        margin: 34px 57px;
        font-family: PingFang-SC-Bold;

        //选项卡
        // 会员级别
        .level {
            display: flex;
            justify-content: space-between;

            ul {
                width: 1302px;
                height: 209px;
                display: flex;

                li {
                    flex: 1;
                    padding: 27px 0 0 65px;
                    background: rgba(215, 215, 215, 0.6);
                    cursor: pointer;
                    img:nth-of-type(2) {
                        width: 528px;
                    }

                    &.active {
                        background: rgba(255, 255, 255, 0.6);
                    }
                }
            }

            > img {
                cursor: pointer;
            }
        }

        .con {
            background: rgba(255, 255, 255, 0.6);
            padding-top: 9px;
            height: 840px;
            // 【會員階級提升規則】
            .rule {
                margin: 0 0 50px 53px;
                h4 {
                    font-size: 27px;
                    letter-spacing: 2px;
                    color: #1c1c1c;
                }
                p {
                    font-size: 18px;
                    letter-spacing: 3px;
                    color: #1c1c1c;
                    margin-left: 31px;
                    display: flex;
                    margin-top: 3px;
                }
            }
            //會員階級
            .task {
                height: 649px;
                display: flex;
                margin: 0 26px;
                color: #525252;
                h3 {
                    line-height: 80px;
                    font-family: PingFang-SC-Heavy;
                    font-size: 34px;
                    color: #525252;
                    text-align: center;
                    background: #d2eef6;
                    letter-spacing: 2px;
                }
                h4 {
                    font-family: PingFang-SC-Medium, PingFang-SC-Bold;
                    font-size: 26px;
                    margin-left: -12px;
                    letter-spacing: 2px;
                    span {
                        transform: translateY(-1px);
                        margin-right: 4px;
                        display: inline-block;
                    }
                }

                p,
                h5 {
                    font-family: PingFang-SC-Medium;
                    font-size: 20px;
                    line-height: 33px;
                    position: relative;

                    img {
                        position: absolute;
                        top: 7px;
                        left: -30px;
                        width: 20px;
                    }
                }

                h5 {
                    line-height: 14px;
                }

                .red {
                    //红色字体
                    color: #fd1313;
                }

                .spot::after {
                    //点
                    content: "";
                    position: absolute;
                    width: 3px;
                    height: 3px;
                    border-radius: 50%;
                    background: #525252;
                    left: -15px;
                    top: 16px;
                }

                .paddingTop {
                    padding-top: 80px !important;
                }

                li > div:nth-of-type(1) {
                    height: 104px;
                }
                li > div:nth-of-type(2) {
                    height: 236px;
                    margin: 5px 0;
                }
                li > div:nth-of-type(3) {
                    height: 180px;
                }

                .left {
                    width: 261px;
                    div {
                        height: 529px !important;
                        background: url(/imgs/Account/当前阶级.svg) no-repeat;
                        display: flex;
                        flex-flow: column;
                        justify-content: center;
                        align-items: center;
                        img {
                            width: 120px;
                            margin-bottom: 23px;
                        }
                        p {
                            font-size: 26px;
                            color: #525252;
                            text-align: center;
                            line-height: 32px;
                            letter-spacing: 2px;
                        }

                        p:nth-of-type(1) {
                            font-family: PingFang-SC-Heavy;
                        }
                        p:nth-of-type(2) {
                            font-family: PingFang-SC-Medium;
                        }
                    }
                }
                .center {
                    width: 602px;
                    margin: 0 5px;
                    > div {
                        padding: 21px 0 0 82px;
                        background-color: rgba(255, 255, 255, 0.8);
                    }
                    // 进度条
                    .progress {
                        width: 465px;
                        p {
                            font-size: 14px;
                            line-height: 9px;
                            text-align: right;
                            margin-right: 55px;
                        }
                    }
                }
                .right {
                    width: 704px;
                    div {
                        padding: 45px 0 0 85px;
                        background-color: rgba(255, 255, 255, 0.8);
                    }
                }
            }
        }
    }
}
</style>
