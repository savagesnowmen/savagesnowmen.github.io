import Web3 from "web3";
import axios from "axios"
import config from "../app.config.js"
export const state = () => ({
  account: '',
  snowmen: [],
  walletConnectionStatus: false,
  networkId: ''
})

export const mutations = {
  async connectWeb3Account() {
    const web3 = new Web3(
      new Web3.providers.HttpProvider(process.env.PROVIDER)
    );
    // Load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const networkId = await web3.eth.net.getId();
    const networkData = Marketplace.networks[networkId];
  },
  async getSnowmenData(snowmanId) {
    let snowmanData = await axios.get(`https://ipfs.io/ipfs/QmRoQn3G24Y39u74TmB7axkwXkxyvWr7nFUjyx8QYjT98d/${snowmanId}.json`)

  },
  async addTokensToWallet() {
    const tokenAddress = config.tokenAddress;
    const tokenSymbol = config.tokenSymbol;
    const tokenDecimals = config.tokenDecimals;
    const tokenImage = config.tokenImage;
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC721', // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      });

      if (wasAdded) {
        console.log('Thanks for your interest!');
      } else {
        console.log('Your loss!');
      }
    } catch (error) {
      console.log(error);
    }
  },
  async web3functionality(state) {
    window.addEventListener("load", function () {
      if (window.ethereum) {
        // use MetaMask's provider
        App.web3 = new Web3(window.ethereum);
        window.ethereum.enable().catch((err) => this.alert("Unable to connect to wallet.")); // get permission to access accounts

        // detect Metamask account change
        window.ethereum.on('accountsChanged', function (accounts) {
          console.log('accountsChanges', accounts);
          state.account = accounts[0]
        });

        // detect Network account change
        window.ethereum.on('networkChanged', function (networkId) {
          console.log('networkChanged', networkId);
          state.networkId = networkId
        });
      } else {
        console.warn(
          "No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live",
        );
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        App.web3 = new Web3(
          new Web3.providers.HttpProvider("http://127.0.0.1:7545"),
        );
      }
    });
  },
}