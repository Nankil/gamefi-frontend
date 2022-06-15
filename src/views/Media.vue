<script>
// import NavBar2 from '@/components/NavBar2.vue';
export default {
    data() {
        return {
            routes: [
                {
                    path: '/media/photos',
                    name: 'photos',
                    display_name: this.$t('Media.photo'),
                },
                {
                    path: '/media/videos',
                    name: 'videos',
                    display_name: this.$t('Media.video'),
                },
            ],
        };
    },
    components: {
        // NavBar2,
    },
};
</script>


<template>
    <div class="w-full">
        <div>
            <!-- <NavBar2 :routes="routes" /> -->
            <router-view></router-view>
        </div>
    </div>
</template>
