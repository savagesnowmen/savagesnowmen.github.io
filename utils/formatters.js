import Web3 from "web3";

export const fromWei = (value, unit = "ether") => {
  return Web3.utils.fromWei(value, unit);
};

export const toBN = (value) => {
  return Web3.utils.toBN(value);
};
