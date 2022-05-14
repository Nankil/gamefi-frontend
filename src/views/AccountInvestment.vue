<script>
import {mapState} from 'vuex';
import {FundingContract} from '../api/bsc';
import FundingInterface from '../contracts/Funding.json';
import {ethers} from 'ethers';
export default {
  data() {
    return {
      privilege: 0,
      privileges: {
        0: {
          name: 'User',
          allows: ['some', 'other', 'some'],
        },
        1: {
          name: 'Core',
          allows: ['some', 'other', 'some'],
        },
        2: {
          name: 'Super',
          allows: ['some', 'other', 'some'],
        },
      },
      investments: [
        {
          name: 'Seeds Fund',
          allow: false,
          bound: '10BNB ~ 100BNB',
          lower_bound: 10,
          invested: '*',
          contractAddr: '0xc58d6Fac68B761c2F735160fD43bd9176E0B443D',
          contractType: 'fund',
          operation: {
            name: 'Invest',
          },
        },
      ],
    };
  },
  computed: {
    ...mapState(['userInfo', 'ethereum']),
  },
  methods: {
    async invested(contractAddr, contractType) {
      if (contractType === 'fund') {
        const fundingContract =
          new FundingContract(FundingInterface.abi, contractAddr);
        return fundingContract.transfer2BNB(
            await fundingContract.fundOf(this.userInfo.walletAddr));
      }
    },
    bnbAddr(contractAddr) {
      return 'https://testnet.bscscan.com/address/' + contractAddr;
    },
    async invest(contractAddr, contractType) {
      if (contractType === 'fund') {
        this.ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: this.userInfo.walletAddr,
              to: contractAddr,
              value: ethers.utils.parseEther('10').toHexString(),
              gasPrice: '0x09184e72a000',
              gas: '0x2710',
              chainId: '0x61',
            },
          ],
        })
            .then((txHash) => console.log(txHash))
            .catch((error) => {
              if (error.code === 4001) {
                this.$store.dispatch('pushErrorLog', error.message);
              }
            });
      }
    },
  },

  async mounted() {
    await this.$store.dispatch('connectWallet');

    if (this.userInfo.walletAddr === '') return;

    for (const inv in this.investments) {
      if (this.investments[inv].contractType !== 'fund') continue;

      this.investments[inv].invested = await this.invested(
          this.investments[inv].contractAddr,
          this.investments[inv].contractType,
      );
      console.log(this.investments[inv].invested);
    }
  },
};
</script>

<template>
  <div class="w-full">
    <div class="w-full">
      <div class="text-purple-400 font-bold text-2xl">My privilege</div>
      <div class="flex flex-col border-2 p-2">
        <div class="font-bold text-xl text-yellow-200">
          {{privileges[privilege].name}}</div>
        <div v-for="allow in privileges[privilege].allows" :key="allow">
          *{{ allow }}</div>
      </div>
    </div>
    <div class="w-full">
      <div class="text-purple-400 font-bold text-2xl">My Investment</div>
      <div class="w-full border-2 p-5">
        <div class="flex flex-row">
          <div class="w-1/12"></div>
          <div class="w-1/3 pl-5">Name</div>
          <div class="w-1/12">Allow</div>
          <div class="w-1/6">Bound</div>
          <div class="w-1/12">Invested</div>
          <div class="w-1/12">Operation</div>
        </div>
        <div class="w-full border-b-2 border-l-2 border-r-2">
          <div v-for="inv in investments" :key="inv.name" class="flex flex-row
          border-t-2">
            <div class="w-1/12"></div>
            <div class="w-1/3 border-l-2 pl-5">
              <a :href="bnbAddr(inv.contractAddr)">{{inv.name}}</a>
            </div>
            <div class="w-1/12">{{inv.allow}}</div>
            <div class="w-1/6">{{inv.bound}}</div>
            <div class="w-1/12">{{ inv.invested }}</div>
            <div class="w-1/12 hover:cursor-pointer"
            @click="invest(inv.contractAddr, inv.contractType)">
            {{inv.operation.name}}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
