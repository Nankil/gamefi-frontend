const seedsContractAddr = '0xc58d6Fac68B761c2F735160fD43bd9176E0B443D';
const contractInterface = require('../contracts/Funding.json');
const aliceAddr = '0xbabF784Cb81452b43055233BeE50d80a866609a6';
const { FundingContract } = require('./bsc');

const fundingContract =
    new FundingContract(contractInterface.abi, seedsContractAddr);

const main = async () => {
    const fundsTotal = parseInt(await fundingContract.fundsTotal());
    console.log(`Total funds: ${fundingContract.transfer2BNB(fundsTotal)} BNB`);
    const fundOf = await fundingContract.fundOf(aliceAddr);
    console.log(`fundOf ${aliceAddr} 
    funds: ${fundingContract.transfer2BNB(fundOf)} BNB`);
};

main();


