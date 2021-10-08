require("@nomiclabs/hardhat-waffle");
const secrets = require("./private-keys");
const ehterscanApiKey = requie("./etherscan")
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }

});






// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks:{
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/UTzMXNfY8mfvBwQhRElRZlXYm1Uhdwce`,
      accounts: [
        `0x${secrets.Ropsten_Owner}`,
        `0x${secrets.Ropsten_Adam}`,
        `0x${secrets.Ropsten_Ewa}`,
      ],
    },
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/81Q_z7ApJHfuQfnOUZK-8EbXBGZA-2d-',
      accounts: [
        `0x${secrets.Ropsten_Owner}`,
        `0x${secrets.Ropsten_Adam}`,
        `0x${secrets.Ropsten_Ewa}`,
      ],
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: secrets.etherscan
  },
  
};
