<script>
import Media from '@/components/Media.vue';
export default {
  data() {
    return {
      videos: [
        {
          img: 'https://picsum.photos/id/1/200/200',
          title: 'video 1',
          date: '2020-01-01',
        },
        {
          img: 'https://picsum.photos/id/2/500/300',
          title: 'video 2',
          date: '2020-01-01',
        },
        {
          img: 'https://picsum.photos/id/2/300/200',
          title: 'video 3',
          date: '2020-01-01',
        },
        {
          img: 'https://picsum.photos/id/2/300/200',
          title: 'video 4',
          date: '2020-01-01',
        },
        {
          img: 'https://picsum.photos/id/2/200/200',
          title: 'video 5',
          date: '2020-01-01',
        },
      ],
    };
  },
  components: {Media},
};
</script>

<template>
  <div class="grid grid-cols-4 grid-flow-row">
    <div v-for="video in videos" :key="video.title">
    <Media :img="video.img" :title="video.title" :date="video.date" />
    </div>
  </div>
</template>
