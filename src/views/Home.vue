<template>
    <!-- 首页 -->
    <div class="home">
        <div class="dark:text-white flex flex-col Home">
            <img src="@/assets/imgs/最新消息中文版标题.svg" width="894" height="88" alt class="message-bar" />
            <Homeswiper />
            <img class="more self-end icon-more" src="@/assets/imgs/more.png" alt />
        </div>
        <img src="@/assets/imgs/spliter1.png" alt="splitter" class="spliter" />

        <div class="dark:text-white flex flex-col Home new-message">
            <HomeNewMessage />
        </div>
        <img src="@/assets/imgs/spliter2.png" alt="splitter" class="spliter" />

        <div class="dark:text-white flex flex-col Home">
            <img src="@/assets/imgs/代币经济.svg " class="economic-bar" alt />

            <Hometoken />

            <div class="h-20 px-40 my-10 text-4xl text-purple-500">{{ $t("Home.PDR") }}</div>
            <div class="h-20 px-40 text-4xl text-purple-500">{{ $t("Home.partners") }}</div>
        </div>
    </div>
</template>

<script>
import HomeNewMessage from './HomeNewMessage.vue';
import Homeswiper from './Homeswiper.vue';
import Hometoken from './Hometoken.vue';
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
    components: { Homeswiper, HomeNewMessage, Hometoken },
};
</script>


<style lang="less" scoped>
.home {
    .more {
        width: 191px;
        margin: 6px 38px 0 0;
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
.icon-more {
}
.message-bar {
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 47px;
}
.economic-bar {
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 51px;
    width: 923px;
    height: 85px;
}
</style>
