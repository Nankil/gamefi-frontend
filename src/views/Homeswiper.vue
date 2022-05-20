<template>
  <div class="flex swiper">
    <img
      src="https://tse2-mm.cn.bing.net/th/id/OIP-C.GVB3oBFf_iZaeayURriiYgHaEo?w=204&h=127&c=7&r=0&o=5&pid=1.7"
      class="left-img"
      alt="轮播图"
    />

    <div class="right-info">
      <div class="active">
        <div class="message">hahadddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>
        <div class="time">1111</div>
      </div>
      <div v-for="(x, index) in data" :key="index" class="notactive">
        <div class="message">{{ x.message }}</div>
        <div class="time">{{ x.time }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.swiper {
  width: 1385px;
  height: 550px;
}
.right-info {
  background-color: #fff;
  opacity: 0.8;
  width: 385px;
  overflow: hidden;
}
.left-img {
  height: auto;
  width: 1000px;
  flex-grow: 0;
  flex-shrink: 0;
}
.notactive .message {
  font-size: 20px;
  line-height: 20px;
  color: #5d5d5d;
  overflow: hidden;
  text-overflow: ellipsis;

}
.notactive .time {
  line-height: 10px;
  font-size: 10px;
  color: #5d5d5d;
  margin-top: 11px;
}
.notactive {
  padding: 0 27px;
  height: 74px;
  padding-top: 17px;
  padding-bottom: 16px;
  border-top: 1px dashed #5d5d5d;
  overflow: hidden;

}
.active {
  padding: 0 27px;
  height: 98px;
  padding-top: 22px;
  padding-bottom: 24px;

  border: #000000 solid 1px;
  border-left: none;
  overflow: hidden;
  text-overflow: ellipsis;

}
.active .message {
  font-size: 27px;
  line-height: 27px;
  color: #000000;
    overflow: hidden;
  text-overflow: ellipsis;
}
.active .time {
  font-size: 18px;
  color: #000000;
  margin-top: 14px;
}
</style>

<script setup>
import { onMounted, reactive } from "vue";

const data = reactive([
  {
    message: "hahadddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
    time: "2020-01-01",
  },
  {
    message: "haha",
    time: "2020-01-01",
  },
  {
    message: "haha",
    time: "2020-01-01",
  },
  {
    message: "haha",
    time: "2020-01-01",
  },
  {
    message: "haha",
    time: "2020-01-01",
  },
  {
    message: "haha7",
    time: "2020-01-01",
  },
]);
onMounted(() => {
  console.log(data);
});
</script>

