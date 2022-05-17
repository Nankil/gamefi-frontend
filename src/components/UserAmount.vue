<template>
  <div class="flex justify-between" >
    <div class="flex flex-col justify-between">
        <div class="text-black">会员注册人数</div>
        <div class="text-3xl">9524</div>
    </div>
    <div class="flex flex-col justify-between">
        <LineChart   />
    </div>
  </div>
</template>

<script setup>
    import LineChart from '@/components/LineChart.vue';
</script>

<style>
</style>