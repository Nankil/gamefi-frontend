<script>
export default {
  data() {
    return {
      promote_code: 'code',
      wallet_addr: 'wallet',
      id: 'id',
      privilege: 'privilege',
      username: 'username',
      region: 'region',
      phone: 'phone',
      email: 'email',
      registered_at: 'registered_at',
    };
  },
};

</script>

<template>
<div>
<div class="w-full basic-info">
    <div class="register-time">
      <div id="line1">首次注册时间</div>
      <div id="line2">2022-08-08</div>
    </div>
      <div class="user-form flex flex-row">
        <div class="col bg-slate-300" id="1" style="margin-left:97px">
          <div class="key-pair flex flex-row">
            <div class="key">
              <div class="key-item">{{$t('Account.Info.promote_code')}}</div>
              <div class="key-item">{{$t('Account.Info.id')}}</div>
              <div class="key-item">{{$t('Account.Info.region')}}</div>
              <div class="key-item">{{$t('Account.Info.phone')}}</div>
            </div>
            <div class="value">
              <div style="display:flex">
                <div class="value-item"></div>
                <img
                style="position:relative; bottom:19px ; left:22px"
                src="/imgs/复制.svg" alt="复制">
              </div>
              <div class="value-item"></div>
              <div class="value-item"></div>
              <div class="value-item"></div>
            </div>
          </div>
        </div>
        <div class="col bg-slate-900 flex">
          <div class="key">
            <div class="key-item">{{$t('Account.Info.wallet_addr')}}</div>
            <div class="key-item">{{$t('Account.Info.nickname')}}</div>
            <div class="key-item">{{$t('Account.Info.email')}}</div>
          </div>
          <div class="value">
            <div style="display:flex">
              <div class="value-item"></div>
              <img
              style="position:relative; bottom:19px ; left:22px"
              src="/imgs/复制.svg" alt="复制">
            </div>
            <div class="value-item"></div>
            <div class="value-item"></div>
            <img
            style=" position: absolute; right: 397px; "
            src="/imgs/修改.svg" alt="修改">
          </div>
        </div>
      </div>
  </div>
<div class="vip">
    <div class="flex" style="height:160px">
      <button style=" display: flex;  width: 700px;
  height: 130px;">
        <span
          style="font-size: 32px; font-weight: bold; color: #53cbed; position: absolute; top: 1010px; left: 88px;">
          當前權限階級
        </span>
        <div class="level-now">
          <span class="vip-level">
            一般会员
          </span>
          <span class="lunci">
            (种子轮)
          </span>
        </div>
        <img class="level-icon" src="/imgs/一般.svg" alt="">
      </button>
      <button style="display: flex;  width:  700px;
  height: 230px;">
        <span
          style="font-size: 32px; font-weight: bold; color: #53cbed; position: absolute; top: 1010px; left: 785px;">
          下一權限階級
        </span>
        <div class="level-next">
          <span class="vip-level">
            黄金会员
          </span>
          <span class="lunci">
            (种子轮)
          </span>
        </div>
        <img class="level-icon" src="/imgs/黄金.svg" alt="">
      </button>
      <div class="check">
        <img src="/imgs/查看所有.svg" alt="">
      </div>
    </div>
    <div class="rule"
    style="height: 127px; width: 1558px; position: relative; top: 0px;" >
      <span style="font-size:26px;font-weight: bold">【會員階級提升規則】</span>
    </div>
    <div class="vip-table" v-if="false">
      <table>
        <tr style="background-color: #d2eef6;">
          <th style=" height:80px; width:261px;
            font-family: PingFang-SC-Heavy;
            font-size: 34px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #525252;">會員階級</th>
          <th style=" height:80px; width:602px;
            font-family: PingFang-SC-Heavy;
            font-size: 34px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
	          color: #525252;">升级条件/任务</th>
          <th style=" height:80px; width:704px;
            font-family: PingFang-SC-Heavy;
            font-size: 34px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #525252;">權限/空投獎勵</th>
        </tr>
        <tr>
          <td style=" background-color:#ffffff; ">
            <img src="/imgs/当前阶级.svg" alt="">
            <div style="display:block; align-items: center; position:absolute; left: 150px;top:1600px;">
              <img  class="level-icon" src="/imgs/一般.svg" alt="">
              <p style="position:relative; left:15px;
              font-family: PingFang-SC-Heavy;
              font-size: 26px;
              font-weight: normal;
              font-stretch: normal;
              letter-spacing: 0px;
              color: #525252;">一般会员</p>
              <p style="position:relative; left:15px;
              font-family: PingFang-SC-Heavy;
              font-size: 26px;
              font-weight: normal;
              font-stretch: normal;
              letter-spacing: 0px;
              color: #525252;">(种子轮)</p>
            </div>
          </td>
          <td style=" background-color:#ffffff; ">row 1, cell 2</td>
          <td style=" background-color:#ffffff; ">row 1, cell 3</td>
        </tr>
      </table>
    </div>
    <div class="vip-table" v-if="true">
      <table>
        <tr style="background-color: #d2eef6;">
          <th style=" height:80px; width:261px;
            font-family: PingFang-SC-Heavy;
            font-size: 34px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #525252;">會員階級</th>
          <th style=" height:80px; width:602px;
            font-family: PingFang-SC-Heavy;
            font-size: 34px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
	          color: #525252;">升级条件/任务</th>
          <th style=" height:80px; width:704px;
            font-family: PingFang-SC-Heavy;
            font-size: 34px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #525252;">權限/空投獎勵</th>
        </tr>
        <tr style="background-color: #ffffff;">
          <td>
            <img src="/imgs/当前阶级.svg" alt="">
            <div style="display:block; align-items: center; position:absolute; left: 150px;top:1600px;">
              <img  class="level-icon" src="/imgs/黄金.svg" alt="">
              <p style="position:relative; left:15px;
              font-family: PingFang-SC-Heavy;
              font-size: 26px;
              font-weight: normal;
              font-stretch: normal;
              letter-spacing: 0px;
              color: #525252;">一般会员</p>
              <p style="position:relative; left:15px;
              font-family: PingFang-SC-Heavy;
              font-size: 26px;
              font-weight: normal;
              font-stretch: normal;
              letter-spacing: 0px;
              color: #525252;">(种子轮)</p>
            </div>
          </td>
          <td>row 1, cell 2</td>
          <td>row 1, cell 3</td>
        </tr>
      </table>
    </div>
  </div>
</div>


</template>


<style scoped>
#html{
  margin: 0;
}

.basic-info {
  width: 1741px;
  height: 583px;
  background: url('/imgs/account_basic_info.svg');
  background-size: 100% auto;
  padding-top: 26px;

}
.register-time {
  margin-left: 224px;
  font-size: 19px;
  color: #c35fc9;
  font-family: PingFang-bold;
}

#line2 {
  margin-top: -10px;
}

.user-form {
  margin-top: 50px;
}

.vip {
  margin-top: 200px;
  width: 1737px;
  height: 1117px;
}

.col {
  background:none;
  width: 822px;
}

.key {
  width: 175px;
  height: 462px;
}
.value {
  margin-left: 27px;
}
.value-item {
  width: 459px;
  height: 71px;
  margin-bottom:37px;
  background-color: #ffffff;
}
.key-item {
  margin-bottom:57px;
  text-align: right;
  font-family: PingFang-SC-Bold;
  font-size: 35px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #434343;
}

#button {

}

.level-now, .level-next{
  background: url('/imgs/会员名称.svg');
  width: 391px;
  height: 87px;
  align-items: center;
}
.vip-level {
  text-align: center;
  font-family: PingFang-SC-Bold;
  font-size: 52px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #ffffff;
}
.lunci {
  text-align: center;
  font-family: PingFang-SC-Bold;
  font-size: 26px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #ffffff;
}

.level-icon{
  position: relative;
  bottom: 20px;
  width: 122px;
  height: 123px;
}

.check{
  position: absolute;
  left: 1500px;
  top: 950px;
}
</style>
