<template>
    <!-- 我的账户 -->
    <div class="w-full">
        <div class="bg"></div>
        <div class="account-container">
            <div class="content-container">
                <div>
                    <Route />
                </div>

                <div style="margin:0 auto;">
                    <NavBar2 />
                </div>

                <router-view></router-view>
            </div>
        </div>
    </div>
</template>


<script >
import NavBar2 from '@/components/Account/NavBar2.vue';
import Route from '@/components/Route.vue';
export default {
    components: {
        NavBar2,
        Route,
    },
    mounted() {
        console.log(this);
    }
};
</script>


<style scoped>
.w-full {
    padding-bottom: 200px;
    position: relative;
}
.bg {
    width: 100%;
    height: calc(100% + 52px);
    background: rgba(255, 255, 255, 0.5) 100px 100px;
    position: absolute;
    top: -52px;
    left: 0;
    z-index: -1;
}
.account-container {
    width: 1746px;
    margin: 0 auto;
    padding-top: 10px;
}
</style>
