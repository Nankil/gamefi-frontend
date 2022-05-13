// import Contract from 'web3-eth-contract';
// const Contract = require('web3-eth-contract');
// import Web3 from 'web3';
// const web3 = new Web3( new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545'));
// const Contract = web3.eth.Contract;

// const {ethers} = require('ethers');
const providerURI = 'https://data-seed-prebsc-1-s1.binance.org:8545';
import {ethers} from 'ethers';


/**
 * @class FundingContract
 */
export class FundingContract {
  /**
   *
   * @param {object} contractInterface
   * @param {string} contractAddr address of funding contract
   */
  constructor(contractInterface, contractAddr) {
    const provider = new ethers.providers.JsonRpcProvider(providerURI);
    this.contract =
      new ethers.Contract(contractAddr, contractInterface, provider);
  }

  /**
   *
   * @return {string}
   */
  async fundsTotal() {
    return await this.contract.total_funds();
  }

  /**
   *
   * @param {string} addr
   * @return {string}
   */
  async fundOf(addr) {
    return await this.contract.funds(addr);
  }

  /**
   *
   * @param {Number} amount amount of BNB to fund
   * @return {Number}
   */
  transfer2BNB(amount) {
    return amount / 10 ** 18;
  }
}

// module.exports = {
//   FundingContract,
// };
