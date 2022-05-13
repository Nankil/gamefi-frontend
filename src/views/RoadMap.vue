<script>
import Phase from '@/components/Phase.vue';
export default {
  data() {
    return {
      phases: [
        {
          title: 'Phase 1',
          tasks: ['website', 'mechanism', 'ecosystem', 'mvp'],
        },
        {
          title: 'Phase 2',
          tasks: ['website', 'mechanism', 'ecosystem', 'mvp'],
        },
      ],
    };
  },
  components: {Phase},
};
</script>

<template>
  <div>
    <div class="text-purple-500">{{$t('RoadMap')}}</div>
    <div v-for="phase in phases" :key="phase.title" class="mt-10">
      <Phase :title="phase.title" :tasks="phase.tasks" />
    </div>
  </div>
</template>
