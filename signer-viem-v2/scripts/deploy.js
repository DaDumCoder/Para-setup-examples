const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("ParaTestToken");
  const token = await Token.deploy(); // add constructor args if needed
  await token.deployed();
  console.log("✅ Token deployed to:", token.address);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
