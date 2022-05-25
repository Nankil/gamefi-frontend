<script>
import {
  existsPromotion,
  userexists,
  sendSmsVerification,
  emailVerified,
  verifySms}
  from '../api/backend.mjs';
import {mapActions} from 'vuex';

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
  setup() {},
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
    };
  },

  computed: {
    wallet_addr() {
      return this.$store.state.userInfo.walletAddr;
    },
    smsEligible() {
      if (this.smsSendingTime === null) return true;
      const now = new Date();

      // diff in minutes
      const diff = (now.getTime() - this.smsSendingTime.getTime()) / 1000 / 60;

      if (diff > 30) {
        return true;
      } else {
        return false;
      }
    },
    timeLeft() {
      if (this.smsEligible === true) return 0;

      return 30 -
        (new Date().getTime() - this.smsSendingTime.getTime()) / 1000 / 60;
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
      const res = await sendSmsVerification(this.phonenumber);
      if (res.status === 'success') {
        this.smsSendingTime = new Date();
      } else {
        this.$store.dispatch('pushErrorLog', 'sms send failed');
      }
    },
    flipNotify() {
      this.notify = !this.notify;
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
    onUsernameChange() {
      userexists(this.username).then((res) => {
        if (res.status) {
          this.user_exists = 'exists';
        } else {
          this.user_exists = 'not exists';
        }
      });
    },
    async registerWrapper() {
      const smsRes = await verifySms(this.phonenumber, this.verify_code);
      if (smsRes.status !== true) {
        this.$store.dispatch('pushErrorLog', 'verify sms failed');

        return;
      }

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

        return;
      }

      this.notify = true;
      const resEmail = await emailVerified(this.username);
      if (resEmail.status) {
        this.emailVerified = true;
      }

      this.registered = true;
    },
  },

};
</script>
<style scoped>
.main {
  filter: blur(v-bind(blur));
}
.notifier-wrapper {
  filter: blur(5px);
}
.notifier {
  top: 40%;
  left: 35%;
  z-index: 1;
}
.header {
  background-image: url("/imgs/register_header.png");
  width: 1734px;
  height: 284px;
  z-index: 100;
}
.registertip {
  font-size: 71px;
  font-family: PingFanf-Bold;
  color: #252525;
  padding-top: 137px;
  padding-left: 315px;
  line-break: 71px;
}
.middle {
  background-image: url("/imgs/register_middle.png");
  height: 225px;
  width: 1740px;
  padding-left: 137px;
  padding-right: 159px;

  padding-bottom: 60px;
  margin-top: 55px;
}
.referrer {
  padding-top: 61px;
  font-family: PingFanf-Bold;
  width: 417px;
  font-size: 35px;
  line-height: 35px;
  color: #343434;
}
#promote_code {
  margin-top: 45px;
  width: 380px;
  height: 70px;
}
.invitor {
  margin-left: 35px;
  margin-top: 70px;
  font-family: PingFanf-Bold;
  font-size: 22px;
  line-height: 22px;
  color: #ff0000;
}
.referrernickname {
  margin-top: 68px;
  font-family: PingFanf-Bold;
  width: 417px;
  font-size: 35px;
  line-height: 35px;
  color: #343434;
  text-align: right;
}
.reward {
  font-family: PingFanf-Bold;
  font-size: 22px;
  line-height: 22px;
  color: #ff0000;
  margin-top: 30px;
}
.bottom {
  background-image: url("/imgs/register_bottom.png");
  height: 707px;
  width: 1740px;
}
.formfont {
  font-family: PingFanf-Bold;
  font-size: 35px;
  line-height: 35px;
  color: #343434;
}
.protocol {
  margin-left: 242px;
  font-family: PingFanf-Bold;
  font-size: 25px;
  line-height: 25px;
  width: 1300px;
  color: #525252;
  word-break: break-all;
}
.protocol a {
  font-family: PingFanf-Bold;
  font-size: 25px;
  line-height: 25px;
  color: #55caec;
}
.sendbutton {
  background-image: linear-gradient(to right, skyblue, purple);
  font-size: 34px;
  text-align: center;
  font-family: PingFanf-Bold;
  margin-left: 10px;
  vertical-align: middle;
}
.registernow {
  display: block;
  width: 241px;
  height: 77px;
  background-image: url(/imgs/立即注册2.svg);
  margin: 0 auto;
  margin-top: 54px;
}
.inforformtip {
  font-family: PingFang-Bold;
  font-size: 19px;
  line-height: 19px;
  color: #ff0000;
  margin-left: 10px;
}
</style>
<template>
<div>
  <div class="absolute w-screen h-screen" v-if="notify" @click="flipNotify">
    <div class="absolute notifier">
      <div class="absolute" v-if="!emailVerified">
        <FailVerify />
      </div>
      <div class="absolute">
        <RegSucess v-if="invitorUsed && registered" />
      </div>
      <div class="absolute" v-if="registered && !invitorUsed">
        <RegSuccess2 />
      </div>
      <div class="absolute" v-if="emailVerified">
        <VerifyEmail />
      </div>
      <div class="absolute" v-if="!smsEligible">
        <VerifyPhone />
      </div>
    </div>
  </div>

  <div class="main">
      <div class="header">
        <div class="registertip">To access functionalities, please register</div>
      </div>

      <div class="middle">
        <div class="flex flex-row flex-wrap">
          <div class="inline-block referrer">Promtor(Optional)</div>
          <input
            type="text"
            id="promote_code"
            v-model="promote_code"
            @input="onPromoteCodeChange"
          />
          <div class="inline-block invitor">
            {{ invitor }}
          </div>
          <div class="referrernickname">就是那个光嘿乌拉拉</div>
        </div>
        <div class="reward" style="text-align: right">注册成功奖励20积分</div>
      </div>

      <div class="bottom">
        <div class="flex flex-row" style="padding-top: 145px; position: relative">
          <div style="margin-right: 34px; margin-left: 34px">
            <div
              class="formfont"
              style="
                height: 71px;
                text-align: right;
                margin-bottom: 31px;
                line-height: 71px;
              "
            >
              *钱包地址
            </div>
            <div
              class="formfont"
              style="
                height: 71px;
                text-align: right;
                margin-bottom: 31px;
                line-height: 71px;
              "
            >
              *Name
            </div>
            <div
              class="formfont"
              style="
                height: 71px;
                text-align: right;
                margin-bottom: 31px;
                line-height: 71px;
              "
            >
              *Email
            </div>
          </div>
          <div>
            <div style="width: 450px; height: 71px; margin-bottom: 31px">
              {{ wallet_addr }}
            </div>

            <div>
              <input
                class="rightinput"
                style="width: 450px; height: 71px; margin-bottom: 31px"
                type="text"
                v-model="username"
                @input="onUsernameChange"
              />
              <span class="inforformtip">{{ user_exists }}</span>
            </div>
            <div>
              <input
                class="rightinput"
                style="width: 450px; height: 71px; margin-bottom: 31px"
                type="text"
                v-model="email"
                @input="onEmailChange"
              />
              <span class="inforformtip">{{ email_correct }}</span>
            </div>
          </div>
          <div style="margin-right: 34px; margin-left: 160px">
            <div
              class="formfont"
              style="
                height: 71px;
                text-align: right;
                margin-bottom: 31px;
                line-height: 71px;
              "
            >
              *Region
            </div>
            <div
              class="formfont"
              style="
                height: 71px;
                text-align: right;
                margin-bottom: 31px;
                line-height: 71px;
              "
            >
              *Home
            </div>
          </div>
          <div>
            <div>
              <select
                style="width: 450px; height: 71px; margin-bottom: 31px"
                v-model="region"
                name=""
                id=""
              >
              <option v-for="country in countryList"
              :key="country">{{ country }}</option>
              </select>
              <span class="inforformtip" v-if="region === ''">*请选择地址</span>
            </div>
            <div>
              <select style="width: 100px; height: 71px; margin-bottom: 31px"
              v-model="phone_prefix">
              <option v-for="code in phoneCodeList"
              :key="code">+{{ code }}</option>
              </select>
              <input
                style="width: 350px; height: 71px; margin-bottom: 31px"
                type="text"
                v-model="phone"
                @input="onPhoneChange"
              />
              <span class="inforformtip">{{ phone_correct }}</span>
            </div>
            <div>
              <input
                style="width: 297px; height: 71px; margin-bottom: 31px"
                type="text"
                v-model="verify_code"
              />
              <button class="sendbutton" style="width: 141px; height: 71px"
              @click="sendSms">
                发送
              </button>
            </div>
          </div>
        </div>
        <div class="protocol">
          <input type="checkbox" name="" id="" v-model="agreement" />
          我已决定是否<a href="">隐私条款</a> <a href="">免责声明</a>
        </div>
        <button class="registernow" @click="registerWrapper"></button>
      </div>
    </div>
</div>

</template>

