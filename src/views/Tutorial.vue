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
        inline-block text-center align-middle p-2 ml-2 w-1/6">{{$t('Turorial.Wallet.Create')}}</div>
        <div class="border
        inline-block text-center align-middle p-2 ml-2 w-1/6">{{$t('Turorial.Wallet.Transfer')}}</div>
        <div class="border
        inline-block text-center align-middle p-2 ml-2 w-1/6">{{$t('Turorial.Wallet.Buy')}}</div>
        <div class="border
        inline-block text-center align-middle p-2 ml-2 w-1/6">{{$t('Turorial.Wallet.Cont')}}</div>
      </div>
      <div class="flex flex-row mt-2 space-x-4">
        <div class="inline-block text-center align-middle w-1/12 m-2">Game</div>
        <div class="border
        inline-block text-center align-middle p-2 ml-2 w-1/6">Gene Player</div>
      </div>
    </div>
    <div class="w-full mt-5">
      <PostsContainer :posts="posts.offcial" :post_name="$t('Turorial.offcial')" 
      :link="'https://baidu.com'" />
    </div>
    <div class="w-full mt-5">
      <PostsContainer :posts="posts.users" :post_name="$t('Turorial.user')"
      :link="'https://baidu.com'"
      :upload="true" />
    </div>
  </div>
</template>
