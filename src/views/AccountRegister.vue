<script>
import {existsPromotion, userexists} from '../api/backend.mjs';
import {mapActions} from 'vuex';
export default {
  setup() {},
  data() {
    return {
      agreement: false,
      promote_code: '',
      username: '',
      region: '',
      phone: '',
      email: '',
      invitor: '',
      verify_code: '',
      user_exists: '',
      email_correct: '',
      phone_correct: 'not',
    };
  },

  computed: {
    wallet_addr() {
      return this.$store.state.userInfo.walletAddr;
    },
  },

  methods: {
    ...mapActions(['register']),
    onPhoneChange() {
      if (/^\d{11}$/.test(this.phone)) {
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
  },
  async registerWrapper() {
    const res = await this.register({
      walletAddr: this.wallet_addr,
      username: this.username,
      phone: this.phone,
      email: this.email,
      invitation_code: this.promote_code,
    });

    console.log(res);

    if (!res) {
      this.$store.dispatch('pushErrorLog', 'register failed');
    } else {
      this.$router.push('/account/registered');
    }
  },
  onPromoteCodeChange() {
    if (this.promote_code.length !== 10) {
      this.invitor = 'too short';
    } else {
      this.invitor = 'checking...';
      existsPromotion(this.promote_code).then((res) => {
        if (res.status) {
          this.invitor = res.invitor;
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
};
</script>
<style>
.header {
  background-image: url("/imgs/register_header.svg");
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
  background-image: url("/imgs/register_middle.svg");
  background-color: red;
  height: 225px;
  width: 1730px;
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
  background-image: url("/imgs/register_bottom.svg");
  background-color: green;
  height: 707px;
  width: 1730px;
}
.formfont{
  font-family: PingFanf-Bold;
  font-size: 35px;
  line-height: 35px;
  color: #343434;
}

</style>
<template>
  <div style="margin-left: 93px">
    <div class="header">
      <div class="registertip">To access functionalities, please register</div>
    </div>

    <div class="middle">
      <div class="flex flex-row flex-wrap">
        <div class="inline-block referrer">Promtor(Optional)</div>
        <input type="text" id="promote_code" v-model="promote_code" @input="onPromoteCodeChange" />
        <div class="inline-block invitor">
          {{ invitor }}
        </div>
        <div class="referrernickname">就是那个光嘿乌拉拉</div>
      </div>
      <div class="reward" style="text-align: right">注册成功奖励20积分</div>
    </div>

    <div class="bottom">
      <div class="flex flex-row " style="padding-top:145px;">
        <div>
          <div>
            <span class="formfont" style="margin-left:68px;margin-right:34px">*钱包地址</span>
            <div>{{ wallet_addr }}</div>
          </div>
          <div>
            <span class="formfont" style="margin-left:117px;margin-right:34px">*Name</span>
            <input class="rightinput" style="width:450px;height:71px; margin-bottom:31px;" type="text" v-model="username"  @input="onUsernameChange" />
            <div>{{ user_exists }}</div>
          </div>
          <div>
            <span class="formfont" style="margin-left:117px;margin-right:34px">*Email</span>
            <input class="rightinput" style="width:450px;height:71px; margin-bottom:31px;"  type="text" v-model="email" @input="onEmailChange" />
            <div>{{ email_correct }}</div>
          </div>
        </div>
        <div style="position:absolute;right:188px">
          <div>
            <span class="formfont">*Region</span>
            <input style="width:450px;height:71px; margin-bottom:31px;"  type="text" v-model="region" />
          </div>
          <div>
            <span class="formfont">*Phone</span>
            <input style="width:450px;height:71px; margin-bottom:31px;"  type="text" v-model="phone" @input="onPhoneChange" />
            <div>{{ phone_correct }}</div>
          </div>
          <div style="text-align:right">

            <input style="width:287px;height:71px; margin-bottom:31px;margin-left:10px"  type="text" v-model="verify_code"  />
            <button style="width:141px;height:71px">发送</button>
          </div>
        </div>
      </div>
      <div style="margin-left:242px">
      <input type="checkbox" name="" id="" v-model="agreement">
       我已决定是否</div>
      <button style="width:241px;" class="" @click="registerWrapper">立即注册</button>
    </div>
  </div>
</template>

