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

export const setAvalanche = async () => {
  const ethereum = window.ethereum;
  const chainId = config.chainId;
  const rpcUrl = config.provider;

  try {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId }],
    });
  } catch (err) {
    if (err.code === 4902) {
      try {
        await ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId,
              rpcUrl,
            },
          ],
        });
      } catch (err) {
        console.error(err);
      }
    }
    console.error(err);
  }
};

export const connect = async () => {
  const ethereum = window.ethereum;

  let error;

  if (ethereum) {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
      const chainId = await ethereum.request({ method: "eth_chainId" });

      if (chainId !== config.chainId) {
        await setAvalanche();
      }
    } catch (err) {
      if (err.code === 4001) {
        error = "Connection request denied";
      } else {
        error = "Unknown error occurred";
      }
      console.error(err);
    }
  } else {
    error = "MetaMask not installed";
  }
  if (error) {
    alert(error);
  }
};
