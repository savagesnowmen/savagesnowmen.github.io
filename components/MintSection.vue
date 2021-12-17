<template>
    <!-- the minting section -->
    <section class="w-full bg-gray-100 p-4 py-8">
      <div class="container mx-auto">
        <div class="flex md:flex-row justify-center mb-8">
          <div class="hidden md:block m-8 w-12rem">
            <img src="~/assets/images/snowman-head-red-hat.png" />
          </div>
          <div class="text-center text-xl lg:text-2xl md:w-2/3">
            Welcome to The Lodge. If you want to be a member you’ll need a
            snowman first. Nothing personal, just want to make sure you aren’t
            just anybody. The Lodge consists of only the most savage, laid back
            avax chads in all the snow caps. Fresh pow on deck, heaters inside,
            beer on tap, nothing beats The Lodge. You understand now, right?
          </div>
          <div class="hidden md:block m-8 w-12rem">
            <img src="~/assets/images/snowman-head-joint.png" />
          </div>
        </div>
        <!-- the minting row -->
        <div class="flex flex-row flex-wrap items-center justify-center">
          <div class="text-4xl cursor-pointer" @click="increment(-1)">-</div>
          <div class="p-4 text-4xl">
            {{ qty }}
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
export default {
  name: "MintSection",
  data() {
    return {
      qty: 1,
      minted: 0,
      totalSupply: 10000,
    };
  },
  methods: {
    increment(amount = 1) {
      this.qty = Math.max(1, this.qty + amount);
    },
    async mint() {
      const contract_abi = require("../abi/SavageSnowmen.json");
      const web3 = new Web3(window.ethereum);
      console.log(contract_abi.abi);
      await window.ethereum.enable();
      const NameContract = new web3.eth.Contract(
        contract_abi.abi,
        "0xd53D29ACDF1B25c46B47312a1C8c241a719AadB3"
      );
      const accounts = await web3.eth.getAccounts();
      await NameContract.methods
        .mint(this.qty)
        .send({ from: accounts[0] })
        .then(console.log("Started mint function"))
        .catch((err) => {
          console.log(err);
          alert(err.message);
        });
    },
  },
};
</script>
