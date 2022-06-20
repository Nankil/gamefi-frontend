<template>
    <!-- 小任务（“我的任务”里面的任务） -->
    <ul class="small_task">
        <li>
            <img v-show="serialNumber==1" src="@/assets/imgs/Account/填寫基本資料.svg" alt="填寫基本資料" />
            <img v-show="serialNumber==2" src="@/assets/imgs/Account/完成郵箱驗證.svg" alt="完成郵箱驗證" />
            <img v-show="serialNumber==3" src="@/assets/imgs/Account/加入我們社區.svg" alt="加入我們社區" />
            <img v-show="serialNumber==4" src="@/assets/imgs/Account/推特.svg" alt="推特" />
            <img v-show="serialNumber==5" src="@/assets/imgs/Account/Discord.svg" alt="Discord" />
            <img v-show="serialNumber==6" src="@/assets/imgs/Account/电报.svg" alt="电报" />
            <img v-show="serialNumber==7" src="@/assets/imgs/Account/line.svg" alt="line" />
            <img v-show="serialNumber==8" src="@/assets/imgs/Account/line.svg" alt="line" />
            <img v-show="serialNumber==9" src="@/assets/imgs/Account/邀请用户.svg" alt="邀请用户" />

            <div v-if="serialNumber==8">
                <p v-for="item of text" :key="item">{{item}}</p>
            </div>
            <div v-else-if="serialNumber==9">
                <p>{{text}}</p>
                <div class="progress">
                    <div>
                        <el-progress
                            style="margin-top:13px;width:600px;border-radius:15px;box-shadow:0 0 1px 2px #c96ccd"
                            color="#c96ccd"
                            :percentage="percentage"
                            :stroke-width="10"
                            :show-text="false"
                        ></el-progress>
                    </div>
                    <span>{{numberOfTasksCompleted}}/{{maxNumber}}</span>
                </div>
            </div>
            <div v-else>
                <p>{{text}}</p>
            </div>
        </li>
        <li>獎勵+{{rewardPoints}}積分</li>
        <li>
            <p class="green" v-if="finishedCondition">已完成</p>
            <p class="red" v-else>未完成</p>
        </li>
        <li>
            <img src="@/assets/imgs/Account/前往.svg" alt="前往" />
        </li>
    </ul>
</template>

<script>
export default {
    props: ['serialNumber', 'text', 'rewardPoints', 'finishedCondition', 'numberOfInvitations', "maxNumber"],   //serialNumber:控制图片  text:任务内容  rewardPoints：加多少积分    finishedCondition：完成状态  numberOfInvitations:邀请数量  maxNumber：任务量
    computed: {
        percentage() {    //进度条长度
            if (this.numberOfInvitations >= 20) {
                return 100
            }
            return this.numberOfInvitations / this.maxNumber * 100
        },
        numberOfTasksCompleted() {    //邀请数量
            if (this.maxNumber == 5 && this.numberOfInvitations >= 5) {
                return 5
            } else if (this.maxNumber == 10 && this.numberOfInvitations >= 10) {
                return 10
            } else if (this.maxNumber == 20 && this.numberOfInvitations >= 20) {
                return 20
            }

            return this.numberOfInvitations
        }

    }
}
</script>

<style lang="less" scoped>
.green {
    color: #62c228;
}
.red {
    color: #ff2828;
}
//小任务
.small_task {
    height: 119px;
    display: flex;
    justify-content: space-between;
    font-size: 29px;
    color: #4b4b4b;
    font-family: PingFang-SC-Bold;
    margin-bottom: 5px;
    li {
        letter-spacing: 2px;
        background: rgba(255, 255, 255, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    li:nth-of-type(1) {
        justify-content: flex-start;
        width: 877px;
        img {
            width: 55px;
            margin-left: 63px;
        }
        > div {
            margin-left: 25px;
            .progress {
                display: flex;
                justify-content: space-between;
            }
            span {
                font-size: 21px;
            }
        }
    }
    li:nth-of-type(2) {
        width: 326px;
    }
    li:nth-of-type(3) {
        width: 189px;
    }
    li:nth-of-type(4) {
        width: 208px;
    }
}
</style>