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
        class="w-16rem md:w-32rem "
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
        v-if="$route.path != '/'"
        to="/"
        class="w-full md:w-auto bg-indigo-500 text-2xl border-4 mx-2 px-2"
        >Home</s-link
      >
      <s-link
        class="w-full md:w-auto bg-indigo-500 text-2xl border-4 mx-2 px-2"
        to="/farm"
        >Farm</s-link>
      <s-link
        class="w-full md:w-auto bg-indigo-500 text-2xl border-4 mx-2 px-2"
        to="/stake"
        >Stake</s-link>
      <s-link to="/my-snowmen" class="bg-indigo-500 text-2xl border-4 mx-2 px-2">My Snowmen</s-link>
      <!--<s-button class="bg-indigo-500 text-2xl border-4 px-2">Stake</s-button> -->
      <s-button @click.native="connect()"
        class="w-full md:w-auto bg-indigo-500 text-2xl border-4 mx-2 px-2"
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