<template>
    <!-- 會員階級提升規則 -->
    <div class="promoteRule">
        <!-- 會員階級提升規則 -->
        <div class="rule" v-show="!index==1">
            <h4>【{{promoteRule.rule}}】</h4>
            <div class="con">
                <div class="left">
                    <div>(1)</div>
                    <div>(2)</div>
                </div>
                <div class="right">
                    <p style="-webkit-line-clamp: 1">{{promoteRule.first}}</p>
                    <p>{{promoteRule.two}}</p>
                </div>
            </div>
        </div>
        <!-- 列表 -->
        <ul>
            <li class="width-left">{{promoteRule.class}}</li>
            <li class="width-center">{{promoteRule.upgrade}}</li>
            <li class="width-right">{{promoteRule.permission}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['index'],    //index:黄金会员不显示“會員階級提升規則”
    computed: {    //获取文字
        promoteRule() {
            return this.$tm("account.promoteRule")
        }
    }
}
</script>

<style lang='less' scoped>
.promoteRule {
    margin: 0 auto;
    .rule {
        h4 {
            font-size: 27px;
            letter-spacing: 2px;
            color: #1c1c1c;
        }
        .con {
            display: flex;
            font-size: 18px;
            letter-spacing: 3px;
            color: #1c1c1c;
            line-height: 30px;
            margin-left: 31px;
            p {
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2; //块元素显示的文本行数
            }
        }
    }

    ul {
        display: flex;
        justify-content: center;

        li {
            line-height: 80px;
            font-family: PingFang-SC-Heavy;
            font-size: 34px;
            color: #525252;
            text-align: center;
            background: #d2eef6;
            letter-spacing: 2px;
        }
    }
}
</style>