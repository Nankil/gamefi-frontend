<script>
export default {
  props: ['title', 'incre', 'data'],
  data() {
    // return {
    //   title: 'hello',
    //   incre: 1000,
    //   data: [100, 100, 300, 100],
    // };
  },
};
</script>

<template>
  <div class="w-full flex flex-row justify-between items-center">
    <div class="flex flex-col">
      <div class="text-sm">{{ title }}</div>
      <div class="text-teal-500 text-2xl font-bold">{{ incre }}</div>
    </div>
    <div class="flex flex-col">
      <img src="https://picsum.photos/id/2/125/49" alt="">
    </div>
  </div>
</template>
