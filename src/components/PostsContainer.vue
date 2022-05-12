<script>
export default {
  props: ['posts', 'post_name', 'link', 'upload'],
};
</script>

<template>
<div class="w-full">
  <div class="flex flex-row justify-between mb-2">
      <div class="text-purple-500 text-2xl font-bold">{{ post_name }}</div>
      <button v-if="upload" class="bg-orange-400
      ml-4 mr-4 mb-2 w-1/12">Upload</button>
  </div>
      <div class="border">
        <div class="flex flex-row border-b bg-gray-600 text-center p-2">
          <div class="w-1/6">Updated Time</div>
          <div class="w-1/6">Author</div>
          <div class="w-1/6">Game name</div>
          <div class="w-1/2">Filename</div>
        </div>
        <div v-for="post in posts" :key="post.name" class="text-center p-2">
        <div v-if="post == posts[0]" class="text-orange-200 flex flex-row">
          <div class="w-1/6">{{ post.update_time }}</div>
          <div class="w-1/6">{{ post.author }}</div>
          <div class="w-1/6">{{ post.game_name }}</div>
          <div class="w-1/2">{{ post.filename }}</div>
        </div>
        <div v-else class="text-teal-200 flex flex-row">
          <div class="w-1/6">{{ post.update_time }}</div>
          <div class="w-1/6">{{ post.author }}</div>
          <div class="w-1/6">{{ post.game_name }}</div>
          <div class="w-1/2">{{ post.filename }}</div>
        </div>
        </div>
      </div>
      <div class="flex flex-row-reverse">
        <div class="pr-2 text-blue-500">
          <a :href="link">more>>></a>
        </div>
      </div>
    </div>
</template>
