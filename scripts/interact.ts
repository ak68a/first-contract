import { ethers } from "hardhat";
import { HelloWorld } from "../typechain-types";

async function main() {
  // The address where your contract was deployed
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  
  // Get the contract instance
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const helloWorld = await HelloWorld.attach(contractAddress) as HelloWorld;

  // Read the current message
  console.log("Current message:", await helloWorld.getMessage());

  // Update the message
  console.log("\nUpdating message...");
  const newMessage = "Hello from the interaction script!";
  const tx = await helloWorld.setMessage(newMessage);
  console.log("Transaction hash:", tx.hash);
  
  // Wait for the transaction to be mined
  await tx.wait();
  
  // Read the updated message
  console.log("\nNew message:", await helloWorld.getMessage());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 