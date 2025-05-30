import { ethers } from "hardhat";

async function main() {
  // Deploy the contract with an initial message
  const initialMessage = "Hello, Blockchain World!";
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const helloWorld = await HelloWorld.deploy(initialMessage);

  await helloWorld.waitForDeployment();

  const address = await helloWorld.getAddress();
  console.log(`HelloWorld contract deployed to: ${address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 