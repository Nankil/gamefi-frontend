<template>
  <div>
    <table class="table-auto border-collapse h-96 w-full">
      <tbody>
        <tr v-for="n in trcount" :key="n">
          <td class="w-1/4 border border-white"><img src="" alt="" /></td>
          <td class="border border-white p-2">
            <div class="text-blue-600 ">标题</div>
            <div class="text-blue-600">time</div>
            <div>content</div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-center">
      <div class="mx-0.5">&lt;</div>
      <div v-for="n in pagecount" :key="n" class="mx-0.5">{{n}}</div>
      <div class="mx-0.5">></div>
    </div>
  </div>
</template>
<script setup>
import {ref } from 'vue';
let trcount=ref(7);
let pagecount=ref(6);
</script>
<style>
</style>