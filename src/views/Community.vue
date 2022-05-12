<script>
import RecommendLink from '@/components/RecommendLink.vue';
export default {
  setup() {

  },
  components: {
    RecommendLink,
  },
};
</script>

<template>
<div class="grid grid-cols-2 grid-flow-row gap-4">
  <RecommendLink />
  <RecommendLink />
  <RecommendLink />
  <RecommendLink />
</div>
</template>
