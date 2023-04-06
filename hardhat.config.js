require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: { 
    goerli: {
      url: 'https://goerli.infura.io/v3/',
      accounts:{
        mnemonic:''
      }
    }
  },
  etherscan: {
    apiKey: {
      goerli: ''
  }
}
};
