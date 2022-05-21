<script>
import CoinInfo from "@/components/CoinInfo.vue";
import IncreStat from "@/components/IncreStat.vue";
export default {
  data() {
    return {
      user_stats: [
        {
          title: "会员注册人数",
          incre: "9524",
          data: [1, 2, 43, 4],
        },
        {
          title: "GPC地址数",
          incre: "15453",
          data: [1, 2, 43, 4],
        },
        {
          title: "SSC地址数",
          incre: "10481",
          data: [1, 2, 43, 4],
        },
        {
          title: "电报人数",
          incre: "24567",
          data: [1, 2, 43, 4],
        },
        {
          title: "DC人数",
          incre: "20013",
          data: [1, 2, 43, 4],
        },
        {
          title: "twitter追踪数",
          incre: "10088",
          data: [1, 2, 43, 4],
        },
      ],
    };
  },
  components: {
    CoinInfo,
    IncreStat,
  },
  computed: {},
  methods: {},
};
</script>

<template>
  <div class="flex">
    <div class="container3 flex flex-col">
      <div class="flex flex-col totalassets">
        <div>总资产</div>
        <div class="totalassets1">=$1,800,000,000</div>
      </div>
      <div class="coininfo">
        <CoinInfo /><CoinInfo /><CoinInfo /><CoinInfo /><CoinInfo />
      </div>
    </div>

    <div class="fill"></div>
    <div class="container4 flex flex-col" ref="graphs">
      <div v-for="stat in user_stats" :key="stat.title" class="">
        <IncreStat :title="stat.title" :incre="stat.incre" :data="stat.data" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.fill {
  width: 90px;
}
.container3 {
  background-image: url("/imgs/comm_vouch.png");
  background-size: cover;
  height: 757px;
  width: 644px;
  flex-shrink: 0;
}
.totalassets {
  height: 223px;
  padding-top: 100px;
  padding-bottom: 50px;
  padding-left: 60px;
}
.totalassets1 {
  width: 439px;
  padding-left: 40px;
  font-size: 49px;
  font-family: DIN-Black;
  color: #f36cf7;
  line-height: 49px;
  text-align: left;
}
.coininfo {
  padding-top: 55px;
  padding-left: 60px;
  padding-right: 68px;
}
.container4 {
  background-image: url("/imgs/user_stat.png");
  background-size: cover;
  height: 757px;
  width: 644px;
  padding-right: 64px;
  padding-left: 60px;
  padding-top: 117px;
  flex-shrink: 0;
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
