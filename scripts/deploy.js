// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
    const Rebalancer = await hre.ethers.getContractFactory("Rebalancer");
    const rebalancer = await Rebalancer.deploy();
    await rebalancer.deployed();

    console.log("Rebalancer deployed to:", rebalancer.address);

    await rebalancer.deployTransaction.wait(10);

    await hre.run("verify:verify", {
        address: rebalancer.address,
        constructorArguments: [],
        contract: "contracts/Rebalancer.sol:Rebalancer"
    });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
