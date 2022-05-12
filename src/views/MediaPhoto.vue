<script>
import Media from '@/components/Media.vue';
export default {
  data() {
    return {
      photos: [
        {
          img: 'https://picsum.photos/id/1/200/200',
          title: 'Photo 1',
          date: '2020-01-01',
        },
        {
          img: 'https://picsum.photos/id/2/200/200',
          title: 'Photo 2',
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
    <div v-for="photo in photos" :key="photo.title">
    <Media :img="photo.img" :title="photo.title" :date="photo.date" />
    </div>
  </div>
</template>
