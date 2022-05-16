<template>
  <div class="flex">
    <div class="w-3/4 border-2 border-solid border-white">
      <img src="/imgs/main.png" alt="俺的图图呢" />
    </div>
    <div class="w-1/4 Infoshow">
      <div  v-for="(x, index) in data" :key="index" class="py-2 px-1 active">
        <div class="message">{{ x.message }}</div>
        <div class="text-xs">{{ x.time }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";

let data = reactive([
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
]);
onMounted(() => {
  console.log(data);
});
</script>

<style scoped>
img {
  overflow: hidden;
}
.Infoshow {
  background-color: #fff;
  opacity: 0.8;
  color: black;
  font-weight: 1;
}
.active {
  border: black solid 1px;
}
.message{
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>