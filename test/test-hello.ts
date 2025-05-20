import { ethers } from "hardhat";

const { expect } = require("chai");

describe("HelloWorld", function () {
    it("Should return the correct message", async function () {
        const HelloWorld = await ethers.getContractFactory("HelloWorld");
        const storage = await HelloWorld.deploy("Hello, World!");
        console.log("HelloWorld deployed to:", await storage.getAddress());
        expect(await storage.getMessage()).to.equal("Hello, World!");
    });
});
