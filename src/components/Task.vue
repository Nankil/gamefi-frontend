<script>
export default {
  data() {
    return {
      task_title: 'task',
      tasks: [
        {
          icon: 'someurl',
          content: 'some content',
          award: '+20',
          finished: true,
        },
        {
          icon: 'someurl',
          content: 'some content',
          award: '+20',
          finished: false,
        },
      ],
    };
  },
};
</script>

<template>
  <div class="w-full">
    <div class="text-purple-200 font-bold text-2xl">{{ task_title }}</div>
    <div class="w-full border-2">
      <div class="border-b-2 m-2">
        <div v-for="task in tasks" :key="task" class="flex flex-row border-t-2">
            <img :src="task.icon" :alt="task.icon" class="w-1/6 border-l-2 border-r-2 pl-2">
            <div class="w-1/2 border-r-2 pl-2">{{task.content}}</div>
            <div class="w-1/6 border-r-2 pl-2">{{task.award}}</div>
            <div v-if="task.finished"
            class="text-green-500 w-1/6 border-r-2 pl-2">Finished</div>
            <div v-else
            class="text-red-500 w-1/6 border-r-2 pl-2">unfinish</div>
        </div>
      </div>
    </div>
  </div>
</template>
