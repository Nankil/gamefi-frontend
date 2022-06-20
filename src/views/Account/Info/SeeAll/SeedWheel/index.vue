<template>
    <!-- 种子轮 -->
    <div class="SeedWheel">
        <promoteRule />
        <div class="wrapper" style="height:400px;">发发发发发</div>
    </div>
</template>

<script>
import promoteRule from '@/components/Account/promoteRule.vue'
export default {
    components: {
        promoteRule
    }
}
</script>

<style lang="less" scoped>
.SeedWheel {
    background: rgba(255, 255, 255, 0.3);
    .wrapper {
        width: 1580px;
        margin: 0 auto;
    }
}
</style>