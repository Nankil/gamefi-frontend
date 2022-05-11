<script>
export default {
  data() {
    return {
      privilege: 0,
      privileges: {
        0: {
          name: 'User',
          allows: ['some', 'other', 'some'],
        },
        1: {
          name: 'Core',
          allows: ['some', 'other', 'some'],
        },
        2: {
          name: 'Super',
          allows: ['some', 'other', 'some'],
        },
      },
      investments: [
        {
          name: 'Eth',
          allow: false,
          bound: 'allow ultimate',
          invested: 0,
          operation: {
            name: 'Buy',
            link: '',
          },
        },
        {
          name: 'Bitcoin',
          allow: true,
          bound: 'allow ultimate',
          invested: 0,
          operation: {
            name: 'Buy',
            link: '',
          },
        },
      ],
    };
  },
};
</script>

<template>
  <div class="w-full">
    <div class="w-full">
      <div class="text-purple-400 font-bold text-2xl">My privilege</div>
      <div class="flex flex-col border-2 p-2">
        <div class="font-bold text-xl text-yellow-200">
          {{privileges[privilege].name}}</div>
        <div v-for="allow in privileges[privilege].allows" :key="allow">
          *{{ allow }}</div>
      </div>
    </div>
    <div class="w-full">
      <div class="text-purple-400 font-bold text-2xl">My Investment</div>
      <div class="w-full border-2 p-5">
        <div class="flex flex-row">
          <div class="w-1/12"></div>
          <div class="w-1/3 pl-5">Name</div>
          <div class="w-1/12">Allow</div>
          <div class="w-1/6">Bound</div>
          <div class="w-1/12">Invested</div>
          <div class="w-1/12">Operation</div>
        </div>
        <div class="w-full border-b-2 border-l-2 border-r-2">
          <div v-for="inv in investments" :key="inv.name" class="flex flex-row
          border-t-2">
            <div class="w-1/12"></div>
            <div class="w-1/3 border-l-2 pl-5">{{inv.name}}</div>
            <div class="w-1/12">{{inv.allow}}</div>
            <div class="w-1/6">{{inv.bound}}</div>
            <div class="w-1/12">{{inv.invested}}</div>
            <div class="w-1/12">{{inv.operation.name}}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
