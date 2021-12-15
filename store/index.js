/* import Web3 from "web3";
import dotenv from 'dotenv'
export const state = () => ({
  accounts: [],
  snowmen: []
})

export const mutations = {
  connectWeb3Account() {
    const web3 = new Web3(
      new Web3.providers.HttpProvider(process.env.PROVIDER)
    );
    // Load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const networkId = await web3.eth.net.getId();
    const networkData = Marketplace.networks[networkId];
  }
  increment(state) {
    state.counter++
  }
} */