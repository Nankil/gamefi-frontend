<template>
    <!-- 推荐管理 -->
    <div class="content">
        <div class="top">
            <!-- 我的推荐码 -->
            <div class="left">
                <p>hhhhhh</p>
                <img src="/imgs/Account/复制.svg" alt="复制" />
            </div>
            <!-- 我的推荐人 -->
            <div class="right">
                <div>
                    <span>會員暱稱</span>：你的好朋友
                </div>
                <div>
                    <span>會員編號</span>：ddddd
                </div>
                <div>
                    <span>推薦碼</span>：gggg
                </div>
            </div>
        </div>
        <!-- 邀请人名单 -->
        <div class="bottom">
            <!-- 邀请人数、积分等 -->
            <ul class="title">
                <li>
                    <span>邀請成功人數</span>
                    <i>1</i>
                </li>
                <li>
                    <span>注册中人數</span>
                    <i>1</i>
                </li>
                <li>
                    <span>已獲得積分</span>
                    <i>20</i>
                </li>
                <li>
                    <img src="/imgs/Account/积分兑换go.svg" alt="积分兑换go" />
                </li>
            </ul>
            <!-- 选项卡 -->
            <div class="tab">
                <!-- 全部、注册中... -->
                <ul class="whole">
                    <li
                        v-for="(item,idx) of tab"
                        :class="{'active':idx == index}"
                        :key="item"
                        @click="clickSwitch(idx)"
                    >{{item}}</li>
                </ul>
                <!-- 注册时间、会员编号... -->
                <ul class="register">
                    <li>註冊時間</li>
                    <li>會員編號</li>
                    <li>昵稱</li>
                    <li>狀態</li>
                </ul>

                <!-- 内容 -->
                <ul class="con">
                    <li v-for="(item,idx) of list[index].slice((page-1)*7,(page-1)*7+7)" :key="idx">
                        <span>{{item.time}}</span>
                        <span>{{item.number}}</span>
                        <span>{{item.name}}</span>
                        <span>{{item.state}}</span>
                    </li>
                </ul>

                <!-- 分页器 -->
                <div class="pager">
                    <img @click="changPage('-')" src="/imgs/Account/上一页.svg" alt="上一页" />
                    <span
                        v-for="item of arr"
                        :key="item"
                        @click="changPage(item)"
                        :class="{'active':item == page}"
                    >{{item}}</span>
                    <img @click="changPage('+')" src="/imgs/Account/下一页2.svg" alt="下一页" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0,   //切换选项卡
            tab: ["全部", "注册中", "注册成功"],    //选项卡标题
            page: 1,    //第几页 
            arr: [],    //存放页码
            list: [
                [
                    {
                        time: "2020/8/1",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中按时间会发生的放假安排的好时机叫啥花生壳家里的饭垃圾收到货了"
                    },
                    {
                        time: "2020/8/2",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/3",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/4",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/5",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/6",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/7",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/8",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/9",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/10",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    }, {
                        time: "2020/8/11",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中按时间会发生的放假安排的好时机叫啥花生壳家里的饭垃圾收到货了"
                    },
                    {
                        time: "2020/8/12",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/13",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/14",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/15",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/16",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/17",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/18",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/19",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/20",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    }, {
                        time: "2020/8/21",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中按时间会发生的放假安排的好时机叫啥花生壳家里的饭垃圾收到货了"
                    },
                    {
                        time: "2020/8/22",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/23",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/24",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/25",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/26",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/27",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/28",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/29",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/30",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/31",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中按时间会发生的放假安排的好时机叫啥花生壳家里的饭垃圾收到货了"
                    },
                    {
                        time: "2020/8/32",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/33",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/34",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/35",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/36",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/37",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/38",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/39",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/40",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    }, {
                        time: "2020/8/5",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中按时间会发生的放假安排的好时机叫啥花生壳家里的饭垃圾收到货了"
                    },
                    {
                        time: "2020/8/5",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/5",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/5",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/5",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/5",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/5",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/5",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/5",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/50",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    }, {
                        time: "2020/8/51",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中按时间会发生的放假安排的好时机叫啥花生壳家里的饭垃圾收到货了"
                    },
                    {
                        time: "2020/8/52",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/53",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/54",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/55",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/56",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/57",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/58",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/59",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/60",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/1",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中按时间会发生的放假安排的好时机叫啥花生壳家里的饭垃圾收到货了"
                    },
                    {
                        time: "2020/8/2",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/3",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/4",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/5",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/6",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/7",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/8",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/9",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/10",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    }, {
                        time: "2020/8/11",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中按时间会发生的放假安排的好时机叫啥花生壳家里的饭垃圾收到货了"
                    },
                    {
                        time: "2020/8/12",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/13",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/14",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/15",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/16",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/17",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/18",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/19",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/20",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    }, {
                        time: "2020/8/21",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中按时间会发生的放假安排的好时机叫啥花生壳家里的饭垃圾收到货了"
                    },
                    {
                        time: "2020/8/22",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/23",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/24",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/25",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/26",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/27",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/28",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/29",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/30",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/31",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中按时间会发生的放假安排的好时机叫啥花生壳家里的饭垃圾收到货了"
                    },
                    {
                        time: "2020/8/32",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/33",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/34",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/35",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/36",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/37",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/38",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/39",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/40",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    }, {
                        time: "2020/8/5",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中按时间会发生的放假安排的好时机叫啥花生壳家里的饭垃圾收到货了"
                    },
                    {
                        time: "2020/8/5",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/5",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/5",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/5",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/5",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/5",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/5",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/5",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/50",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    }, {
                        time: "2020/8/51",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中按时间会发生的放假安排的好时机叫啥花生壳家里的饭垃圾收到货了"
                    },
                    {
                        time: "2020/8/52",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/53",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/54",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/55",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/56",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/57",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/58",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/59",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/60",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                ],
                [
                    {
                        time: "2021/8/2",
                        number: "NO.123456",
                        name: "哈哈",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/2",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    }, {
                        time: "2020/8/2",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    }, {
                        time: "2020/8/2",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    }, {
                        time: "2020/8/2",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                ],
                [
                    {
                        time: "2022/8/3",
                        number: "NO.123456",
                        name: "你相信光吗",
                        state: "邀请中"
                    },
                    {
                        time: "2020/8/3",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    }, {
                        time: "2020/8/3",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    }, {
                        time: "2020/8/3",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    }, {
                        time: "2020/8/3",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    }, {
                        time: "2020/8/3",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    }, {
                        time: "2020/8/3",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    }, {
                        time: "2020/8/3",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    }, {
                        time: "2020/8/3",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    }, {
                        time: "2020/8/3",
                        number: "NO.123456",
                        name: "那个人",
                        state: "邀请中"
                    },
                ]
            ]
        }
    },
    mounted() {    //初始化页码
        let maxNumber = Math.ceil(this.list[this.index].length / 7)    //最大页码数

        if (maxNumber >= 8) {
            var arr = new Array(8)
        } else {
            var arr = new Array(maxNumber)
        }

        for (let i = 0; i < arr.length; i++) {
            arr[i] = i + 1
        }
        this.arr = arr
    },
    methods: {
        //tab切换，也就是选项卡
        clickSwitch(idx) {
            this.index = idx
            this.page = 1

            //切换选项卡时，也需要初始化页码
            let maxNumber = Math.ceil(this.list[this.index].length / 7)    //最大页码数

            if (maxNumber >= 8) {
                var arr = new Array(8)
            } else {
                var arr = new Array(maxNumber)
            }

            for (let i = 0; i < arr.length; i++) {
                arr[i] = i + 1
            }
            this.arr = arr
        },
        //改变页码
        changPage(value) {
            if (value >= 1) {    //直接点击页码切换，就不进行下面的代码了
                this.page = value
                return
            }

            //点击前进、后退实现页码的切换
            let start = this.arr[0]                                        //旧数组开头
            let end = this.arr[this.arr.length - 1]                        //旧数组结尾
            let maxNumber = Math.ceil(this.list[this.index].length / 7)    //最大页码数

            if (value == "-") {
                if (start == 1) return
                start = start - 8            //新数组开头
                end = start + 7              //新数组结尾
            } else if (value == "+") {
                if (end == maxNumber) return
                start = end + 1              //新数组开头
                if (end + 8 > maxNumber) {   //新数组结尾
                    end = maxNumber
                } else {
                    end = end + 8
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
.content {
    font-family: PingFang-SC-Bold;
    //我的推荐码、推荐人
    .top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;

        > div {
            width: 800px;
            height: 259px;
        }

        .left {
            position: relative;
            background: url(/imgs/Account/我的推荐码.svg) no-repeat;
            p {
                width: 603px;
                height: 70px;
                line-height: 70px;
                margin: 122px 0 0 55px;
                background: white;
                color: #525252;
                font-size: 32px;
                text-align: center;
            }
            img {
                width: 60px;
                height: 69px;
                position: absolute;
                right: 57px;
                bottom: 68px;
            }
        }

        .right {
            font-size: 29px;
            color: #4b4b4b;
            box-sizing: border-box;
            padding: 100px 0 0 54px;
            background: url(/imgs/Account/我的推荐人.svg) no-repeat;
            span {
                display: inline-block;
                width: 120px;
            }
        }
    }

    //邀请人清单
    .bottom {
        background: url(/imgs/Account/邀请人清单.svg);
        height: 900px;
        box-sizing: border-box;
        padding: 108px 55px 50px 55px;
        text-align: center;

        .title {
            display: flex;
            justify-content: space-between;
            font-size: 32px;
            margin-bottom: 45px;
            li {
                display: flex;
                align-items: center;
                i {
                    width: 136px;
                    height: 46px;
                    background: white;
                    margin-left: 31px;
                    font-style: normal;
                }
                img {
                    width: 261px;
                    height: 64px;
                }
            }
        }

        .tab {
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
                    border: 1px solid white;

                    &.active {
                        background: rgba(255, 255, 255, 0.3);
                    }
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
                li:nth-of-type(1) {
                    margin: 0 163px 0 108px;
                }
                li:nth-of-type(3) {
                    margin: 0 413px 0 166px;
                }

                &::after {
                    content: "";
                    position: absolute;
                    width: 1429px;
                    height: 5px;
                    background: #d7d7d7;
                    left: 103px;
                    bottom: 0;
                }
            }

            .con {
                height: 414px;
                padding: 0 103px;
                background: rgba(255, 255, 255, 0.3);
                font-size: 24px;
                color: #4b4b4b;

                li {
                    display: flex;
                    margin-top: 24px;

                    span {
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    span:nth-of-type(1) {
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
    }
}
</style>