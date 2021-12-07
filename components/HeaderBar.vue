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
        class="w-12rem md:w-1/2"
        src="~/assets/images/savage-snowman-logo.png"
      />
    </NuxtLink>

    <img
      class="block sm:hidden"
      src="~/assets/images/menu-icon-black.svg"
      @click="showMenu = !showMenu"
    />
    <nav
      :class="`${showMenu ? 'flex' : 'hidden'} ${
        $route.path == '/' ? 'sm:hidden' : 'sm:flex'
      } w-full sm:w-unset sm:visible sm:absolute sm:right-1 sm:ml-4 sm:flex-row flex-wrap`"
    >
      <s-link
        v-if="$route.path != '/'"
        to="/"
        class="w-full sm:w-auto bg-purple-500 text-2xl border-4 px-2"
        >Home</s-link
      >
      <s-link
        class="w-full sm:w-auto bg-purple-500 text-2xl border-4 px-2"
        to="/mint"
        >Mint</s-link>
      <s-link to="/stake" class="bg-purple-500 text-2xl border-4 px-2">Stake</s-link>
      <!--<s-button class="bg-purple-500 text-2xl border-4 px-2">Stake</s-button> -->
      <s-button @click.native="connect()"
        class="w-full sm:w-auto bg-purple-500 text-2xl border-4 px-2"
        >Connect Wallet</s-button>
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
  providerOptions // required
});

export default {
  name: "HeaderBar",
  props: {
    home: Boolean,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    async connect(){
      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);
    }
  }
};
</script>