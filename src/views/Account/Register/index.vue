<template>
    <div>
        <div class="absolute w-screen h-screen" v-if="notify">
            <div class="absolute notifier">
                <div class="absolute" v-if="!smsEligible && !smsVerified" @click="closeSmsNotify">
                    <VerifyPhone />
                </div>
                <div class="absolute" v-else-if="!emailVerified && registered" @click="verifyEmail">
                    <VerifyEmail />
                </div>
                <div class="absolute" v-else-if="invitorUsed && registered && emailVerified">
                    <RegSuccess2 />
                </div>
                <div class="absolute" v-else-if="registered && emailVerified">
                    <RegSucess />
                </div>
                <div class="absolute" v-else-if="!registered">
                    <FailVerify />
                </div>
            </div>
        </div>

        <div class="main">
            <div class="header">
                <div class="registertip">請先完成[會員注册]以開放平臺功能</div>
            </div>

            <div class="middle">
                <div class="flex flex-row flex-wrap">
                    <div class="inline-block referrer">推薦人（選填）</div>
                    <input
                        type="text"
                        id="promote_code"
                        v-model="promote_code"
                        @input="onPromoteCodeChange"
                        placeholder="請輸入你的推薦人碼"
                    />
                    <div class="inline-block invitor">{{ invitor }}</div>
                    <div class="referrernickname">【推荐人昵称】啦啦啦啦</div>
                </div>
                <div class="reward">
                    <span>○</span>
                    <p>注册成功推薦人與你可獲得『20積分』，積分可用於『NFT盲盒』頁面兌換『S1-白名單圖鑑碎片卡包』</p>
                    <span>○</span>
                </div>
            </div>

            <div class="bottom">
                <div class="flex flex-row" style="padding-top: 145px; position: relative">
                    <div class="jfa" style="margin-right: 34px; margin-left: 64px">
                        <div class="formfont">錢包地址</div>
                        <div class="formfont required">昵稱</div>
                        <div class="formfont required">郵箱</div>
                    </div>
                    <div>
                        <div
                            style="width: 450px; height: 71px; margin-bottom: 31px;width:636px;background:white;"
                        >{{ wallet_addr }}</div>

                        <div>
                            <input
                                class="rightinput"
                                type="text"
                                v-model="username"
                                @input="onUsernameChange"
                            />
                            <span class="inforformtip">{{ user_exists }}</span>
                        </div>
                        <div>
                            <input
                                class="rightinput"
                                type="text"
                                v-model="email"
                                @input="onEmailChange"
                            />
                            <span class="inforformtip">{{ email_correct }}</span>
                        </div>
                    </div>
                    <div class="jfa" style="margin-right: 34px; margin-left: 82px">
                        <div class="formfont required">地區</div>
                        <div class="formfont required">手機號</div>
                    </div>
                    <div>
                        <div>
                            <select class="rightinput" v-model="region" name id>
                                <option v-for="country in countryList" :key="country">{{ country }}</option>
                            </select>
                            <span class="inforformtip" v-if="region === ''">*请选择地址</span>
                        </div>
                        <div>
                            <select class="rightinput" style="width: 135px" v-model="phone_prefix">
                                <option v-for="code in phoneCodeList" :key="code">+{{ code }}</option>
                            </select>
                            <input
                                class="rightinput"
                                style="width:315px;"
                                type="text"
                                v-model="phone"
                                @input="onPhoneChange"
                            />
                            <span class="inforformtip">{{ phone_correct }}</span>
                        </div>
                        <div>
                            <input
                                class="rightinput"
                                style="width:295px"
                                type="text"
                                v-model="verify_code"
                                placeholder="請填寫驗證碼"
                            />
                            <button
                                class="sendbutton"
                                style="width: 141px; height: 71px"
                                @click="sendSms"
                            >发送</button>
                        </div>
                    </div>
                </div>
                <div class="protocol">
                    <input type="checkbox" v-model="agreement" style="margin-top:-4px;" />
                    我已經仔細閱讀並名瞭
                    <a href>『隱私與聲明』</a>、
                    <a href>『免責聲明及其他相關聲明』</a>
                    等所載內容及其意義，茲同意該等條款規定，並願遵守網站現今、嗣後規範的各種規則。
                </div>
                <button class="registernow" @click="registerWrapper"></button>
            </div>
        </div>
    </div>
</template>




<script>
import {
    existsPromotion,
    userexists,
    sendSmsVerification,
    emailVerified,
    verifySms
}
    from '@/api/backend.mjs';
import { mapActions } from 'vuex';

import FailVerify from '@/components/FailVerify.vue';
import RegSucess from '@/components/RegSucess.vue';
import VerifyEmail from '@/components/VerifyEmail.vue';
import VerifyPhone from '@/components/VerifyPhone.vue';
import RegSuccess2 from '@/components/RegSuccess2.vue';

export default {
    components: {
        FailVerify,
        RegSucess,
        VerifyEmail,
        VerifyPhone,
        RegSuccess2,
    },
    setup() { },
    data() {
        const countries = [
            {
                name: '中国',
                code: '86',
            },
            {
                name: '美国',
                code: '1',
            },
            {
                name: 'taiwan',
                code: '886',
            },
            {
                name: 'hongkong',
                code: '852',
            },
        ];

        return {
            agreement: false,
            promote_code: '',
            username: '',
            region: '',
            phone: '',
            phone_prefix: '',
            email: '',
            invitor: '',
            verify_code: '',
            user_exists: '',
            email_correct: '',
            phone_correct: '',
            blur: '0px',
            invitorUsed: false,
            success: false,
            notify: false,
            smsSendingTime: null,
            registered: false,
            emailVerified: false,
            countries,
            smsVerified: false,
            regButtonPressed: false,
            smsEligible: true,
        };
    },

    computed: {
        wallet_addr() {
            return this.$store.state.userInfo.walletAddr;
        },
        countryList() {
            const res = [];
            for (let i = 0; i < this.countries.length; i++) {
                res.push(this.countries[i].name);
            }

            return res;
        },

        phoneCodeList() {
            const res = [];
            for (let i = 0; i < this.countries.length; i++) {
                res.push(this.countries[i].code);
            }

            return res;
        },
        phonenumber() {
            return this.phone_prefix + this.phone;
        },
    },

    methods: {
        ...mapActions(['register']),
        async sendSms() {
            console.log('sending to ', this.phonenumber);
            const res = await sendSmsVerification(this.phonenumber);
            if (res.status === 'success') {
                this.smsSendingTime = new Date();
            } else {
                this.$store.dispatch('pushErrorLog', 'sms send failed');
                this.notify = true;
            }
            this.smsEligible = false;
        },
        closeSmsNotify() {
            this.smsEligible = true;
            this.notify = false;
        },
        flipNotify() {
            this.notify = !this.notify;
        },
        async verifyEmail() {
            const res = await emailVerified(this.username);
            console.log(res);
            if (res.status) {
                this.emailVerified = true;
            } else {
                this.$store.dispatch('pushErrorLog', 'email verify failed');
                this.notify = true;
            }
        },
        onPhoneChange() {
            console.log(this.phone_prefix);
            const regEx = /^\d{10,14}$/;

            if (regEx.test(this.phone)) {
                this.phone_correct = 'correct';
            } else {
                this.phone_correct = 'wrong format';
            }
        },
        onEmailChange() {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
                this.email_correct = 'correct';
            } else {
                this.email_correct = 'wrong format';
            }
        },
        onPromoteCodeChange() {
            this.invitorUsed = false;
            console.log('invoking promote');
            if (this.promote_code.length !== 10) {
                this.invitor = 'too short';
            } else {
                this.invitor = 'checking...';
                existsPromotion(this.promote_code).then((res) => {
                    if (res.status) {
                        this.invitor = res.invitor;
                        this.invitorUsed = true;
                    } else {
                        this.invitor = 'not exists';
                    }
                });
            }
        },
        onUsernameChange() {    //验证推荐人码是否存在
            userexists(this.username).then((res) => {
                console.log(res)
                if (res.status) {
                    this.user_exists = 'exists';
                } else {
                    this.user_exists = 'not exists';
                }
            });
        },
        async registerWrapper() {
            this.regButtonPressed = true;
            const smsRes = await verifySms(this.phonenumber, this.verify_code);
            console.log(smsRes);
            if (smsRes.status !== true) {
                this.$store.dispatch('pushErrorLog', 'verify sms failed');

                return;
            }
            this.smsVerified = true;
            console.log('sms correct');

            const res = await this.register({
                walletAddr: this.wallet_addr,
                username: this.username,
                phone: this.phone,
                email: this.email,
                invitation_code: this.promote_code,
            });

            if (!res) {
                this.$store.dispatch('pushErrorLog', 'register failed');
                this.notify = true;
                this.registered = false;
                console.log('register failed');

                return;
            }
            this.registered = true;
            console.log('registered');

            this.notify = true;
            const resEmail = await emailVerified(this.username);
            if (resEmail.status) {
                this.emailVerified = true;
            } else {
                this.$store.dispatch('pushErrorLog', 'email verify failed');
            }
        },
    },

};
</script>
<style lang="less" scoped>
.main {
    filter: blur(v-bind(blur));
}
.notifier-wrapper {
    filter: blur(5px);
}
.notifier {
    top: 40%;
    left: 21%;
    z-index: 1;
}
.header {
    background-image: url("@/assets/imgs/register_header.png");
    width: 1734px;
    height: 284px;
    z-index: 100;
}
.registertip {
    font-size: 71px;
    font-family: PingFang-SC-Bold;
    color: #252525;
    padding-top: 110px;
    padding-left: 315px;
    line-break: 71px;
    letter-spacing: 2px;
}
.middle {
    background-image: url("@/assets/imgs/register_middle.png");
    height: 225px;
    width: 1740px;
    padding-left: 137px;
    padding-right: 159px;

    padding-bottom: 60px;
    margin-top: 55px;
}
.referrer {
    padding-top: 68px;
    font-family: PingFang-SC-Bold;
    width: 282px;
    font-size: 35px;
    line-height: 35px;
    color: #434343;
}
#promote_code {
    margin-top: 52px;
    width: 380px;
    height: 70px;
    border: none;
    padding-left: 40px;
}
.invitor {
    margin-left: 35px;
    margin-top: 70px;
    font-family: PingFang-SC-Bold;
    font-size: 22px;
    line-height: 22px;
    color: #ff0000;
}
.referrernickname {
    margin-top: 68px;
    margin-left: 146px;
    font-family: PingFang-SC-Bold;
    width: 417px;
    font-size: 35px;
    line-height: 35px;
    color: #343434;
    text-align: right;
}
.reward {
    height: 22px;
    font-family: PingFang-SC-Bold;
    font-size: 22px;
    line-height: 22px;
    color: #ff0000;
    margin-top: 30px;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    span {
        font-size: 34px;
        margin: -3px 5px 0 0;
    }

    span:nth-of-type(2) {
        margin-left: -7px;
    }
}
.bottom {
    background-image: url("@/assets/imgs/register_bottom.png");
    height: 707px;
    width: 1740px;
}
.formfont {
    font-family: PingFang-SC-Bold;
    font-size: 35px;
    line-height: 35px;
    color: #343434;
    height: 71px;
    text-align: right;
    margin-bottom: 31px;
    line-height: 71px;
}
.rightinput {
    width: 450px;
    height: 71px;
    margin-bottom: 31px;
    border: none;
    padding-left: 35px;
}

.protocol {
    margin-left: 242px;
    font-family: PingFang-SC-Bold;
    font-size: 25px;
    line-height: 36px;
    width: 1300px;
    color: #525252;
    word-break: break-all;
}
.protocol a {
    font-family: PingFang-SC-Bold;
    font-size: 25px;
    line-height: 25px;
    color: #55caec;
}
.sendbutton {
    background-image: linear-gradient(to right, skyblue, purple);
    font-size: 34px;
    text-align: center;
    font-family: PingFang-SC-Bold;
    margin-left: 15px;
    vertical-align: middle;
}
.registernow {
    display: block;
    width: 241px;
    height: 77px;
    background-image: url(@/assets/imgs/立即注册2.svg);
    margin: 0 auto;
    margin-top: 45px;
}
.inforformtip {
    font-family: PingFang-Bold;
    font-size: 19px;
    line-height: 19px;
    color: #ff0000;
    margin-left: 10px;
}
/* 必填项的红星星 */
.required {
    position: relative;
}
.required:after {
    content: "*";
    position: absolute;
    color: red;
    left: -24px;
    top: 8px;
}

.jfa {
    display: flex;
    flex-flow: column;
    align-items: flex-end;
}
</style>