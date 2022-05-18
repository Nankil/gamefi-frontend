<script>
import CoinInfo from '@/components/CoinInfo.vue';
import IncreStat from '@/components/IncreStat.vue';
export default {
  data() {
    return {
      user_stats: [
        {
          title: '会员注册人数',
          incre: '9524',
          data: [1, 2, 43, 4],
        },
        {
          title: 'GPC地址数',
          incre: '15453',
          data: [1, 2, 43, 4],
        },
        {
          title: 'SSC地址数',
          incre: '10481',
          data: [1, 2, 43, 4],
        },
        {
          title: '电报人数',
          incre: '24567',
          data: [1, 2, 43, 4],
        },
        {
          title: 'DC人数',
          incre: '20013',
          data: [1, 2, 43, 4],
        },
        {
          title: 'twitter追踪数',
          incre: '10088',
          data: [1, 2, 43, 4],
        },
      ],
    };
  },
  components: {
    CoinInfo,
    IncreStat,
  },
  computed: {
  },
  methods: {
  },
};
</script>

<template>
  <div class="grid lg:grid-cols-2 sm:grid-cols-1 px-40">
    <div class="container3 pr-80 py-16 w-full flex flex-col items-center">
      <div class="flex flex-col border-b border-pink-500 w-3/4 pb-4">
        <div>总资产</div>
        <div class="text-pink-500 font-bold text-3xl text-center">
          =$1,800,000,000
        </div>
      </div>
      <div class="w-3/4"><CoinInfo /></div>
      <div class="w-3/4"><CoinInfo /></div>
      <div class="w-3/4"><CoinInfo /></div>
      <div class="w-3/4"><CoinInfo /></div>
      <div class="w-3/4"><CoinInfo /></div>
    </div>

    <div class="container4 pl-80 py-16 w-full flex flex-col items-center" ref="graphs">
      <div v-for="stat in user_stats" :key="stat.title" class="p-2 w-3/4">
        <IncreStat :title="stat.title" :incre="stat.incre" :data="stat.data" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container3 {
  background-image: url("/imgs/comm_vouch.png");
  background-size: contain;
  background-position: left;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  /* width: 100%;
    height: 0;
    padding-top: 134.48%; */
  /* (img-height / img-width * container-width) */
  /* (853 / 1280 * 100) */
}
.container4 {
  background-image: url("/imgs/user_stat.png");
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}

.btn-red {
  background-image: url("/imgs/red_button.svg");
  background-size: 100% 100%;
  padding: 3%;
}

.btn-green {
  background-image: url("/imgs/green_button.svg");
  background-size: 100% 100%;
  padding: 3%;
}
</style>
