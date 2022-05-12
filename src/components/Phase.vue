<script>
export default {
  props: ['title', 'tasks'],
};
</script>

<template>
  <div>
    <div class="text-purple-500">
      <div>{{ title }}</div>
      <div v-for="task in tasks" :key="task"> {{ task }}</div>
    </div>
  </div>
</template>
