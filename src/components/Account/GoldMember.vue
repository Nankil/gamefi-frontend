<template>
    <!-- 黄金会员 -->
    <ul class="gold member">
        <li class="li-left width-left">
            <div class="removeBg">
                <img src="@/assets/imgs/Account/黄金.svg" alt="一般会员" />
                <p>黃金會員</p>
                <p>（種子輪）</p>
            </div>
        </li>

        <li class="li-center width-center">
            <div>
                <h4 class="member-h4">【升級任務】</h4>
                <!-- 进度条 -->
                <ProgressBar :all="info.upgradeTask" />
            </div>

            <div>
                <h4 class="member-h4">
                    【當前任務
                    <span>①</span>】
                </h4>
                <ProgressBar :all="info.currentTask1_1" />
                <ProgressBar :all="info.currentTask1_2" />
            </div>

            <div>
                <h4 class="member-h4">
                    【未來補充任務
                    <span>②</span>】
                </h4>
                <ProgressBar :all="info.futureSupplementaryTasks1" />
            </div>

            <div>
                <h4 class="member-h4">
                    【未來補充任務
                    <span>②</span>】
                </h4>
                <ProgressBar :all="info.futureSupplementaryTasks2_1" />
                <ProgressBar :all="info.futureSupplementaryTasks2_2" />
            </div>
        </li>
        <li class="li-right width-right">
            <div>
                <p class="spot">開放會員功能</p>
                <p class="spot">開放會員功能</p>
                <p class="spot">開放會員功能</p>
                <p class="spot">開放會員功能</p>
            </div>
            <div>
                <p class="spot">開放會員功能</p>
                <p class="spot">開放會員功能</p>
            </div>
            <div>
                <p class="spot">開放會員功能</p>
                <p class="spot">開放會員功能</p>
            </div>
            <div>
                <p class="spot">開放會員功能</p>
                <p class="spot">開放會員功能</p>
                <p class="spot">開放會員功能</p>
                <p class="spot">開放會員功能</p>
                <p class="spot">開放會員功能</p>
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
                three: 4.6
            },
            info: {
                upgradeTask: {    //升级任务
                    already: 3,
                    target: 25,
                    type: "BNB",
                    text: "種子輪投資至少 25 BNB"
                },
                currentTask1_1: {    //当前任务1_1
                    already: 1,
                    target: 2,
                    type: "人",
                    text: "①邀請至少2位好友使用您的推薦碼完成會員註冊"
                },
                currentTask1_2: {    //当前任务1_2
                    already: 4,
                    target: 20,
                    type: "BNB",
                    text: "②邀請的好友種子輪或私募輪投資額合計至少20BNB"
                },
                futureSupplementaryTasks1: {    //未来补充任务1
                    already: 18,
                    target: 20,
                    type: "BNB",
                    text: "於官網『我的投資與權限』頁面中質押任1款白名單圖鑑（質押後將不可拆除）"
                },
                futureSupplementaryTasks2_1: {    //未来补充任务2_1
                    already: 0,
                    target: 1,
                    type: "款",
                    text: "①於官網『我的投資與權限』頁面中質押任1款『創世生化機甲頭像』（質押後拆除需消耗手續費，且權限降低，已領取過獎勵不可重複領取）"
                },
                futureSupplementaryTasks2_2: {    //未来补充任务2_2
                    already: 1,
                    target: 1,
                    type: "款",
                    text: "②於官網『我的投資與權限』頁面中質押任1款『創世基因兽人頭像』（質押後拆除需消耗手續費，且權限降低，已領取過獎勵不可重複領取）"
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
.gold {
    height: 1035px;
    box-sizing: content-box;
    padding-bottom: 32px;
    background: rgba(255, 255, 255, 0.3);

    .removeBg {
        background-image: none !important;
    }

    li > div:nth-of-type(1) {
        height: 168px;
    }
    li > div:nth-of-type(2) {
        height: 257px;
    }
    li > div:nth-of-type(3) {
        height: 205px;
    }
    li > div:nth-of-type(4) {
        height: 390px;
    }
}
</style>