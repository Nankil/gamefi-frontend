<template>
  <router-view></router-view>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

console.log(getCurrentInstance());
</script>

<style>

</style>