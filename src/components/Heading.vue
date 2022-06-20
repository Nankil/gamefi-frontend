<template>
    <!-- 链接钱包、我的账户、选语言 -->
    <div class="flex flex-row justify-between w-full h-full heading-container">
        <div class="main self-center" @click="$router.push('/')">
            <img src="@/assets/imgs/main.png" alt class="object-cover max-2" />
        </div>

        <div class="flex flex-col right-bar">
            <div class="flex flex-row items-center row-funcs">
                <div
                    id="wallet"
                    class="flex flex-row h-8 border rounded-full border-teal-400 hover:cursor-pointer justify-center items-center"
                    @click="connectWalletWrapper"
                    v-if="userInfo.walletAddr === ''"
                >
                    <img src="@/assets/imgs/fox_icon.png" alt="fox" class="h-6 mr-1" />
                    {{info.linkWallet}}
                </div>

                <div
                    id="wallet"
                    class="flex fle-row h-8 justify-center text-center border rounded-full border-teal-400 hover:cursor-pointer items-center"
                    @click="jumpPage"
                    v-else
                >
                    <img src="@/assets/imgs/fox_icon.png" alt="fox" class="h-6 mr-1" />
                    {{info.account}}
                </div>

                <!-- 选择语言!!! -->
                <div
                    id="lang"
                    @click="boo = !boo"
                    @mouseleave="boo = false"
                    class="flex flex-row h-8 justify-center border rounded-full border-purple-400 hover:cursor-pointer items-center"
                >
                    <img src="@/assets/imgs/internet_icon.png" alt="fox" class="h-6 mr-1" />

                    <div class="selectLanguage">
                        <p>
                            {{title}}
                            <span>▼</span>
                        </p>
                        <ul v-show="boo">
                            <li
                                v-for="(item,index) of info.languageCategory"
                                :key="item.type"
                                @click="changeLanguage({type:item.type,index})"
                            >{{item.title}}</li>
                        </ul>
                    </div>
                </div>

                <img
                    id="night-switch"
                    src="@/assets/imgs/sun.png"
                    alt="sun"
                    class="h-10 hover:cursor-pointer"
                />
            </div>
            <div class="w-full flex flex-row-reverse">
                <div class="flex flex-row-reverse utc-time">
                    <div id="utc-8" class="flex flex-row items-center">
                        <div id="time-whole" class="flex flex-col">
                            <div class="self-end time">22:32</div>
                            <div class="text-sm">2022:5:2</div>
                        </div>
                        <img class="h-10" src="@/assets/imgs/utc+8.png" alt />
                    </div>
                    <div id="utc" class="flex flex-row items-center">
                        <div id="time-whole" class="flex flex-col">
                            <div class="self-end time">22:32</div>
                            <div class="text-sm">2022:5:2</div>
                        </div>
                        <img class="h-10" src="@/assets/imgs/utc.png" alt />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import { login, } from '../api/backend.mjs';
import { accountRegistered } from '@/api/account.mjs';

import { mapActions, mapState } from 'vuex';
export default {
    data() {
        return {
            index: 1,      //默认语言显示   0：简体   1：繁体   2：英文
            boo: false,    //控制多语音选项是否出现
        }
    },
    methods: {
        ...mapActions(['connectWallet']),
        async connectWalletWrapper() {        //链接钱包
            // this.$router.push("/account/info")
            const res = await this.connectWallet();
            console.log(res)

            if (res === 'success') {
                let regRes = await accountRegistered(this.userInfo.walletAddr);
                regRes = regRes.data
                console.log(regRes)

                if (regRes.exists === false) {
                    console.log(1)
                    this.$router.push('/account/register');
                } else {
                    console.log(2)

                    const loginRes = await login(this.userInfo.walletAddr);
                    if (loginRes.status === false) {
                        this.$store.dispatch('pushErrorLog',
                            `login failed with ${loginRes.message}`);
                    } else {
                        this.$store.dispatch('setToken', loginRes.token);
                        console.log(loginRes);
                    }
                }
            }
        },
        changeLanguage({ type, index }) {    //切换语言
            this.index = index
            this.$i18n.locale = type;
        },
        jumpPage() {    //跳转页面
            if (this.userInfo.registered) {    //已注册
                this.$router.push('/account/info')
            } else {
                this.$router.push('/account/register')
            }
        }
    },
    computed: {
        ...mapState(['userInfo']),
        info() {     //获取文字
            return this.$tm("home.heading")
        },
        title() {    //显示的哪门语言
            return this.$tm("home.heading.languageCategory")[this.index].title
        }
    }
};
</script>

<style lang='less' scoped>
.selectLanguage {
    p {
        color: #ba4de4;
        position: relative;

        span {
            position: absolute;
            font-size: 14px;
            right: -15px;
            top: 10px;
        }
    }
    ul {
        width: 157px;
        background: white;
        text-align: center;
        font-size: 20px;
        padding: 13px 0 11px 0;
        position: absolute;
        top: 57px;
        left: 26px;
    }
}

.heading-container {
    background-image: url("@/assets/imgs/nav_top.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 219px;
}

.main {
    width: 23.7%;
    margin-left: 80px;
}

.right-bar {
    width: 575px;
}

#wallet,
#lang {
    width: 240px;
    height: 58px;
    font-size: 25px;
    position: relative;
}

#lang {
    margin-left: 34px;
}

#night-switch {
    width: 58px;
    height: 58px;
    margin-left: 18px;
    margin-right: 43px;
}

.row-funcs {
    margin-top: 55px;
}

#time {
    margin-bottom: 9px;
}

#time-whole {
    margin-right: 5px;
}

#utc {
    margin-right: 20px;
}

#utc-8 {
    margin-right: 52px;
}

.utc-time {
    margin-top: 33px;
    font-family: "PingFang";
}
</style>>
