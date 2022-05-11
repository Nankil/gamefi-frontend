<script>
export default {
  data() {
    return {
      type: 'all',
      page_count: 1,
      records: [
        {
          time: '2020-01-01',
          id: '1',
          username: 'username',
          event: 'event',
        },
        {
          time: '2020-01-01',
          id: '1',
          username: 'username',
          event: 'event',
        },
        {
          time: '2020-01-01',
          id: '1',
          username: 'username',
          event: 'event',
        },
      ],
    };
  },
  computed: {
    pages() {
      const res = [];
      for (let i=0; i<this.page_count; i++) {
        res.push(i+1);
      }
      return res;
    },
  },
};
</script>

<template>
  <div class="w-full">
    <div class="font-bold text-2xl text-purple-300"> Credit log </div>
    <div class="w-full border-2">
      <div class="w-full flex flex-row">
        <div class="flex flex-row m-2">
          <input type="radio" class="m-1">
          <div>all</div>
        </div>
        <div class="flex flex-row m-2">
          <input type="radio" class="m-1">
          <div>influx</div>
        </div>
        <div class="flex flex-row m-2">
          <input type="radio" class="m-1">
          <div>outflux</div>
        </div>
      </div>
      <div class="w-full border-t-2 pl-5 pr-5 pt-2">
        <div class="w-full flex flex-row border-b-2 text-center">
          <div class="w-1/4">time</div>
          <div class="w-1/6">ID</div>
          <div class="w-1/6">Name</div>
          <div class="w-5/12">Event</div>
        </div>
      </div>
      <div class="w-full pl-5 pr-5 pt-2">
        <div class="w-full flex flex-row text-center"
        v-for="record in records" :key="record.time">
          <div class="w-1/4">{{ record.time }}</div>
          <div class="w-1/6">{{ record.id}}</div>
          <div class="w-1/6">{{ record.username}}</div>
          <div class="w-5/12">{{ record.event }}</div>
        </div>
      </div>
      <div class="w-full border-t-2 text-center">
        <div v-for="page in pages" :key="page">{{ page }}</div>
      </div>
    </div>

  </div>
</template>
