<template>
    <!-- 我的积分 -->
    <div class="content">
        <!-- 获得积分、支出积分等... -->
        <ul class="top">
            <li>
                獲得積分
                <span>20</span>
            </li>
            <li>
                支出積分
                <span>20</span>
            </li>
            <li>
                結餘積分
                <span>20</span>
            </li>
            <li>
                <img src="/imgs/Account/积分兑换go.svg" alt="积分兑换" />
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
</template>

<script>
export default {
    data() {
        return {
            info: {
                type: 2,
                number: 11,
                pages: 8,
                tab: ["全部", "轉入", "轉出"],
                register: ["時間", "會員編號", "昵稱", "積分出/入", "備註"],
                list: [
                    [
                        {
                            time: "2020/8/1",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中按时间会发生的放假安排的好时机叫啥花生壳家里的饭垃圾收到货了"
                        },
                        {
                            time: "2020/8/2",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/3",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/4",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/5",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/6",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/7",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/8",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/9",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/10",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        }, {
                            time: "2020/8/11",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中按时间会发生的放假安排的好时机叫啥花生壳家里的饭垃圾收到货了"
                        },
                        {
                            time: "2020/8/12",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/13",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/14",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/15",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/16",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/17",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/18",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/19",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/20",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        }, {
                            time: "2020/8/21",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中按时间会发生的放假安排的好时机叫啥花生壳家里的饭垃圾收到货了"
                        },
                        {
                            time: "2020/8/22",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/23",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/24",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/25",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/26",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/27",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/28",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/29",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/30",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/31",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中按时间会发生的放假安排的好时机叫啥花生壳家里的饭垃圾收到货了"
                        },
                        {
                            time: "2020/8/32",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/33",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/34",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/35",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/36",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/37",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/38",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/39",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/40",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        }, {
                            time: "2020/8/5",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中按时间会发生的放假安排的好时机叫啥花生壳家里的饭垃圾收到货了"
                        },
                        {
                            time: "2020/8/5",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/5",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/5",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/5",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/5",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/5",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/5",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/5",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/50",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        }, {
                            time: "2020/8/51",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中按时间会发生的放假安排的好时机叫啥花生壳家里的饭垃圾收到货了"
                        },
                        {
                            time: "2020/8/52",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/53",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/54",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/55",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/56",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/57",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/58",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/59",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/60",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/1",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中按时间会发生的放假安排的好时机叫啥花生壳家里的饭垃圾收到货了"
                        },
                        {
                            time: "2020/8/2",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/3",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/4",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/5",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/6",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/7",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/8",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/9",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/10",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        }, {
                            time: "2020/8/11",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中按时间会发生的放假安排的好时机叫啥花生壳家里的饭垃圾收到货了"
                        },
                        {
                            time: "2020/8/12",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/13",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/14",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/15",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/16",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/17",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/18",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/19",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/20",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        }, {
                            time: "2020/8/21",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中按时间会发生的放假安排的好时机叫啥花生壳家里的饭垃圾收到货了"
                        },
                        {
                            time: "2020/8/22",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/23",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/24",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/25",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/26",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/27",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/28",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/29",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/30",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/31",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中按时间会发生的放假安排的好时机叫啥花生壳家里的饭垃圾收到货了"
                        },
                        {
                            time: "2020/8/32",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/33",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/34",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/35",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/36",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/37",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/38",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/39",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/40",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        }, {
                            time: "2020/8/5",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中按时间会发生的放假安排的好时机叫啥花生壳家里的饭垃圾收到货了"
                        },
                        {
                            time: "2020/8/5",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/5",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/5",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/5",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/5",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/5",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/5",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/5",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/50",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        }, {
                            time: "2020/8/51",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中按时间会发生的放假安排的好时机叫啥花生壳家里的饭垃圾收到货了"
                        },
                        {
                            time: "2020/8/52",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/53",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/54",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/55",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/56",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/57",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/58",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/59",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/60",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                    ],
                    [
                        {
                            time: "2021/8/2",
                            number: "NO.123456",
                            name: "哈哈",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/2",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        }, {
                            time: "2020/8/2",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        }, {
                            time: "2020/8/2",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        }, {
                            time: "2020/8/2",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                    ],
                    [
                        {
                            time: "2022/8/3",
                            number: "NO.123456",
                            name: "你相信光吗",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                        {
                            time: "2020/8/3",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        }, {
                            time: "2020/8/3",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        }, {
                            time: "2020/8/3",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        }, {
                            time: "2020/8/3",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        }, {
                            time: "2020/8/3",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        }, {
                            time: "2020/8/3",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        }, {
                            time: "2020/8/3",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        }, {
                            time: "2020/8/3",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        }, {
                            time: "2020/8/3",
                            number: "NO.123456",
                            name: "那个人",
                            integral: "+125",
                            remarks: "邀请中"
                        },
                    ]
                ]
            }
        }
    }
}
</script>

<style lang="less" scoped>
.content {
    height: 1100px;
    background: url(/imgs/Account/我的积分明细.svg) no-repeat;
    box-sizing: border-box;
    padding: 112px 55px 0;

    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 63px;
        font-size: 32px;
        font-family: PingFang-SC-Bold;
        text-align: center;
        margin-bottom: 45px;
        li {
            display: flex;
        }
        span {
            width: 128px;
            margin-left: 35px;
        }
        li:nth-of-type(1) span {
            color: #25bf58;
            background: url(/imgs/Account/绿色框.svg) no-repeat;
            background-size: 100% 100%;
        }
        li:nth-of-type(2) span {
            color: #e61818;
            background: url(/imgs/Account/红色框.svg) no-repeat;
            background-size: 100% 100%;
        }
        li:nth-of-type(3) span {
            color: #d9ae1a;
            background: url(/imgs/Account/黄色框.svg) no-repeat;
            background-size: 100% 100%;
        }

        img {
            width: 261px;
            height: 63px;
        }
    }
}
</style>
