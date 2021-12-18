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
      <s-link to="/snowmen" class="bg-indigo-500 text-2xl border-4 mx-2 px-2"
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
        class="
          w-full
          md:w-auto
          bg-indigo-500
          text-md text-gray-500
          border-4
          mx-2
          px-2
        "
        >Connected (0x...{{ accountMsg }})</s-button
      >
    </nav>
  </header>
</template>
<script>
import Web3 from "web3";
import Web3Modal from "web3modal";
import config from "../app.config";
import { connect } from "@/utils/web3";

const ethereum = window.ethereum;

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
      accountMsg: "",
      showMenu: false,
    };
  },
  methods: {
    async connect() {
      await connect();

      const accounts = await ethereum.request({ method: "eth_accounts" });

      this.account = accounts[0];
      this.accountMsg = this.account.substr(this.account.length - 4);
    },
  },

  async mounted() {
    if (ethereum) {
      try {
        const accounts = await ethereum.request({ method: "eth_accounts" });

        if (accounts.length > 0) {
          this.account = accounts[0] || null;
          this.accountMsg = this.account.substr(this.account.length - 4);
        }
      } catch (err) {
        console.error(err);
      }
    }
  },
};
</script>