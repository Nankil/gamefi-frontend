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
  <div>{{ currentRoutePath }}</div>
</template>
