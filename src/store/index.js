import {UnicodeNormalizationForm} from 'ethers/lib/utils';
import {saturate} from 'tailwindcss/defaultTheme';
import {createStore} from 'vuex';
import {register as apiRegister} from '../api/backend.mjs';

/**
 *
 * @param {Number} time ms
 * @return {Promise}
 */
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

/**
 *  switch to bsc network
 */
export default createStore({
  state: {
    ethereum: null,
    wallet_installed: false,
    userInfo: {
      walletAddr: '',
      phone: '',
      email: '',
      username: '',
      registered: false,
      token: '',
    },
    errorLog: [],
    infoLog: [],
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
    pushInfoLog(state, info) {
      state.infoLog.push(info);
    },
    pushErrorLog(state, error) {
      state.errorLog.push(error);
    },
    shiftInfoLog(state) {
      state.infoLog.shift();
    },
    shiftErrorLog(state) {
      state.errorLog.shift();
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
    async connectWallet({commit, state}) {
      if (state.ethereum === undefined) {
        state.errorLog.push('web3 is undefined');
        console.log('web3 is undefined');
      }
      try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{chainId: '0x61'}],
        });
      } catch (switchError) {
        // This error code indicates that
        // the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: '0x61',
                  chainName: 'BSC Testnet',
                  rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'] /* ... */,
                },
              ],
            });
          } catch (addError) {
            // handle "add" error
            state.errorLog.append('failed to add network');
          }
        }
        // handle other "switch" errors
      }
      const accounts =
              await ethereum.request({method: 'eth_requestAccounts'});
      commit('updateWalletAddr', accounts[0]);
      commit('pushInfoLog', 'wallet connected');
      await delay(5000);
      commit('shiftInfoLog');

      return 'success';
    },
    async transferTo({commit, state}) {
      if (state.ethereum === undefined) {
        state.errorLog.push('web3 is undefined');
      }
    },
    async register({commit, state}, {walletAddr, username, phone, email, invitation_code}) {
      const res = await apiRegister(walletAddr, username, phone, email, invitation_code);
      if (res.status === true) {
        commit('pushInfoLog', 'register success');
        return true;
      } else {
        return false;
      }
    },
    pushErrorLog({commit}, error) {
      commit('pushErrorLog', error);
    },
  },
  modules: {
  },
});
