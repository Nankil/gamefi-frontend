<script>
export default {
  props: ['color', 'msg'],
};
</script>

<template>
  <div class="w-full h-full">
    <div v-if="color === 'red'" class="bg-red-400 text-blue-200">
    {{ msg }}
    </div>
    <div v-if="color === 'blue'" class="bg-blue-400 text-red-200">
    {{ msg }}
    </div>
  </div>
</template>
