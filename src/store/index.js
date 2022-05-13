import {createStore} from 'vuex';

export default createStore({
  state: {
    ethereum: null,
    wallet_installed: false,
    userInfo: {
      walletAddr: '',
      phone: '',
      email: '',
      username: '',
    },
  },
  getters: {
  },
  mutations: {
    updateWalletAddr(state, walletAddr) {
      state.userInfo.walletAddr = walletAddr;
    },
    updateWalletInstalled(state, walletInstalled) {
      state.wallet_installed = walletInstalled;
    },
    setWeb3(state, web3) {
      state.ethereum = web3;
    },
  },
  actions: {
    updateWalletAddr({commit}, walletAddr) {
      commit('updateWalletAddr', walletAddr);
    },
    updateWalletInstalled({commit}, installed) {
      commit('updateWalletInstalled', installed);
    },
    setWeb3({commit}, web3) {
      commit('setWeb3', web3);
    },
  },
  modules: {
  },
});
