<script>
export default {
  data() {
    return {
      promote_code: 'code',
      promote_by: {
        username: 'username',
        id: 'id',
        promote_code: 'invitedBy code',
      },
      invited: [
        {
          username: 'username',
          id: 'id',
          invited_time: 'invited_time',
        },
        {
          username: 'username',
          id: 'id',
          invited_time: 'invited_time',
        },
      ],
    };
  },
};
</script>
<template>
  <div>
    <div class="flex flex-row w-full border-t-2 flex-wrap ">
      <div class="flex flex-col w-5/12">
        <div class="text-purple-300 mt-2 mb-2 font-semibold text-2xl">
          My promote code
        </div>
        <div class="flex flex-row w-full border-2">
          <div class="lg:w-4/6 inline-block align-middle m-2
          border-2 pl-2 pr-2 text-center p-2">Promote Code</div>
          <button>[Copy]</button>
        </div>
      </div>
      <div class="flex flex-col w-5/12 ml-5">
        <div class="text-purple-300 mt-2 mb-2 font-semibold text-2xl">
          My promote code
        </div>
        <div class="flex flex-row w-full border-2">
          <div class="lg:w-4/6 inline-block align-middle m-2
          border-2 pl-2 pr-2 text-center p-2">Promote Code</div>
          <button>[Copy]</button>
        </div>
      </div>
    </div>

    <div class="w-full mt-5">
      <div class="text-purple-300
      mt-2 mb-2 font-semibold text-2xl">Invited</div>
    </div>
    <div class="w-full border-2 p-3">
      <div class="w-full flex flex-row border-b-2">
        <div class="w-1/3">Register at</div>
        <div class="w-1/3">NO.</div>
        <div class="w-1/3">Name</div>
      </div>
      <div v-for="ppl in invited" :key="ppl"
      class="p-2 w-full flex flex-row text-teal-300">
        <div class="w-1/3">{{ppl.invited_time}}</div>
        <div class="w-1/3">{{ppl.id}}</div>
        <div class="w-1/3">{{ppl.username}}</div>
      </div>
    </div>
  </div>
</template>
