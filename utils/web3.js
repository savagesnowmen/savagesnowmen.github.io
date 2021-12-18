import config from "../app.config";

export const getGasData = async (web3, account, functionToEstimate) => {
  const [gasPrice, estimateGas] = await Promise.all([
    web3.eth.getGasPrice(),
    functionToEstimate.estimateGas({
      from: account,
    }),
  ]).catch((err) => {
    console.error(err);
  });
  const adjustedGas = estimateGas * config.GAS_MULTIPLIER;
  return { gasPrice, adjustedGas };
};
