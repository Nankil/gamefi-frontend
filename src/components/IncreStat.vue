<script>
export default {
    props: ['title', 'incre', 'data'],
    data() {
        return {
            //   title: 'hello',
            //   incre: 1000,
            //   data: [100, 100, 300, 100],
        };
    },
};
</script>

<template>
    <div class="w-full flex flex-row justify-between items-center">
        <div class="flex flex-col">
            <div class="title">{{ title }}</div>
            <div class="incre">{{ incre }}</div>
        </div>
        <div class="flex flex-col">
            <img height="32" width="143" src="https://picsum.photos/id/2/125/49" alt />
        </div>
    </div>
</template>
<style scoped>
.title {
    font-size: 20px;
    line-height: 20px;
    color: rgba(45, 45, 45, 0.8);
    text-align: left;
    margin-bottom: 15px;
    font-family: PingFang;
}
.incre {
    font-size: 40px;
    line-height: 40px;
    color: #28c2c2;
    text-align: left;
    margin-bottom: 30px;
    font-family: "PingFang-bold";
}
</style>
