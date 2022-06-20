<template>
    <!-- 我的任务 -->
    <div class="my_task">
        <!-- 任务奖励规则 -->
        <div class="task_reward_rules">
            <h2>【任務獎勵規則】</h2>
            <p>1.需完成該任務類別的所有任務才會發放獎勵，推薦任務獎勵只要每推薦一人就會發放獎勵</p>
            <p>
                <span>2.任務完成後獎勵自動發送至</span>
                <span class="green">『我的積分』</span>頁面
            </p>
            <p>
                <span>3.積分可至</span>
                <span class="green">『我的積分』</span>
                <span>查詢，積分可用於</span>
                <span class="green">『盲盒』</span>
                <span>頁面兌換</span>
                <span class="green">『白名單圖鑑碎片卡包』</span>
            </p>
        </div>

        <!-- 入会任务 -->
        <div class="membership_task">
            <!-- 任务进度 -->
            <TaskProgress color="#62c228" totalTask="3" accomplishedTask="3" />
            <!--具体任务 -->
            <SmallTask
                serialNumber="1"
                src="填寫基本資料"
                text="填寫基本資料"
                rewardPoints="25"
                :finishedCondition="false"
            />

            <SmallTask serialNumber="2" text="完成郵箱驗證" rewardPoints="25" :finishedCondition="false" />

            <SmallTask
                serialNumber="3"
                text="到『加入我們社區』頁面，點擊加入至少4個社區"
                rewardPoints="50"
                :finishedCondition="true"
            />
        </div>

        <!-- 加入社区任务 -->
        <div class="community_task">
            <!-- 任务进度 -->
            <TaskProgress color="#c96ccd" totalTask="6" accomplishedTask="3" />
            <!-- 具体任务 -->
            <SmallTask
                serialNumber="4"
                text="在Twitter（推特）上關注我們"
                rewardPoints="25"
                :finishedCondition="false"
            />
            <SmallTask
                serialNumber="5"
                text="加入我們的Discord(DC)"
                rewardPoints="25"
                :finishedCondition="false"
            />
            <SmallTask
                serialNumber="6"
                text="加入我們的Telegram(電報)英文社區"
                rewardPoints="50"
                :finishedCondition="false"
            />
            <SmallTask
                serialNumber="6"
                text="加入我們的Telegram(電報)英文公共頻道"
                rewardPoints="25"
                :finishedCondition="false"
            />
            <SmallTask
                serialNumber="6"
                text="加入我們的Telegram(電報)中文社區"
                rewardPoints="25"
                :finishedCondition="false"
            />
            <SmallTask
                serialNumber="6"
                text="加入我們的Telegram(電報)中文公共頻道"
                rewardPoints="50"
                :finishedCondition="false"
            />
        </div>

        <!-- 其他加入社区任务 -->
        <div class="other_community_task">
            <!-- 任务进度 -->
            <TaskProgress color="#c96ccd" totalTask="6" accomplishedTask="3" />
            <!-- 具体任务 -->
            <SmallTask
                serialNumber="7"
                text="加入我們的 LINE Gene Player 中文社區"
                rewardPoints="25"
                :finishedCondition="false"
            />
            <SmallTask
                serialNumber="8"
                :text="['LINE Gene Player區塊鏈新手教學群','(適合無區塊鏈加密貨幣經驗的新手加入)']"
                rewardPoints="25"
                :finishedCondition="false"
            />
        </div>

        <!-- 推荐任务 -->
        <div class="recommended_task">
            <!-- 推荐码 -->
            <div class="task_progress">
                <h2>我的推荐码</h2>
                <div>{{my_code}}</div>
                <img
                    @click="copyText($refs.img,my_code)"
                    ref="img"
                    src="@/assets/imgs/Account/复制.svg"
                    alt="复制"
                />
                <p>
                    <span>可至</span>
                    <span class="green">『推薦管理』</span>頁面，查看邀請進度
                </p>
            </div>
            <!-- 具体任务 -->
            <SmallTask
                serialNumber="9"
                text="使用推薦碼邀請5新用戶註冊成功並完成入會任務"
                numberOfInvitations="8"
                maxNumber="5"
                rewardPoints="125"
                :finishedCondition="false"
            />
            <SmallTask
                serialNumber="9"
                text="使用推薦碼邀請10新用戶註冊成功並完成入會任務"
                numberOfInvitations="8"
                maxNumber="10"
                rewardPoints="250"
                :finishedCondition="false"
            />
            <SmallTask
                serialNumber="9"
                text="使用推薦碼邀請20新用戶註冊成功並完成入會任務"
                numberOfInvitations="8"
                maxNumber="20"
                rewardPoints="500"
                :finishedCondition="false"
            />
            <SmallTask
                serialNumber="9"
                text="使用推薦碼邀請N新用戶註冊成功並完成入會任務"
                numberOfInvitations="8"
                maxNumber="N"
                rewardPoints="35"
                :finishedCondition="false"
            />
        </div>
    </div>
</template>


<script>
import SmallTask from "@/components/Account/SmallTask.vue"
import TaskProgress from "@/components/Account/TaskProgress.vue"
export default {
    data() {
        return {
            my_code: "jdsddshfhjdsfjks"
            // membership_task: {    //入会任务
            //     fill_information: true,
            //     email_verification: false,
            //     join_community: false
            // }
        }
    },
    components: {
        SmallTask,
        TaskProgress
    }
};
</script>

<style lang="less" scoped>
.green {
    color: #62c228;
}
.red {
    color: #ff2828;
}
// 任务奖励规则
.task_reward_rules {
    height: 228px;
    background: url(@/assets/imgs/Account/任务奖励规则.svg) no-repeat;
    padding: 20px 0 0 72px;
    h2 {
        font-size: 29px;
        font-family: PingFang-SC-bold;
        margin-left: -12px;
    }
    p {
        font-size: 24px;
        margin-top: 9px;
        letter-spacing: 1px;
    }
}

//入会任务
.membership_task {
    height: 645px;
    background: url(@/assets/imgs/Account/入会任务.svg) no-repeat;
    margin: 40px 0;
    padding: 130px 52px 0 72px;
}

//加入社区任务
.community_task {
    height: 1030px;
    // background: url(@/assets/imgs/Account/加入社区任务.svg) no-repeat;
    border: 1px solid red;
    padding: 130px 52px 0 72px;
}

//其他社区任务
.other_community_task {
    height: 515px;
    // background: url(@/assets/imgs/Account/其他社区任务.svg) no-repeat;
    border: 1px solid red;
    margin: 40px 0;
    padding: 130px 52px 0 72px;
}

//推荐任务
.recommended_task {
    height: 770px;
    // background: url(@/assets/imgs/Account/其他社区任务.svg) no-repeat;
    border: 1px solid red;
    padding: 130px 52px 0 72px;
    // 任务进度
    .task_progress {
        display: flex;
        align-items: center;
        font-family: PingFang-SC-Bold;
        font-size: 32px;
        color: #4b4b4b;
        margin-bottom: 40px;
        div {
            width: 600px;
            line-height: 70px;
            background: white;
            text-align: center;
            margin: 0 30px;
            color: #525252;
        }
        img {
            width: 60px;
            cursor: pointer;
        }
        p {
            margin-left: auto;
            font-size: 29px;
        }
    }
}
</style>


