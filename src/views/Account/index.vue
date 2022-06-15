<template>
    <!-- 我的账户 -->
    <div class="wrapper w-full">
        <div class="background"></div>
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
.background {
    width: 100%;
    height: 2500px;
    position: absolute;
    background: white;
    opacity: 50%;
    z-index: -1;
}
.content-container {
    padding-top: 79px;
}
.wrapper {
    margin-top: 260px;
    position: absolute;
    background-size: 100% 100%;
    top: -10%;
}
.account-container {
    width: 1746px;
    margin: 0 auto;
}
</style>
