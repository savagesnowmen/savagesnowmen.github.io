<template>
  <header
    class="
      md:absolute
      w-full
      p-2
      z-10
      sm:p-6
      flex flex-row flex-wrap
      items-center
      justify-between
      text-center
    "
  >
    <NuxtLink to="/">
      <img
        class="w-14rem md:w-32rem"
        src="~/assets/images/savage-snowman-logo.png"
      />
    </NuxtLink>

    <img
      class="block md:hidden"
      src="~/assets/images/menu-icon-black.svg"
      @click="showMenu = !showMenu"
    />
    <nav
      :class="`${showMenu ? 'flex' : 'hidden'} ${
        $route.path == '/' ? 'md:hidden' : 'md:flex'
      } w-full md:w-unset md:visible md:absolute md:right-1 md:ml-4 md:flex-row flex-wrap`"
    >
      <s-link
        class="w-full md:w-auto bg-indigo-500 text-2xl border-4 mx-2 px-2"
        to="/"
        >Farm</s-link
      >
      <s-link
        class="w-full md:w-auto bg-indigo-500 text-2xl border-4 mx-2 px-2"
        to="/"
        >Stake</s-link
      >
      <s-link to="/" class="bg-indigo-500 text-2xl border-4 mx-2 px-2"
        >My Snowmen</s-link
      >
      <!--<s-button class="bg-indigo-500 text-2xl border-4 px-2">Stake</s-button> -->
      <s-button
        v-if="account == ''"
        @click.native="connect()"
        class="w-full md:w-auto bg-indigo-500 text-2xl border-4 mx-2 px-2"
        >Connect Wallet</s-button
      >
      <s-button
        v-else
        class="w-full md:w-auto bg-indigo-500 text-2xl border-4 mx-2 px-2"
        >{{ account }}</s-button
      >
    </nav>
  </header>
</template>
<script>
import Web3 from "web3";
import Web3Modal from "web3modal";

const providerOptions = {
  /* See Provider Options Section */
};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions, // required
});

export default {
  name: "HeaderBar",
  props: {
    home: Boolean,
  },
  data() {
    return {
      account: "",
      showMenu: false,
    };
  },
  methods: {
    async connect() {
      let ethereum = window.ethereum;
      let web3 = window.web3;
      await ethereum.enable();
      if (typeof ethereum !== "undefined") {
        await ethereum.enable();
        web3 = new Web3(ethereum);
      } else if (typeof web3 !== "undefined") {
        web3 = new Web3(web3.currentProvider);
      } else {
        web3 = new Web3(
          new Web3.providers.HttpProvider(process.env.WEB3_PROVIDER)
        );
      }
      /* const web3 = new Web3(Web3.givenProvider || "http://localhost:8545"); */
      // Load account
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      this.account = accounts[0];
      const networkId = await web3.eth.net.getId();
      console.log(networkId);
      if (networkId !== 43113) alert("Wrong Network");
      /* const provider = await web3Modal.connect();
      const web3 = new Web3(provider);
      let accounts;
      let getAccounts = await web3.eth
        .getAccounts()
        .then((acc) => (accounts = acc));
      console.log(getAccounts, accounts); */
    },
  },
};
</script>