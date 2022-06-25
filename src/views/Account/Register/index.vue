<template>
    <!-- 注册 -->
    <div>
        <div class="notifier" v-show="popUpBackground">
            <!-- <div v-if="!smsEligible && !smsVerified" @click="closeSmsNotify">
                    <VerifyPhone />
            </div>-->

            <!-- 验证您的邮箱--弹窗 -->
            <div v-if="emailVerified">
                <VerifyEmail
                    @aaa="unmotnedPages"
                    @bbb="resenn"
                    @ccc="emailVerified=false"
                    :email="email"
                />
            </div>

            <!-- 注册成功（无推荐人）--弹窗 -->
            <div v-if="registered">
                <RegSucess />
            </div>

            <!-- 注册成功（有推荐人）--弹窗 -->
            <div v-if="registered2">
                <RegSuccess2 />
            </div>

            <!-- 邮箱未验证成功--弹窗 -->
            <div v-if="failverify">
                <FailVerify @aaa="resenn" @bbb="failverify=false" />
            </div>

            <!-- 重新发送验证--弹窗 -->
            <div v-if="reemail">
                <ReEmail @aaa="confirmatio" />
            </div>
        </div>

        <div class="main">
            <div class="header">
                <div class="registertip">請先完成[會員注册]以開放平臺功能</div>
            </div>

            <div class="middle">
                <div class="flex flex-row flex-wrap">
                    <div class="inline-block referrer">推薦人（選填）</div>
                    <!-- 输入推荐人码 -->
                    <input
                        type="text"
                        id="promote_code"
                        v-model="promote_code"
                        @input="onPromoteCodeChange"
                        placeholder="請輸入你的推薦人碼"
                    />
                    <!-- 提示文字 -->
                    <div
                        class="inline-block invitor"
                        :style="{color:referral_Nickname?'green':'red'}"
                    >{{ invitor }}</div>
                    <!-- 推荐人昵称 -->
                    <div
                        v-show="referral_Nickname"
                        class="referrernickname"
                    >【推荐人昵称】{{referral_Nickname}}</div>
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
                        <!-- 钱包地址 -->
                        <div
                            style="text-align:center;width: 450px;height:71px; line-height: 71px; margin-bottom: 31px;width:636px;background:white;"
                        >{{ wallet_addr }}</div>

                        <!-- 昵称 -->
                        <div>
                            <input
                                class="rightinput"
                                type="text"
                                v-model.trim="username"
                                @input="onUsernameChange"
                                placeholder="請填寫您的昵稱"
                            />
                            <span
                                class="inforformtip"
                                style="width:220px"
                                :style="{color:user_exists=='*可以使用'?'green':'red'}"
                            >{{ user_exists }}</span>
                        </div>

                        <!-- 邮箱 -->
                        <div>
                            <input
                                class="rightinput"
                                type="text"
                                v-model="email"
                                placeholder="請填寫您的電子郵箱"
                                @input="onEmailChange"
                            />
                            <span
                                class="inforformtip"
                                :style="{color:email_correct=='*格式正确'?'green':'red'}"
                            >{{ email_correct }}</span>
                        </div>
                    </div>

                    <div class="jfa" style="margin-right: 34px; margin-left: 82px">
                        <div class="formfont required">地區</div>
                        <div class="formfont required">手機號</div>
                    </div>
                    <div>
                        <!-- 地区 -->
                        <div>
                            <select
                                class="rightinput"
                                v-model="region"
                                @change="changeTheAreaOrMobilePhoneNumber($event,'region')"
                            >
                                <option v-for="item in countries" :key="item.name">{{ item.name }}</option>
                            </select>
                        </div>

                        <!-- 手机号 -->
                        <div>
                            <select
                                class="rightinput"
                                style="width: 135px;border-right:1px solid #efefef;margin-right:1px"
                                v-model="phonePrefix"
                                @change="changeTheAreaOrMobilePhoneNumber($event,'prefix')"
                            >
                                <option v-for="item in countries" :key="item.code">{{ item.code }}</option>
                            </select>

                            <input
                                class="rightinput"
                                style="width:315px;"
                                type="text"
                                v-model="phone"
                                @input="onPhoneChange"
                                placeholder="請填寫您的手機號"
                            />
                            <span
                                class="inforformtip"
                                :style="{color:phoneed?'green':'red'}"
                                v-if="phone"
                            >{{ phone.length }}/{{maxPhone}}</span>
                        </div>

                        <div>
                            <!-- 填写验证码 -->
                            <input
                                class="rightinput"
                                style="width:237px"
                                type="text"
                                v-model="verify_code"
                                placeholder="請填寫驗證碼"
                            />
                            <!-- 发送验证码 -->
                            <div class="sendbutton" @click="sendSms">{{send_verification_code}}</div>
                        </div>
                    </div>
                </div>
                <div class="protocol">
                    <input
                        type="checkbox"
                        v-model="agreement"
                        style="margin-top:-4px;cursor:pointer"
                    />
                    我已經仔細閱讀並名瞭
                    <a href>『隱私與聲明』</a>、
                    <a href>『免責聲明及其他相關聲明』</a>
                    等所載內容及其意義，茲同意該等條款規定，並願遵守網站現今、嗣後規範的各種規則。
                </div>
                <!-- 立即注册 -->
                <button
                    class="registernow"
                    :style="{cursor:rule?'pointer':'auto'}"
                    @click="registerWrapper"
                    :disabled="disabled"
                ></button>
            </div>
        </div>
    </div>
</template>




<script>
import { ElMessage } from 'element-plus'    //消息提示
import { userExists, existsPromotion, sendSmsVerification, verifySms, emailVerified, register } from "@/api/account.mjs"

import { mapActions } from 'vuex';

import VerifyEmail from '@/components/VerifyEmail.vue';
// import VerifyPhone from '@/components/VerifyPhone.vue';
import RegSucess from '@/components/RegSucess.vue';
import RegSuccess2 from '@/components/RegSuccess2.vue';
import FailVerify from '@/components/FailVerify.vue';
import ReEmail from '@/components/ReEmail.vue';

export default {
    components: {
        VerifyEmail,
        // VerifyPhone,
        RegSucess,
        RegSuccess2,
        FailVerify,
        ReEmail
    },
    created() {
        if (localStorage.countdown) {   //倒计时60s
            this.send_verification_code = localStorage.countdown + 's'

            let time = setInterval(() => {
                this.send_verification_code = parseInt(this.send_verification_code) - 1 + 's'
                localStorage.countdown--
                if (this.send_verification_code == '0s') {
                    localStorage.removeItem('countdown')
                    clearInterval(time)
                    this.send_verification_code = "發送驗證碼"
                }
            }, 1000)
        }
    },
    data() {
        const countries = [
            {
                name: '中国',
                code: '+86',
            },
            {
                name: '美国',
                code: '+1',
            },
            {
                name: '台湾',
                code: '+886',
            },
            {
                name: '香港',
                code: '+852',
            },
        ];

        return {
            index: 0,              //控制地区与电话号前缀的显示

            promote_code: '',       //推荐人码
            referral_Nickname: '',  //推荐人昵称
            invitor: '',            //推荐人码提示文字

            username: '',           //昵称
            user_exists: '',        //昵称提示文字
            usernameed: false,      //昵称是否正确

            email: '',              //邮箱
            email_correct: '',      //邮箱提示文字
            emailed: false,         //邮箱格式是否正确
            verification_mailbox: false,    //验证邮箱是否成功
            emailVerified: false,   //验证您的邮箱--弹窗是否出现
            failverify: false,      //未验证成功--弹窗是否出现
            reemail: false,        //重新发送验证码--弹窗是否出现

            region: '中国',             //地区

            phonePrefix: '+86',     //手机号前缀
            phone: '',              //手机号
            maxPhone: 11,           //手机位数
            phoneed: false,         //手机是否正确

            verify_code: '',        //验证码
            smsVerified: false,     //验证码是否正确
            send_verification_code: '發送驗證碼',    //发送验证码文字
            send_verification_code_boo: false,       //是否等待60s

            disabled: false,        //“立即注册”按钮是否禁用
            registered: false,      //注册成功（无推荐人）弹窗是否出现
            registered2: false,      //注册成功（有推荐人）弹窗是否出现

            agreement: false,       //打勾：隐私声明、免责声明等等
            blur: '0px',
            success: false,
            notify: false,
            smsSendingTime: null,

            countries,

            smsEligible: true,
        };
    },
    computed: {
        wallet_addr() {    //钱包地址
            if (!this.$store.state.userInfo.walletAddr) {    //防止刷新
                return localStorage.walletAddr
            }
            return this.$store.state.userInfo.walletAddr;
        },
        rule() {    //推荐了码、昵称、邮箱、地区、电话号码、验证码、打勾（隐私声明等）等是否按照规定写好了
            if (this.promote_code == '' || this.referral_Nickname) {
                if (this.usernameed && this.emailed && this.region && this.phoneed && this.agreement && this.verify_code) {
                    return true
                }
            }

            return false
        },
        popUpBackground() {    //弹窗背景
            if (this.emailVerified || this.failverify || this.reemail || this.registered || this.registered2) {
                return true
            }
            return false
        }
    },

    methods: {
        changeTheAreaOrMobilePhoneNumber($event, type) {    //改变地区 or 改变手机号前缀
            this.index = $event.target.selectedIndex
            if (type === 'region') {    //改地区
                this.phonePrefix = this.countries[this.index].code
            } else if (type === 'prefix') {    //改手机号前缀
                this.region = this.countries[this.index].name
            }

            if (this.index == 0) {
                this.maxPhone = 11
            } else if (this.index == 1) {
                this.maxPhone = 10
            } else if (this.index == 2) {
                this.maxPhone = 9
            } else if (this.index == 3) {
                this.maxPhone = 7
            }

            this.onPhoneChange()  //需要验证下手机号
        },
        // ...mapActions(['register']),
        unmotnedPages() {    //验证码邮箱未自动跳转页面
            this.emailVerified = false

            if (!this.verification_mailbox) {   //邮箱未验证成功
                this.failverify = true
                return
            }

            //邮箱验证成功
            if (this.referral_Nickname) {    //有推荐人
                this.registered2 = true      //注册成功（有推荐人）--弹窗出现
            } else {
                this.registered = true       //注册成功（无推荐人）--弹窗出现
            }
        },
        async resenn() {    //重新发送验证码
            this.emailVerified = false
            this.failverify = false
            this.reemail = true
            let resEmai = await emailVerified(this.username);
            if (resEmai.data.verified) {        //邮箱验证成功
                this.verification_mailbox = true
            }
        },
        confirmatio() {    //确认重发
            this.reemail = false
            this.emailVerified = true
            if (this.verification_mailbox) {
                if (this.referral_Nickname) {    //有推荐人
                    this.registered2 = true      //注册成功（有推荐人）--弹窗出现
                } else {
                    this.registered = true       //注册成功（无推荐人）--弹窗出现
                }
            }

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
        async onPromoteCodeChange() {    //验证推荐人推荐人码
            this.referral_Nickname = ''
            if (this.promote_code.length == 0) {
                this.invitor = ''
                return
            }

            if (this.promote_code.length !== 10) {
                this.invitor = `${this.promote_code.length} / 10`;
            } else {
                this.invitor = '*檢查中...';
                //连接口
                let res = await existsPromotion(this.promote_code)
                console.log(res)
                if (res.exists) {
                    this.invitor = '*存在';
                    this.referral_Nickname = res.name
                } else {
                    this.invitor = '*查無此推薦人';
                }
            }
        },
        async onUsernameChange() {    //验证昵称
            this.usernameed = false
            this.user_exists = ''
            if (this.username.length == 0) {
                this.user_exists = ''
                return
            }
            if (this.username.length < 2) {
                this.user_exists = '*最少輸入2個字'
                return
            }
            if (this.username.length > 15) {
                this.user_exists = '*最多輸入15個字'
                return
            }

            this.user_exists = ''

            let reg = new RegExp("^[A-Za-z0-9\u4e00-\u9fa5]+$");    //只可中文、英文、数字

            if (!reg.test(this.username)) {
                this.user_exists = '*不可輸入特殊符號及敏感詞'
                return
            }

            // 连接口
            let res = await userExists(this.username)
            if (res.status == 200) {
                if (res.data.exists === false) {
                    this.user_exists = '*可以使用'
                    this.usernameed = true
                } else {
                    this.user_exists = '*昵稱已有人使用'
                }
            } else {
                console.log("网络连接错误")
            }
        },
        onEmailChange() {    //验证邮箱
            this.emailed = false
            if (this.email.length == 0) {
                this.email_correct = ''
                return
            }

            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
                this.email_correct = '*格式正确';
                this.emailed = true
            } else {
                this.email_correct = '*格式错误';
            }
        },
        onPhoneChange() {    //验证手机号
            this.phone = this.phone.replace(/[^0-9]/g, '')
            this.phoneed = false

            if (this.phonePrefix == "+86") {    //中国
                var regEx = /^\d{11}$/;
            } else if (this.phonePrefix == "+1") {    //美国
                var regEx = /^\d{10}$/;
            } else if (this.phonePrefix == "+886") {    //台湾
                var regEx = /^\d{9}$/;
            } else if (this.phonePrefix == "+852") {    //香港
                var regEx = /^\d{7}$/;
            }

            if (regEx.test(this.phone)) {
                this.phoneed = true
            }
        },
        async sendSms() {    //发送验证码
            //发送验证码倒计时
            if (localStorage.countdown) {
                ElMessage({
                    message: '请稍等',
                    grouping: true,
                    type: 'error',
                })
                return
            }

            //没输入手机号
            if (!this.phoneed) {
                ElMessage({
                    message: '請輸入正确的手機號碼',
                    grouping: true,
                    type: 'error',
                })
                return
            }

            //只能发送3次验证码，3次后需等待30分钟
            if (localStorage.sendQuantity === undefined) {
                localStorage.sendQuantity = 2
            } else {
                localStorage.sendQuantity--
                if (localStorage.sendQuantity < 0) {
                    ElMessage({
                        message: '次数用完',
                        grouping: true,
                        type: 'error',
                    })
                    return
                }
            }

            //倒计时60s
            if (this.send_verification_code != "發送驗證碼") {    //若不等于'发送验证码'，说明在倒计时，需等待60s
                return
            } else {     ///若等于'发送验证码'，则需要开启倒计时,并发送验证码
                this.send_verification_code = "60s"
                localStorage.countdown = 60
                let time = setInterval(() => {
                    this.send_verification_code = parseInt(this.send_verification_code) - 1 + 's'
                    localStorage.countdown--
                    if (this.send_verification_code == '0s') {
                        localStorage.removeItem('countdown')
                        clearInterval(time)
                        this.send_verification_code = "發送驗證碼"
                    }
                }, 1000)

            }

            //连接口
            const res = await sendSmsVerification(this.phonePrefix + ' ' + this.phone);
            console.log(res)
            if (res.status == 200) {
                if (res.data.status === 'success') {
                    this.smsSendingTime = new Date();
                } else {
                    this.$store.dispatch('pushErrorLog', 'sms send failed');
                    this.notify = true;
                }
                this.smsEligible = false;
            } else {
                console.log("网络连接错误")
            }


        },
        async registerWrapper() {    //立即注册
            if (this.promote_code != '' && this.referral_Nickname == '') {
                ElMessage({
                    message: '推薦人碼不存在',
                    grouping: true,
                    type: 'error',
                })
            } else if (!this.usernameed) {
                ElMessage({
                    message: '請輸入可使用的昵稱',
                    grouping: true,
                    type: 'error',
                })
            } else if (!this.emailed) {
                ElMessage({
                    message: '請輸入正確的郵箱格式',
                    grouping: true,
                    type: 'error',
                })
            } else if (!this.phoneed) {
                ElMessage({
                    message: '請輸入正確的手機號碼',
                    grouping: true,
                    type: 'error',
                })
            } else if (!this.verify_code) {
                ElMessage({
                    message: '請輸驗證碼',
                    grouping: true,
                    type: 'error',
                })
            } else if (!this.agreement) {
                ElMessage({
                    message: '請同意隱私與聲明',
                    grouping: true,
                    type: 'error',
                })
            }

            if (!this.rule) {
                return
            }

            this.verification_mailbox = false  //清除邮箱的验证正确
            this.smsVerified = false    //清除验证码的正确

            //禁用按钮2s，防止用户连点
            this.disabled = true
            setTimeout(() => {
                this.disabled = false
            }, 2000)

            //验证验证码
            const smsRes = await verifySms(this.phonePrefix + this.phone, this.verify_code);
            console.log(smsRes)
            if (smsRes.data.status !== 'success') {
                this.$store.dispatch('pushErrorLog', 'verify sms failed');
                return;
            }
            this.smsVerified = true

            //注册
            const res = await register({
                username: this.username,
                wallet_pubkey: this.wallet_addr + 'dd',
                email: this.email,
                phone: this.phonePrefix + this.phone,
                password: '12346'
            });
            if (res.data.status == 0) {
                // 验证邮箱
                const resEmail = await emailVerified(this.username);
                this.emailVerified = true    //邮箱弹窗出现
                console.log(resEmail)

                if (resEmail.data.verified) {        //邮箱验证成功
                    console.log("邮箱验证成功")
                    this.verification_mailbox = true
                    this.emailVerified = false       //邮箱弹窗消失

                    if (this.referral_Nickname) {    //有推荐人
                        this.registered2 = true      //注册成功（有推荐人）--弹窗出现
                    } else {
                        this.registered = true       //注册成功（无推荐人）--弹窗出现
                    }
                } else {                             //邮箱验证成功
                    console.log("邮箱验证失败")
                }
            }



            // if (!res) {
            //     this.$store.dispatch('pushErrorLog', 'register failed');
            //     this.notify = true;
            //     this.registered = false;
            //     console.log('register failed');
            //     return;
            // }
            // this.registered = true;
            // console.log('registered');

            // this.notify = true;
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
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
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
    background: url("@/assets/imgs/register_middle.png") no-repeat;
    height: 225px;
    width: 1740px;
    padding-left: 137px;
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
    width: 220px;
    margin-left: 35px;
    margin-top: 77px;
    font-family: PingFang-SC-Bold;
    font-size: 22px;
    line-height: 22px;
    color: #ff0000;
}
.referrernickname {
    margin-top: 68px;
    font-family: PingFang-SC-Bold;
    width: 670px;
    font-size: 35px;
    line-height: 35px;
    color: #343434;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.reward {
    height: 22px;
    font-family: PingFang-SC-Bold;
    font-size: 22px;
    line-height: 22px;
    color: #ff0000;
    margin: 30px 159px 0 0;
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
    background: url("@/assets/imgs/register_bottom.png") no-repeat;
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
    width: 192px;
    line-height: 71px;
    display: inline-block;
    background: url(@/assets/imgs/Account/发送验证码.svg) no-repeat;
    color: white;
    font-size: 26px;
    text-align: center;
    font-family: PingFang-SC-Bold;
    margin-left: 22px;
    cursor: pointer;
}
.registernow {
    display: block;
    width: 241px;
    height: 77px;
    background-image: url(@/assets/imgs/立即注册2.svg);
    margin: 0 auto;
    margin-top: 45px;
}
.registernow:focus {
    outline: none;
}
.inforformtip {
    display: inline-block;
    font-family: PingFang-Bold;
    font-size: 17px;
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