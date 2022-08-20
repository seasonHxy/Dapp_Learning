require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// module.exports = {
//   solidity: "0.8.4",
// };


// require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/W9C-T6683tggodXeizVWtP8tLtbx-pp2",
      accounts: ["9929b7ca89badbd90bd34f9732c30fdf3af660dcd48749ede4534feaacfd7382"]
    },
  },
};

// Deploying contracts with account:  0x928D747a7d583FaD9856bdAd3b165eD6965DCeC6
// Account balance:  20000000000000000
// WavePortal address:  0x61E222fc9B0DD36fD61e47D861a29ab0995a08f1

// npx hardhat run scripts/deploy.js --network rinkeby
// Deploying contracts with account:  0x928D747a7d583FaD9856bdAd3b165eD6965DCeC6
// Account balance:  19120127591812276
// WavePortal address:  0xA332f84157F54310275965a022240D206C4fbfF1

// npx hardhat run scripts/deploy.js --network rinkeby
// WavePortal address:  0x1aDcD1083312C31264978e5d6f4CaDA6BF29f379

