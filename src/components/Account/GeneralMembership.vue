<template>
    <!-- 一般会员 -->
    <ul class="task member">
        <li class="li-left width-left">
            <div>
                <img src="@/assets/imgs/Account/一般.svg" alt="一般会员" />
                <p>一般會員</p>
                <p>（種子輪）</p>
            </div>
        </li>
        <li class="li-center width-center">
            <div>
                <h4 class="member-h4">【升級任務】</h4>
                <p class="member-p">
                    <img v-if="tick.one" src="@/assets/imgs/Account/打勾.svg" alt="完成" />
                    完成會員註冊
                </p>
            </div>

            <div style="padding-top:9px">
                <h4 class="member-h4">
                    【當前任務
                    <span>①</span>】
                </h4>
                <p class="member-p">
                    <img v-if="tick.two[0]" src="@/assets/imgs/Account/打勾.svg" alt="完成" />
                    <span>①</span>
                    加入Telegram(鼋毂社医):Gene Player Official
                </p>
                <p class="member-p">
                    <img v-if="tick.two[1]" src="@/assets/imgs/Account/打勾.svg" alt="完成" />
                    <span>②</span>
                    加入Discord(DC)頻道：Gene Player
                </p>
                <p class="member-p line-height-14">
                    <img v-if="tick.two[2]" src="@/assets/imgs/Account/打勾.svg" alt="完成" />
                    <span>③</span>
                    Twitter(推特)上關註我們
                </p>
                <p style="margin-bottom:7px">
                    <span style="color:transparent">④</span>
                    （請至『升級條件』頁面透過網址鏈接完成任務驗證）
                </p>

                <!-- 进度条 -->
                <ProgressBar :all="info.currentTask1" />
            </div>

            <div>
                <h4 class="member-h4">
                    【當前任務
                    <span>②</span>】
                </h4>

                <!-- 进度条 -->
                <ProgressBar :all="info.currentTask2" />
            </div>
        </li>
        <li class="li-right width-right">
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
</template>

<script>
export default {
    data() {
        return {
            tick: {    //控制打勾、进行中
                one: true,
                two: [true, false, false],
            },
            info: {
                currentTask1: {    //当前任务1
                    already: 1,
                    target: 3,
                    type: ""
                },
                currentTask2: {    //当前任务2
                    already: 7.2,
                    target: 10,
                    type: "BNB",
                    text: "種子輪投資至少10BNB"
                }
            }

        }
    },
    computed: {
        progress() {    //进度条要用到的
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
    },
}
</script>

<style lang="less" scoped>
.task {
    height: 529px;

    .paddingTop {
        padding-top: 80px !important;
    }

    li > div:nth-of-type(1) {
        height: 104px;
    }
    li > div:nth-of-type(2) {
        height: 236px;
    }
    li > div:nth-of-type(3) {
        height: 180px;
    }
}
</style>