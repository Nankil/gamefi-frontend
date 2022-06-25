<template>
    <!-- 验证码发送过于频繁 -->
    <div class="frequently">
        <div class="first">验证码发送过于频繁</div>
        <div class="second">请稍后重试</div>
        <div class="third">剩余时间</div>
        <div class="fourth">
            <span class="number">{{splitTime.a}}</span>
            <span class="number">{{splitTime.b}}</span>
            <span class="colon">:</span>
            <span class="number">{{splitTime.c}}</span>
            <span class="number">{{splitTime.d}}</span>
        </div>
        <div class="fifth" @click="closure"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            time: 0
        }
    },
    created() {
        this.time = 1800 - localStorage.thirtyMinutes
        let Timer = setInterval(() => {
            this.time--
            if (this.time <= 0) {
                clearInterval(Timer)
                this.closure()
            }
        }, 1000)
    },
    computed: {
        splitTime() {
            let time = this.time

            if (Math.floor(time / 60) >= 10) {
                var a = (Math.floor(time / 60) + '')[0]
                var b = (Math.floor(time / 60) + '')[1]
            } else {
                var a = 0
                var b = Math.floor(time / 60)
            }

            if ((time % 60) >= 10) {
                var c = (time % 60 + '')[0]
                var d = (time % 60 + '')[1]
            } else {
                var c = 0
                var d = time % 60
            }

            return { a, b, c, d }
        }
    },
    methods: {
        closure() {    //关闭页面
            this.$emit('aaa')
        }
    }
}
</script>

<style scoped>
.frequently {
    background-image: url("@/assets/imgs/验证手机4.svg");
    width: 709px;
    height: 417px;
}
.colon {
    display: inline-block;
    line-height: 60px;
    width: 15px;
    font-family: PingFang-SC-Bold;
    font-size: 42px;
}
.fifth {
    background-image: url("@/assets/imgs/确认.svg");
    height: 59px;
    width: 182px;
    margin: 0 auto;
    margin-top: 25px;
    cursor: pointer;
}
.fourth {
    height: 60px;
    text-align: center;
    margin-top: 18px;
}
.number {
    display: inline-block;
    background-color: #c745dc;
    line-height: 60px;
    width: 40px;
    font-family: PingFang-SC-Bold;
    color: #fff;
    font-size: 42px;
    margin: 0 5px;
}
.first {
    font-family: PingFang-Bold;
    font-size: 29px;
    line-height: 29px;
    color: #5a5a5a;
    text-align: center;
    padding-top: 94px;
}
.second {
    font-family: PingFang-Bold;
    font-size: 29px;
    line-height: 29px;
    color: #5a5a5a;
    text-align: center;
    padding-top: 21px;
}
.third {
    font-family: PingFang-Bold;
    font-size: 23px;
    line-height: 23px;
    color: #c745dc;
    text-align: center;
    padding-top: 24px;
}
</style>