const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Rebalancer", function () {
  it("Should deploy", async function () {
    const Rebalancer = await ethers.getContractFactory("Rebalancer");
    const rebalancer = await Rebalancer.deploy();
    await rebalancer.deployed();
  });
});
