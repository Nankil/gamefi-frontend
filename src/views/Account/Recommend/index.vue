<template>
    <!-- 推荐管理 -->
    <div class="content">
        <div class="top">
            <!-- 我的推荐码 -->
            <div class="left">
                <p>{{recommendationCode}}</p>
                <img
                    @click="copyText($refs.img,recommendationCode)"
                    ref="img"
                    src="@/assets/imgs/Account/复制.svg"
                    alt="复制"
                />
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
        <!-- 邀请人清单 -->
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
                    <img src="@/assets/imgs/Account/积分兑换go.svg" alt="积分兑换go" />
                </li>
            </ul>
            <!-- 选项卡 -->
            <Tab
                :type="info.type"
                :number="info.number"
                :pages="info.pages"
                :tab="info.tab"
                :register="info.register"
                :list="info.list"
            />
        </div>
    </div>
</template>

<script>
import Tab from '@/components/Account/Tab.vue'
export default {
    data() {
        return {
            recommendationCode: "sjdkfaj",    //我的推荐码
            info: {
                type: 1,
                number: 7,
                pages: 8,
                tab: ["全部", "注册中", "注册成功"],
                register: ["註冊時間", "會員編號", "昵稱", "狀態"],
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

        }
    },
    components: { Tab }
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
            background: url(@/assets/imgs/Account/我的推荐码.svg) no-repeat;
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
                cursor: pointer;
            }
        }

        .right {
            font-size: 29px;
            color: #4b4b4b;
            box-sizing: border-box;
            padding: 100px 0 0 54px;
            background: url(@/assets/imgs/Account/我的推荐人.svg) no-repeat;
            span {
                display: inline-block;
                width: 120px;
            }
        }
    }

    //邀请人清单
    .bottom {
        background: url(@/assets/imgs/Account/邀请人清单.svg);
        height: 900px;
        box-sizing: border-box;
        padding: 112px 55px 50px 55px;
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
    }
}
</style>