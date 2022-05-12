<script>
import PostsContainer from '../components/PostsContainer.vue';
export default {
  data() {
    return {
      posts: {
        offcial: [
          {
            update_time: '2020-01-01',
            author: 'official',
            game_name: 'Dota 2',
            filename: 'data.word',
          },
          {
            update_time: '2020-01-01',
            author: 'official',
            game_name: 'Dota 2',
            filename: 'data.word',
          },
          {
            update_time: '2020-01-01',
            author: 'official',
            game_name: 'Dota 2',
            filename: 'data.word',
          },
        ],
        users: [
          {
            update_time: '2020-01-01',
            author: 'official',
            game_name: 'Dota 2',
            filename: 'data.word',
          },
          {
            update_time: '2020-01-01',
            author: 'official',
            game_name: 'Dota 2',
            filename: 'data.word',
          },
        ],
      },
    };
  },
  components: {PostsContainer},
};
</script>

<template>
  <div class="w-full">
    <div class="w-full border p-2">
      <div class="flex flex-row space-x-4">
        <div class="inline-block text-center
        align-middle w-1/12 m-2">Wallet</div>
        <div class="border
        inline-block text-center align-middle p-2 ml-2 w-1/6">Create</div>
        <div class="border
        inline-block text-center align-middle p-2 ml-2 w-1/6">Transfer</div>
        <div class="border
        inline-block text-center align-middle p-2 ml-2 w-1/6">Buy</div>
        <div class="border
        inline-block text-center align-middle p-2 ml-2 w-1/6">Connect</div>
      </div>
      <div class="flex flex-row mt-2 space-x-4">
        <div class="inline-block text-center align-middle w-1/12 m-2">Game</div>
        <div class="border
        inline-block text-center align-middle p-2 ml-2 w-1/6">Gene Player</div>
      </div>
    </div>
    <div class="w-full mt-5">
      <PostsContainer :posts="posts.offcial" :post_name="'official post'"
      :link="'https://baidu.com'" />
    </div>
    <div class="w-full mt-5">
      <PostsContainer :posts="posts.users" :post_name="'users'"
      :link="'https://baidu.com'"
      :upload="true" />
    </div>
  </div>
</template>
