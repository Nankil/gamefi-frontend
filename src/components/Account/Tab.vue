<template>
    <!-- 全部、注册中、注册成功 -->
    <!-- 全部、转入、转出 -->
    <!-- 这两个选项卡弄为公共组件 -->
    <div class="tab">
        <!-- 选项卡标题 -->
        <ul class="whole">
            <li
                v-for="(item,idx) of tab"
                :class="{'active':idx == index}"
                :key="item"
                @click="clickSwitch(idx)"
            >{{item}}</li>
        </ul>
        <!-- 二级标题 -->
        <ul class="register" :class="{'register1':type == 1,'register2':type == 2,}">
            <li v-for="item of register" :key="item">{{item}}</li>
        </ul>

        <!-- 内容 -->
        <ul class="con" :class="{'con1':type == 1,'con2':type == 2,}">
            <li v-for="(item,idx) of data" :key="idx">
                <span>{{item.time}}</span>
                <span>{{item.number}}</span>
                <span>{{item.name}}</span>
                <span v-if="type==1">{{item.state}}</span>
                <span v-if="type==2">{{item.integral}}</span>
                <span v-if="type==2">{{item.remarks}}</span>
            </li>
        </ul>

        <!-- 分页器 -->
        <div class="pager">
            <img @click="changPage('-')" src="@/assets/imgs/Account/上一页.svg" alt="上一页" />
            <span
                v-for="item of arr"
                :key="item"
                @click="changPage(item)"
                :class="{'active':item == page}"
            >{{item}}</span>
            <img @click="changPage('+')" src="@/assets/imgs/Account/下一页2.svg" alt="下一页" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0,   //切换选项卡
            page: 1,    //第几页 
            arr: [],    //存放页码
        }
    },
    //type:判断是哪个选项卡，分配不同的样式    number:一页几条数据    pages:最多显示几个页码    tab:选项卡标题    register:二级标题    list:数据
    props: ['type', 'number', 'pages', 'tab', 'register', 'list'],
    mounted() {
        // 程序加载时需初始化页码
        this.initializePageNumber()

        console.log(this.type)
    },
    computed: {
        data() {    //渲染页面数据
            let index = this.index
            let page = this.page
            let number = this.number
            let data = this.list[index].slice((page - 1) * number, (page - 1) * number + number)
            return data
        }
    },
    methods: {
        // 初始化页码
        initializePageNumber() {
            let number = this.number
            let pages = this.pages
            let maxNumber = Math.ceil(this.list[this.index].length / number)    //最大页码数

            if (maxNumber >= pages) {
                var arr = new Array(pages)
            } else {
                var arr = new Array(maxNumber)
            }

            for (let i = 0; i < arr.length; i++) {
                arr[i] = i + 1
            }
            this.arr = arr
        },
        //tab切换，也就是选项卡
        clickSwitch(idx) {
            this.index = idx
            this.page = 1

            //切换选项卡时，也需要初始化页码
            this.initializePageNumber()
        },
        //改变页码
        changPage(value) {
            if (value >= 1) {    //直接点击页码切换，就不进行下面的代码了
                this.page = value
                return
            }

            //点击前进、后退实现页码的切换
            let number = this.number
            let pages = this.pages

            let start = this.arr[0]                                             //旧数组开头
            let end = this.arr[this.arr.length - 1]                             //旧数组结尾
            let maxNumber = Math.ceil(this.list[this.index].length / number)    //最大页码数

            if (value == "-") {
                if (start == 1) return
                start = start - pages          //新数组开头
                end = start + pages - 1             //新数组结尾
            } else if (value == "+") {
                if (end == maxNumber) return
                start = end + 1              //新数组开头
                if (end + pages > maxNumber) {   //新数组结尾
                    end = maxNumber
                } else {
                    end = end + pages
                }
            }

            let arr = new Array(end - start + 1)
            for (let i = 0; i < arr.length; i++) {
                arr[i] = start + i
            }
            this.page = start
            this.arr = arr
        }
    }

}
</script>

<style lang="less" scoped>
.tab {
    text-align: center;
    font-family: PingFang-SC-Bold;
    .whole {
        display: flex;
        li {
            width: 546px;
            height: 82px;
            line-height: 82px;
            font-size: 39px;
            color: #202020;
            background: rgba(215, 215, 215, 0.6);
            cursor: pointer;
            box-sizing: border-box;

            &.active {
                background: rgba(255, 255, 255, 0.3);
            }
        }

        li:nth-of-type(2) {
            border-left: 1px solid white;
            border-right: 1px solid white;
        }
    }

    .register {
        padding: 0 103px;
        background: rgba(255, 255, 255, 0.3);
        display: flex;
        line-height: 80px;
        color: #4b4b4b;
        font-size: 30px;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            width: 1553px;
            height: 5px;
            background: #d7d7d7;
            left: 42px;
            bottom: 0;
        }
    }

    .register1 {
        //推荐管理选项卡的样式
        li:nth-of-type(1) {
            margin: 0 163px 0 108px;
        }
        li:nth-of-type(3) {
            margin: 0 413px 0 166px;
        }
    }

    .register2 {
        //我的积分选项卡的样式
        li:nth-of-type(1) {
            margin: 0px 118px 0 28px;
        }
        li:nth-of-type(3) {
            margin: 0 98px 0 160px;
        }
        li:nth-of-type(5) {
            margin: 0 0 0 338px;
        }
    }

    .con {
        background: rgba(255, 255, 255, 0.3);
        color: #4b4b4b;
        overflow: hidden;

        li {
            display: flex;
            margin-top: 21px;
            span {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }

    .con1 {
        //推荐管理选项卡的样式
        height: 393px;
        font-size: 24px;
        span:nth-of-type(1) {
            margin-left: 100px;
            width: 334px;
        }
        span:nth-of-type(2) {
            width: 243px;
        }
        span:nth-of-type(3) {
            width: 269px;
        }
        span:nth-of-type(4) {
            margin-left: 100px;
            width: 470px;
        }
    }

    .con2 {
        //我的积分选项卡的样式
        height: 580px;
        font-size: 21px;
        span:nth-of-type(1) {
            margin-left: 89px;
            width: 147px;
        }
        span:nth-of-type(2) {
            width: 264px;
        }
        span:nth-of-type(3) {
            width: 239px;
        }
        span:nth-of-type(4) {
            width: 137px;
        }
        span:nth-of-type(5) {
            margin-left: 100px;
            width: 544px;
        }
    }

    .pager {
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.3);

        img {
            margin: 0 18px;
            width: 35px;
            height: 15px;
            cursor: pointer;
        }
        span {
            margin: 0 20px;
            font-size: 20px;
            color: #8e8e8e;
            cursor: pointer;

            &.active {
                font-size: 25px;
                color: #000;
            }
        }
    }
}
</style>