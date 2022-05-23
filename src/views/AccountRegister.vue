<script>
import { existsPromotion } from "../api/backend.mjs";
export default {
  setup() {},
  data() {
    return {
      promote_code: "",
      username: "",
      region: "",
      phone: "",
      email: "",
    };
  },

  computed: {
    wallet_addr() {
      return this.$store.state.userInfo.walletAddr;
    },
    invitor() {
      if (this.promote_code.length != 10) {
        return "too short";
      } else {
        let ret;
        return ret;
      }
    },
  },

  methods: {
    onChangePromote() {
      if (this.promote_code.length != 10) {
        this.invitor = "too short";
      } else {
        this.invitor = "checking...";
        existsPromotion(this.promote_code).then((res) => {
          if (res.exists) {
            this.invitor = "exists";
          } else {
            this.invitor = "not exists";
          }
        });
      }
    },
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
        <input type="text" id="promote_code" v-model="promote_code" />
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
            <span class="formfont" style="margin-left:68px;margin-right:34px">钱包地址</span>
            <input class="rightinput" style="width:636px;height:71px; margin-bottom:31px;" type="text" />
          </div>
          <div>
            <span class="formfont" style="margin-left:117px;margin-right:34px">*钱包</span>
            <input class="rightinput" style="width:450px;height:71px; margin-bottom:31px;" type="text" />
          </div>
          <div>
            <span class="formfont" style="margin-left:117px;margin-right:34px">*钱包</span>
            <input class="rightinput" style="width:450px;height:71px; margin-bottom:31px;"  type="text" />
          </div>
        </div>
        <div style="position:absolute;right:188px">
          <div>
            <span class="formfont">钱包地址</span>
            <input style="width:450px;height:71px; margin-bottom:31px;"  type="text" />
          </div>
          <div>
            <span class="formfont">钱包地址</span>
            <input style="width:450px;height:71px; margin-bottom:31px;"  type="text" />
          </div>
          <div style="text-align:right">

            <input style="width:287px;height:71px; margin-bottom:31px;margin-left:10px"  type="text" />
            <button style="width:141px;height:71px">发送</button>
          </div>
        </div>
      </div>
      <div style="margin-left:242px"><input type="checkbox" name="" id="">
         我已决定是否</div>
      <button style="width:241px;" class="">立即注册</button>
    </div>
  </div>
</template>

