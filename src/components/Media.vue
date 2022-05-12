<script>
export default {
  props: ['img', 'title', 'date'],
};
</script>

<template>
  <div class="w-full p-2">
    <img :src="img" :alt="title">
    <div class="text-sm">{{title}}</div>
    <div class="text-sm">{{date}}</div>
  </div>
</template>
