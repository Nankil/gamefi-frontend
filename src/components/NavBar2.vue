<script>
export default {
    props: ['routes'],
    data() {
        return {
            // routes: [
            //  {
            //    path: '/account/info',
            //    name: 'Info',
            //    display_name: 'Info',
            //  },
            //  {
            //    path: '/account/tasks',
            //    name: 'Tasks',
            //    display_name: 'Tasks',
            //  },
            //  {
            //    path: '/account/credit',
            //    name: 'Credit',
            //    display_name: 'Credit',
            //  },
            //  {
            //    path: '/account/assets',
            //    name: 'Assets',
            //    display_name: 'Assets',
            //  },
            //  {
            //    path: '/account/nft',
            //    name: 'NFT',
            //    display_name: 'NFT',
            //  },
            //  {
            //    path: '/account/investment',
            //    name: 'Investment',
            //    display_name: 'Investment',
            //  },
            // ],
        };
    },
    computed: {
        currentRoutePath() {
            console.log(this.$route.path);
            return this.$route.path;
        },
    },
};
</script>

<template>
    <div class="father" style="padding-top:48px;padding-bottom:60px;">
        <div v-for="(route,x) in routes" :key="route" @click="$router.push(route.path)">
            <button
                v-if="currentRoutePath == route.path"
                class="w-full selected"
            >{{ route.display_name }}</button>
            <button v-else class="register">{{ route.display_name }}</button>
        </div>
    </div>
</template>
<style scoped>
.father {
    display: flex;
    justify-content: space-between;
}

.register {
    background-image: url("/imgs/nav2_button.svg");
    background-repeat: no-repeat;
    height: 75px;
    width: 211px;
    font-family: PingFang-Bold;
    font-size: 32px;
    line-height: 32px;
    color: #6b6b6b;
}

.selected {
    background: url("/imgs/nav2_button_selected.svg");
    background-repeat: no-repeat;
    height: 75px;
    width: 211px;
    font-family: PingFang-Bold;
    font-size: 32px;
    line-height: 32px;
    color: #6b6b6b;
}
</style>
