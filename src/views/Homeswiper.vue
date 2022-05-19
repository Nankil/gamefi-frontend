<template>
  <div class="flex w-full">
    <div class="border-2 border-solid border-white left-cover">
      <img src="/imgs/main.png" alt="俺的图图呢" />
    </div>
    <div class="right-info">
      <div  v-for="(x, index) in data" :key="index" class="py-2 px-1 active">
        <div class="message">{{ x.message }}</div>
        <div class="text-xs">{{ x.time }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, reactive} from 'vue';

const data = reactive([
  {
    message: 'hahadddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
    time: '2020-01-01',
  },
  {
    message: 'haha',
    time: '2020-01-01',
  },
  {
    message: 'haha',
    time: '2020-01-01',
  },
  {
    message: 'haha',
    time: '2020-01-01',
  },
  {
    message: 'haha',
    time: '2020-01-01',
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

.left-cover {
  width: 74%;
}
.right-info {
  background-color: #fff;
  opacity: 0.8;
  color: black;
  font-weight: 1;
  width: 26%;
}
.active {
  border: black solid 1px;
}
.message{
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
