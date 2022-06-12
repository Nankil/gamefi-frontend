<template>
    <!-- 我的任务 -->
    <div class="w-full">
        <div>
            <Task />
        </div>
        <div class="mt-5">
            <Task />
        </div>
    </div>
</template>


<script>
import Task from '@/components/Task.vue';
export default {
    components: { Task },
};
</script>


