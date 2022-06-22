<script setup>
import Heading from './components/Heading.vue';
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import Route from './components/Route.vue';
import Log from './components/Log.vue';
import NavInvest from './components/NavInvest.vue';
import lastestnewsdetailVue from './views/lastestnewsdetail.vue';
</script>


<script>
import { mapState } from 'vuex';
import { FundingContract } from './api/bsc';
import contractInterface from './contracts/Funding.json';

export default {
    data() {
        return {
            alertMsg: {
                color: '',
                msg: '',
            },
        };
    },

    computed: {
        ...mapState(['errorLog', 'infoLog']),
        currentRoutePath() {
            return this.$route.path;
        },
        isBarActive() {
            return this.$route.path.slice(0, 8) === '/account' ? false : true;
        },
    },
    provide() {
        return {
            currentRoutePath: this.currentRoutePath,
        };
    },
    mounted() {
        this.$store.dispatch('setWeb3', window.ethereum);
        const contract = new FundingContract(
            contractInterface.abi,
            '0xc58d6Fac68B761c2F735160fD43bd9176E0B443D',
        );
        contract
            .fundOf('0xbabF784Cb81452b43055233BeE50d80a866609a6')
            .then((v) => console.log(v));
    },
    watch: {
        errorLog(val) {
            this.alertMsg.color = 'red';
            this.alertMsg.msg = val;
        },
        infoLog(val) {
            console.log('info changed to: ', val);
            this.alertMsg.color = 'blue';
            this.alertMsg.msg = val;
        },
    },
};
</script>


<template >
    <div>
        <div class="text-white w-1/5 absolute bottom-10 right-4" v-if="infoLog.length > 0">
            <Log :msg="infoLog[0]" :color="'blue'" />
        </div>
        <div class="text-white w-1/5 absolute bottom-3 right-4" v-if="errorLog.length > 0">
            <Log :msg="errorLog[0]" :color="'red'" />
        </div>
        <div class="w-full">
            <Heading />
        </div>

        <div class="flex flex-row w-full h-full content">
            <div class="bg"></div>

            <!-- 首页左边 -->
            <div v-show="isBarActive" class="navbar">
                <!-- 首页导航 -->
                <NavBar />
                <div class="w-full mt-10 invest-wrapper">
                    <NavInvest />
                </div>
            </div>

            <!-- 首页右边 -->
            <div
                :class="[isBarActive ? 'content' : 'w-full']"
                style="margin: 0 auto; height: fit-content"
            >
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.main {
    height: fit-content;
}
.navbar {
    height: 3189px;
    background-image: url("@/assets/imgs/nav_left_bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    padding-left: 30px;
    padding-right: 30px;
}

.invest-wrapper {
    margin-top: 92px;
}

.content {
    position: relative;
    .bg {
        width: 100%;
        height: calc(100% + 52px);
        position: absolute;
        top: -52px;
        left: 0;
        z-index: -1;
        background: rgba(255, 255, 255, 0.3);
    }
}
</style>
