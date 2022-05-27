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
  <div class="w-full basic-info">
    <div class="register-time">
      <div id="line1">Registered At</div>
      <div id="line2">1020-1010</div>
    </div>
      <div class="user-form flex flex-row">
        <div class="col bg-slate-300" id="1" style="margin-left:97px">
          <div class="key-pair flex flex-row">
            <div class="key">Promotion</div>
            <div class="value">somevalue</div>
          </div>
        </div>
        <div class="col bg-slate-900">
          hello
        </div>
      </div>
  </div>
</template>


<style scoped>
.basic-info {
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

.col {
  width: 822px;
}
</style>
