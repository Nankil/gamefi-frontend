<template>
    <!-- 任务进度（“我的任务”里面的任务进度） -->
    <div class="task_progress">
        <h2>任务进度</h2>
        <div>
            <el-progress
                :style="{'border-radius':'15px','box-shadow': '0 0 1px 2px '+ color}"
                :color="color"
                :percentage="accomplishedTask/totalTask*100"
                :stroke-width="25"
                :show-text="false"
            ></el-progress>
        </div>
        <span>{{accomplishedTask}} / {{totalTask}}</span>
        <img v-show="accomplishedTask==totalTask" src="@/assets/imgs/Account/奖励已发放.svg" alt="奖励已发放" />
    </div>
</template>

<script>
export default {
    props: ['color', 'accomplishedTask', 'totalTask']    //color:背景色    totalTask:总任务数    accomplishedTask:已完成任务数
}
</script>

<style lang="less" scoped>
//任务进度
.task_progress {
    display: flex;
    align-items: center;
    font-size: 32px;
    color: #4b4b4b;
    margin-bottom: 40px;
    > h2 {
        font-family: PingFang-SC-Bold;
    }
    > div {
        width: 594px;
        margin: 0 30px;
        margin-bottom: -5px;
    }
    > span {
        font-family: PingFang-SC-Medium;
    }
    > img {
        margin-left: auto;
    }
}
</style>