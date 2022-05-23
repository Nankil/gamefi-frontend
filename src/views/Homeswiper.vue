<template>
  <div class="flex swiper">
    <img :src="imgurl" class="left-img"  :class="{myanimotion:isanimotion}" alt="轮播图" />

    <div class="right-info">
      <div
        v-for="(x, index) in data"
        :key="index"
        class="notactive"
        :class="{ active: x.isactive }"
        @click="swiper(index)"
      >
        <div class="message">{{ x.message }}</div>
        <div class="time">{{ x.time }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.swiper {
  width: 1344px;
  height: 530px;
}
.right-info {
  background-color: #fff;
  opacity: 0.8;
  width: 340px;
  overflow: hidden;
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
  line-height: 13px;
  font-size: 13px;
  color: #5d5d5d;
  margin-top: 8px;
}
.notactive {
  padding: 0 24px;
  height: 70px;
  padding-top: 17px;
  padding-bottom: 14px;
  border-top: 1px dashed #5d5d5d;
  overflow: hidden;
}

.myanimotion {
  animation: move1 5s infinite ease-in-out;
}


@keyframes move1 {
  0% {
    /* transform: translateX(0); */
    opacity: 0.5;
  }

  25% {
    /* transform: translateX(-100%); */
    opacity: 1;
  }
  75%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
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
  padding-bottom: 23px;
  height: 110px;
  border: #000000 solid 1px;
  border-left: none;
  overflow: hidden;
  text-overflow: ellipsis;
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
var isanimotion=ref(false);
var imgurl = ref(data[0].imgurl);
let s = 0;

function swiper(n) {
  s=n;
  data.forEach((x, index) => {
    x.isactive = false;
  });
  data[n].isactive = true;
  isanimotion.value=true;
  //停止定时器
  clearInterval(timer);
  //重新开启定时器
  timer = setInterval(() => {
    swiper(s + 1);
  }, 5000);
  setTimeout(() => {
    isanimotion.value=false;
  }, 1000);
  imgurl.value = data[n].imgurl;
}
let timer= setInterval(() => {
  s++;
  console.log(s);
  if (s >= data.length) {
    s = 0;
  }
  swiper(s);
}, 5000);
</script>

