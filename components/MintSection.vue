<template>
  <!-- the minting section -->
  <section class="w-full bg-gray-100 p-4 py-8">
    <div class="container mx-auto">
      <div class="flex md:flex-row justify-center mb-8">
        <div class="hidden md:block m-8 w-12rem">
          <img src="~/assets/images/snowman-head-red-hat.png" />
        </div>
        <div class="text-center text-xl lg:text-2xl md:w-2/3">
          Welcome to The Lodge. If you want to be a member you’ll need a snowman
          first. Nothing personal, just want to make sure you aren’t just
          anybody. The Lodge consists of only the most savage, laid back avax
          chads in all the snow caps. Fresh pow on deck, heaters inside, beer on
          tap, nothing beats The Lodge. You understand now, right?
        </div>
        <div class="hidden md:block m-8 w-12rem">
          <img src="~/assets/images/snowman-head-joint.png" />
        </div>
      </div>
      <!-- the minting row -->
      <div class="flex flex-row flex-wrap items-center justify-center">
        <div class="text-4xl cursor-pointer" @click="increment(-1)">-</div>
        <div class="p-4 text-4xl">
          {{ mintCount }}
        </div>
        <div class="text-4xl md:mr-8 cursor-pointer" @click="increment()">
          +
        </div>
        <div>
          <s-button class="text-4xl bg-red-500" @click.native="mint()"
            >Mint Snowmen</s-button
          >
        </div>
      </div>
      <div class="flex flex-row flex-wrap justify-center items-center">
        <div class="mx-4 text-2xl md:text-5xl">
          {{ minted }} / {{ totalSupply }}
        </div>
        <div class="mx-4 text-2xl md:text-5xl">Have Joined The Lodge</div>
      </div>
    </div>
  </section>
</template>

<script>
import Web3 from "web3";
import config from "../app.config.js";
import { getGasData } from "@/utils/web3";
import { fromWei, toBN } from "@/utils/formatters";
import detectEthereumProvider from "@metamask/detect-provider";

const ethereum = window.ethereum;

export default {
  name: "MintSection",
  data() {
    return {
      mintCount: 1,
      minted: 0,
      totalSupply: 10000,
    };
  },
  methods: {
    increment(amount = 1) {
      this.mintCount = Math.min(Math.max(1, this.mintCount + amount), 20);
    },
    async provider() {
      return await detectEthereumProvider();
    },
    async mint() {
      if (ethereum) {
        const chainId = await ethereum.request({ method: "eth_chainId" });
        const accounts = await ethereum.request({ method: "eth_accounts" });

        if (chainId !== config.chainId) {
          alert("Please switch the network over to Avalanche network!");
          return;
        }
        if (accounts.length === 0) {
          alert("Please connect to the wallet address!");
          return;
        }

        const account = accounts[0];
        const CONTRACT_ABI = require("../abi/SavageSnowmen.json");
        const CONTRACT_ADDRESS = config.NFT_CONTRACT_ADDRESS;
        const web3 = new Web3(await this.provider());

        const nftContract = new web3.eth.Contract(
          CONTRACT_ABI,
          CONTRACT_ADDRESS
        );
        const nftPrice = await nftContract.methods.PRICE().call();
        const value = toBN(nftPrice).mul(toBN(this.mintCount));

        await nftContract.methods
          .mint(this.mintCount)
          .send({
            from: account,
            value: value,
          })
          .then((res) => {
            alert("Successfully minted");
          })
          .catch((err) => {
            alert("Minting transaction is terminated");
          });
      }
    },
  },
};
</script>
