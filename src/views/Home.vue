<template>
    <!-- 首页 -->
    <div class="home">
        <div class="dark:text-white flex flex-col">
            <!-- 最新消息 -->
            <div class="latestNews">{{$tm('home.latestNews')}}</div>

            <!-- 轮播 -->
            <Swiper />

            <!-- 更多 -->
            <img
                class="more self-end icon-more"
                @click="$router.push('/latestNews')"
                src="@/assets/imgs/more.png"
            />
        </div>

        <!-- 分割线1 -->
        <img src="@/assets/imgs/spliter1.png" alt="splitter" class="spliter" />

        <div class="dark:text-white flex flex-col Home new-message">
            <!-- 社区金库和用户统计 -->
            <ValleyAndStatistics />
        </div>

        <!-- 分割线2 -->
        <img src="@/assets/imgs/spliter2.png" alt="splitter" class="spliter spliter2" />

        <div class="dark:text-white flex flex-col Home">
            <!-- 代币经济 -->
            <div class="latestNews">{{$tm('home.tokenEconomy')}}</div>

            <!-- 母币、子币 -->
            <div class="home-maternal">
                <Maternal type="mother" />
                <Maternal type="son" />
            </div>

            <div class="h-20 px-40 my-10 text-4xl text-purple-500">{{ $t("home.bottom.PDR") }}</div>
            <div class="h-20 px-40 text-4xl text-purple-500">{{ $t("home.bottom.partners") }}</div>
        </div>
    </div>
</template>

<script scoped>
import Swiper from '@/components/Home/Swiper.vue';
import ValleyAndStatistics from '@/components/Home/ValleyAndStatistics.vue';
import Maternal from '@/components/Home/Maternal.vue';
export default {
    name: 'app',
    data() {
        return { locale: 'en' };
    },
    watch: {
        locale(val) {
            this.$i18n.locale = val;
        },
    },
    components: { Swiper, ValleyAndStatistics, Maternal },
};
</script>


<style lang="less" scoped>
.home {
    width: 1345px;
    .more {
        width: 191px;
        margin: 6px 38px 0 0;
        cursor: pointer;
    }

    // 最新消息、代币经济
    .latestNews {
        width: 903px;
        line-height: 88px;
        text-align: center;
        color: #8a8cd8;
        font-size: 29px;
        font-family: PingFang-SC-Bold;
        background: url(@/assets/imgs/无字框.svg) no-repeat;
        margin: 13px 0 47px 255px;
        letter-spacing: 3px;
    }

    .spliter2 {
        display: inline-block;
        margin-top: 7px;
    }
}
.Home {
    margin: 0 auto;
    width: 1385px;
}

.new-message {
    margin-top: 43px;
    margin-bottom: 54px;
}
.economic-bar {
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 51px;
    width: 923px;
    height: 85px;
}

.home-maternal {
    width: 1345px;
    display: flex;
    justify-content: space-between;
}
</style>
