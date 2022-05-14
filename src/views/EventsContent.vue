
<template>
  <div>
    <table class="table-auto border-collapse h-96 w-full">
      <tbody>
        <tr v-for="n in trcount" :key="n">
          <td class="w-1/4 border border-white"><img src="" alt="" /></td>
          <td class="border border-white p-2">
            <div class="text-blue-600 ">{{content.title}}</div>
            <div class="text-blue-600">{{content.time}}</div>
            <div>{{content.content}}</div>
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
import {reactive, ref } from 'vue';
let trcount=ref(7);
let pagecount=ref(6);
let content=reactive({
  title:"title",
  time:"time",
  content:"content"
});
</script>
<style>
</style>