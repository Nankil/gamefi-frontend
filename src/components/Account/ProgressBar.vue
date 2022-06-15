<template>
    <!-- 进度条 -->
    <div class="progress">
        <!-- 任务要求 -->
        <div class="member-p" style="width:450px" v-if="all.text">
            <img v-if="true" src="@/assets/imgs/Account/进行中.svg" alt="进行中" class="width-img" />
            <img v-if="false" src="@/assets/imgs/Account/打勾.svg" alt="完成" />
            {{all.text}}
        </div>

        <!-- 进度条 -->
        <div>
            <el-progress
                style="border-radius:15px;display:block;border:2px solid #ce7bd1;box-shadow:0 0 1px 1px #ce7bd1 inset;background-color:transparent"
                :percentage="all.already/all.target*100"
                color="#ce7bd1"
                :stroke-width="15"
                :show-text="false"
                class="aaa"
            ></el-progress>
        </div>

        <!-- 任务进度 -->
        <p class="member-p">
            任务进度 &nbsp; {{all.already}}
            <template v-if="all.type == 'BNB'">{{all.type}}</template>
            / {{all.target}} {{all.type}}
        </p>
    </div>
</template>

<script>
export default {
    props: ["all"],  //already：已有的值    target：目标值    type：类型    text:文字
    mounted() {
        console.log(this.aaa)
    }
}
</script>

<style lang="less" scoped>
// 进度条
.progress {
    width: 426px;
    margin-bottom: 10px;
    p {
        font-size: 14px;
        line-height: 9px;
        text-align: right;
        margin: 12px 0 0 0;
    }
}
</style>