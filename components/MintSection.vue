<template>
  <!-- the minting section -->
  <section class="w-full bg-gray-100 p-4 py-8">
    <div class="container mx-auto flex flex-col items-center">
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
      <div class="mx-auto">
        <span class="text-3xl">(1.5 AVAX)</span>
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
            >Mint Snowmen </s-button
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
import config from "../app.config.js";
import { ethers } from 'ethers'

const CONTRACT_ABI = require("../abi/SavageSnowmen.json");
const CONTRACT_ADDRESS = config.NFT_CONTRACT_ADDRESS;

export default {
  name: "MintSection",
  data() {
    return {
      mintCount: 1,
      minted: 0,
      totalSupply: 10000,
      nftPrice: 1.5
    };
  },
  async mounted() {
    try {
      if(!this.$wallet.provider) return 

      const network = await this.$wallet.provider.getNetwork()
      const isWrongNetwork = `0x${network.chainId.toString(16)}` !== config.chainId

      if (isWrongNetwork) {        
        await this.$wallet.switchNetwork(config.avalancheMainnetMetamaskConfig)
        return // return early since switching network will trigger page reload anyway
      }

      const nftContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, this.$wallet.provider)
      this.minted = await nftContract.totalSupply()
      const price = await nftContract.PRICE()
      this.nftPrice = +ethers.utils.formatEther(price.toString())
      
    } catch (err) {
      console.error({err})
    }
  },
  methods: {
    increment(amount = 1) {
      this.mintCount = Math.min(Math.max(1, this.mintCount + amount), 20);
    },
    async mint() {
      try {

        const isWrongNetwork = this.$wallet.hexChainId !== config.chainId
        if (isWrongNetwork) {
          await this.$wallet.switchNetwork(config.avalancheMainnetMetamaskConfig)
          return // return early since switching network will trigge page reload anyway
        }

        if (!this.$wallet.account) {
          await this.$wallet.connect()
        }

        const signer = this.$wallet.provider.getSigner()
        const signedContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)

        const totalPrice = this.nftPrice * this.mintCount
        const value = ethers.utils.parseEther(totalPrice.toString())

        await signedContract.mint(this.mintCount, {
          value
        })

        alert("Successfully minted");
        this.mintCount = 1

      } catch (err) {
        console.error({err})
        if(err.code === -32603) {
          alert("Insufficent funds!")
        }
        else {
          alert("Minting transaction is terminated");
        }
      }
    },
  },
};
</script>
