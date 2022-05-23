<script>
import {existsPromotion} from '../api/backend.mjs';
export default {
  setup() {

  },
  data() {
    return {
      promote_code: '',
      username: '',
      region: '',
      phone: '',
      email: '',
    };
  },

  computed: {
    wallet_addr() {
      return this.$store.state.userInfo.walletAddr;
    },
    invitor() {
      if (this.promote_code.length != 10) {
        return 'too short';
      } else {
        let ret;
        return ret;
      }
    },
  },

  methods: {
    onChangePromote() {
      if (this.promote_code.length != 10) {
        this.invitor = 'too short';
      } else {
        this.invitor = 'checking...';
        existsPromotion(this.promote_code).then((res) => {
          if (res.exists) {
            this.invitor = 'exists';
          } else {
            this.invitor = 'not exists';
          }
        });
      }
    },
  },
};
</script>

<template>
  <div class="w-full">
    <div class="h-25 border-2 p-12 text-center text-teal-300">
      <div class="text-4xl">To access functionalities, please register</div>
      <div><a href="">Tutorial</a></div>
    </div>

    <div class="h-30 border-2 p-12 mt-10">
      <div class="flex flex-row flex-wrap">
        <div class="inline-block
        text-center align-middle m-2">Promtor(Optional)</div>
        <input type="text" v-model="promote_code">
        <div class="text-teal-300
        inline-block text-center align-middle m-2">
        {{ invitor }}</div>
      </div>
    </div>
    <div class="w-full mt-10">
      <div class="text-purple-300 font-bold text-2xl">Basic info</div>
      <div class="mt-2 border-2 p-3 text-left align-middle">
        <div class="flex flex-row w-full m-2">
          <div class="inline-block align-middle
          p-2 lg:w-1/12 sm:w-1/3">Wallet</div>
          <div class="w-1/3 border-2 border-black">{{wallet_addr}}</div>
          <button class="ml-2">Bind</button>
        </div>
        <div class="flex flex-row w-full m-2">
          <div class="inline-block align-middle
          p-2 lg:w-1/12 sm:w-1/3">Name</div>
          <input type="text" v-model="username"
          class="h-10 bg-gray-600 text-white w-1/3">
        </div>
        <div class="flex flex-row w-full m-2">
          <div class="inline-block align-middle
          p-2 lg:w-1/12 sm:w-1/3">Region</div>
          <input type="text" v-model="region"
          class="h-10 bg-gray-600 text-white w-1/3">
        </div>
        <div class="flex flex-row w-full m-2">
          <div class="inline-block align-middle
          p-2 lg:w-1/12 sm:w-1/3">Phone</div>
          <input type="text" v-model="phone"
          class="h-10 bg-gray-600 text-white w-1/3">
        </div>
        <div class="flex flex-row w-full m-2">
          <div class="inline-block align-middle
          p-2 lg:w-1/12 sm:w-1/3">Email</div>
          <input type="text" v-model="email"
          class="h-10 bg-gray-600 text-white w-1/3">
        </div>

        <button class="bg-orange-200 m-2 p-3">Register</button>

      </div>
    </div>

  </div>
</template>

