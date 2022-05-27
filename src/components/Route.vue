<script>
export default {
  inject: ['currentRoutePath'],
  methods: {
    parsePath2(path) {
      return path.split('/').filter(Boolean);
    },
  },
};
</script>

<template>
  <div class="route flex flex-row">
    <span> 网站首页 </span>
    <div class="divider">></div>
    <span>Task</span>
    <div class="divider">></div>
    <span>1</span>
  </div>
</template>


<style scoped>
.divider {
  margin-left: 18px;
  margin-right: 18px;
}
.route {
  font-family: PingFang;
  font-size: 24px;
}
</style>
