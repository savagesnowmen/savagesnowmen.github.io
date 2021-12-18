const config = {
  provider: "https://api.avax.network/ext/bc/C/rpc", // "https://api.avax-test.network/ext/bc/C/rpc" <- Testnet
  chainId: "0xa86a", // "0xa869" <- Testnet
  contractAddress: "0xd53D29ACDF1B25c46B47312a1C8c241a719AadB3",
  snoTokenAddress: "",
  snoTokenSymbol: "SNO",
  snoTokenDecimals: 18,
  snoTokenImage: "http://placekitten.com/200/300",
  NFT_CONTRACT_ADDRESS: "0x0814e598dE7318a5CE9Bc14DDB0F188cc469243e", // "0x0814e598dE7318a5CE9Bc14DDB0F188cc469243e#writeContract" <- Testnet
  GAS_MULTIPLIER: 2,
};
export default config;
