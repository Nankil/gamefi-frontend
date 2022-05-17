<template>
  <Chart
    :size="{ width: 150, height: 100 }"
    :data="data"
    :margin="margin"
    :direction="direction">

    <template #layers>
      <Grid strokeDasharray="2,2" />
      <Line :dataKeys="['name', 'pl']" />
    </template>

  </Chart>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {Chart, Grid, Line} from 'vue3-charts';

const plByMonth = [
  {name: 'Jan', pl: 500, avg: 500, inc: 300},
  {name: 'Feb', pl: 900, avg: 900, inc: 400},
  {name: 'Apr', pl: 400, avg: 400, inc: 500},
  {name: 'Mar', pl: 3100, avg: 1300, inc: 700},
];

export default defineComponent({
  name: 'LineChart',
  components: {Chart, Grid, Line},
  setup() {
    const data = ref(plByMonth);
    const direction = ref('horizontal');
    const margin = ref({
      left: 0,
      top: 20,
      right: 20,
      bottom: 0,
    });

    return {data, direction, margin};
  },
});
</script>

<style>
#app {
  color: #2ecc71
}
</style>
