<template>
    <!-- 轮播 -->
    <div class="flex swiper">
        <img :src="imgurl" class="left-img" :class="{myanimotion:isanimotion}" alt="轮播图" />

        <div class="right-info">
            <div
                v-for="(x, index) in data"
                :key="index"
                class="notactive"
                :class="{ 'active': x.isactive,'border-top':index==0,'border-bottom':index==6}"
                @click="swiper(index-1)"
            >
                <div class="message">{{ x.message }}</div>
                <div class="time" :class="{'border-bottom':index==6}">{{ x.time }}</div>
                <div class="border" v-if="x.isactive" :class="{'border-bottom':index==6}"></div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.swiper {
    width: 1344px;
    height: 530px;
}
.right-info {
    background-color: #fff;
    opacity: 0.8;
    width: 340px;
    // overflow: hidden;
}
.left-img {
    height: auto;
    width: 1004px;
    flex-grow: 0;
    flex-shrink: 0;
    animation: move 0.5s ease-in-out;
}
.notactive .message {
    font-size: 19px;
    line-height: 19px;
    color: #5d5d5d;
    overflow: hidden;
    text-overflow: ellipsis;
}
.notactive .time {
    height: 26px;
    line-height: 13px;
    font-size: 13px;
    color: #5d5d5d;
    margin-top: 8px;
    border-bottom: 1px dashed #5d5d5d;

    /* 去掉最后一个的下虚线 */
    &.border-bottom {
        border-bottom: none;
    }
}

.notactive {
    padding: 17px 24px 0;
    height: 70px;
    // overflow: hidden;
    cursor: pointer;
    position: relative;

    .border {
        width: 100%;
        height: 100%;
        position: absolute;
        top: -1px;
        left: 0;
        border: 1px solid #000;
        border-left: none;

        &.border-bottom {
            border-bottom: none;
        }
    }
}

.myanimotion {
    animation: move1 5s infinite ease-in-out;
}

.notactive2 {
    padding: 0 24px;
    height: 70px;
    padding-top: 17px;
    padding-bottom: 14px;
    border-top: 1px dashed #5d5d5d;
    overflow: hidden;
}
.active {
    padding: 0 24px;
    padding-top: 24px;
    height: 110px;
    // border: #000000 solid 1px;
    border-left: none;
    // overflow: hidden;
    text-overflow: ellipsis;
    position: relative;

    &.border-top:after {
        content: "";
        width: 100%;
        height: 1px;
        background: #000;
        position: absolute;
        top: -1px;
        left: 0;
    }

    &.border-bottom:after {
        content: "";
        width: 100%;
        height: 1px;
        background: #000;
        position: absolute;
        bottom: -1px;
        left: 0;
    }
}
.active .message {
    font-size: 26px;
    line-height: 26px;
    color: #000000;
    overflow: hidden;
    text-overflow: ellipsis;
}
.active .time {
    font-size: 17px;
    color: #000000;
    margin-top: 14px;
    height: 45px;
}
</style>

<script setup>
import { reactive, ref } from "vue";

const data = reactive([
    {
        message: "hahadddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
        time: "2020-01-01",
        isactive: true,
        imgurl:
            "https://s.cn.bing.net/th?id=OIP-C.iilMusn3clq4IvVfdvzjOwHaKe&w=210&h=297&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
    },
    {
        message: "haha",
        time: "2020-01-01",
        imgurl:
            "https://s.cn.bing.net/th?id=OIP-C.NQLL99YzJz3AuHNiQ8C1bwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
    },
    {
        message: "haha",
        time: "2020-01-01",
        imgurl:
            "https://s.cn.bing.net/th?id=OIP-C.NQLL99YzJz3AuHNiQ8C1bwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
    },
    {
        message: "haha",
        time: "2020-01-01",
        imgurl:
            "https://s.cn.bing.net/th?id=OIP-C.NQLL99YzJz3AuHNiQ8C1bwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
    },
    {
        message: "haha",
        time: "2020-01-01",
        imgurl:
            "https://s.cn.bing.net/th?id=OIP-C.NQLL99YzJz3AuHNiQ8C1bwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
    },
    {
        message: "haha7",
        time: "2020-01-01",
        imgurl:
            "https://s.cn.bing.net/th?id=OIP-C.NQLL99YzJz3AuHNiQ8C1bwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
    },
    {
        message: "haha7",
        time: "2020-01-01",
        imgurl:
            "https://s.cn.bing.net/th?id=OIP-C.NQLL99YzJz3AuHNiQ8C1bwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
    },
]);
var isanimotion = ref(false);
var imgurl = ref(data[0].imgurl);
let n = 0;

function swiper(n) {
    n++
    n >= data.length && (n = 0)
    data.forEach(x => {
        x.isactive = false;
    });
    data[n].isactive = true;
    isanimotion.value = true;
    //停止定时器
    clearInterval(timer);
    //重新开启定时器
    timer = setInterval(() => {
        swiper(n);
    }, 5000);
    setTimeout(() => {
        isanimotion.value = false;
    }, 1000);
    imgurl.value = data[n].imgurl;
}

let timer = setInterval(() => {
    swiper(n)
}, 5000);


</script>

