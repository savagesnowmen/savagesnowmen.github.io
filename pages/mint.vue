<template>
  <div>
    <section class="relative md:h-56vw">
      <iframe class="w-full sm:w-4/5 my-8 md:w-2/5 mx-auto md:absolute md:top-13vw md:left-8vw" width="560" height="315" src="https://www.youtube.com/embed/3PrQKr4-dS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <img
        class="invisible md:visible w-full absolute top-0 -z-1"
        src="~/assets/images/mint-page-hero.jpeg"
      />
    </section>
    <!-- the minting section -->
    <mint-section/>
    <!-- mint roadmap -->
    <section class="relative py-8" style="min-height: 56vw">
      <div class="container mx-auto flex flex-col justify-center">
        <div
          style="top: 0vw; left: 80vw"
          class="
            hidden
            md:block
            opacity-0
            hover:opacity-100
            absolute
            w-12rem
            h-12rem
            z-50
          "
        >
          <img
            class="w-24 absolute bottom-0 right-0"
            src="~/assets/images/skier4.png"
          />
        </div>
        <div
          style="top: 15vw; left: 0"
          class="
            hidden
            md:block
            opacity-0
            hover:opacity-100
            absolute
            w-12rem
            h-12rem
            z-10
          "
        >
          <img
            class="w-24 absolute bottom-0 left-3rem"
            src="~/assets/images/skier3.png"
          />
        </div>
        <div
          style="top: 30vw; left: 80vw"
          class="
            hidden
            md:block
            opacity-0
            hover:opacity-100
            absolute
            w-12rem
            h-12rem
            z-10
          "
        >
          <img
            class="w-24 absolute bottom-0 left-3rem"
            src="~/assets/images/skier2.png"
          />
        </div>
        <div
          style="top: 45vw; left: 0"
          class="
            hidden
            md:block
            opacity-0
            hover:opacity-100
            absolute
            w-12rem
            h-12rem
            z-10
          "
        >
          <img
            class="w-24 absolute bottom-0 right-0"
            src="~/assets/images/skier1.png"
          />
        </div>
        <h2 class="text-center text-5xl">Mint Roadmap</h2>
        <div class="flex flex-col items-center p-4">
          <roadmap-box>
            <template v-slot:percent> 25% </template>
            <template v-slot:text>
              -Opening of LODGE Liquidity Pool on Trader Joe.<br />
              -20 million LODGE with AVAX for initial liquidity.<br />
              -20% of mint allocated to the Snowmen Treasury (treasury
              allocation built into the smart contract.)
            </template>
          </roadmap-box>
          <roadmap-box>
            <template v-slot:percent> 50% </template>
            <template v-slot:text>
              -Snowmen Treasury is 50% full.<br />
              -$LODGE buy backs begin.<br />
              -Random airdrops to stakers & LP farmers begin.<br />
              -5 AVAX giveaway to 3 Snowmen holders.
            </template>
          </roadmap-box>
          <roadmap-box>
            <template v-slot:percent> 75% </template>
            <template v-slot:text>
              -Snowmen Treasury is 75% full.<br />
              -10 AVAX giveaway to 3 Snowmen holders.<br />
              -$LODGE burns begin.. and MORE BUYBACKS!
            </template>
          </roadmap-box>
          <roadmap-box>
            <template v-slot:percent> 100% </template>
            <template v-slot:text>
              -Snowmen Treasury is 100% full.<br />
              -Giveaway of 10 Snowmen to Snowmen stakers.<br />
              -Savage Snowmen launch party (holders free entry.)<br />
              -Oh yeah.. and even more buybacks.
            </template>
          </roadmap-box>
        </div>
      </div>
      <img
        class="hidden md:block absolute top-0 left-0 -z-1 w-full"
        src="~/assets/images/mint-page-roadmap-section-background.jpeg"
      />
    </section>
    <!-- savage snowmen roadmap -->
    <section class="py-8">
      <div class="mx-auto">
        <h2 class="text-center text-3xl md:text-5xl mt-8 mb-4">
          Savage Snowmen Roadmap
        </h2>
        <div class="flex flex-col md:flex-row">
          <div class="hidden md:block w-2/3 ml-8 mr-4">
            <img src="~/assets/images/stake-trail-map.jpeg" />
          </div>
          <div class="md:w-1/3">
            <div class="p-4">
              <div
                class="mx-auto sm:mx-0 bg-red-500 text-lg p-2 rounded-full px-6"
                style="width: max-content"
              >
                Phase 1
              </div>
              <p class="my-2 text-xl">
                Mint a Snowman to join like-minded Avax Chads in The Lodge. We
                all just like to have a good time and enjoy Avalanche.
              </p>
            </div>
            <div class="p-4">
              <div
                class="mx-auto sm:mx-0 bg-red-500 text-lg p-2 rounded-full px-6"
                style="width: max-content"
              >
                Phase 2
              </div>
              <p class="my-2 text-xl">
                Stake your Snowman and start earning $LODGE! The earlier you
                accumulate the better. $LODGE is our meta token and the currency
                of The Lodge.
              </p>
            </div>
            <div class="p-4">
              <div
                class="mx-auto sm:mx-0 bg-red-500 text-lg p-2 rounded-full px-6"
                style="width: max-content"
              >
                Phase 3
              </div>
              <p class="my-2 text-xl">
                Recieve your Airdrop and get your team to The Lodge first by
                Collaborating with fellow giga-brain Snowmen to solve the
                mystery of the Savage Snowmen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--snowman rarity -->
    <section class="bg-gray-100 py-8">
      <h2 class="text-center m-4 text-3xl md:text-5xl">Snowmen Rarity</h2>
      <div class="flex flex-col md:flex-row md:flex-wrap items-center justify-center">

        <div class="mx-4 mb-4 lg:w-2/5">
          <img
            src="~/assets/images/snowmen-carousel.gif"
          />
        </div>
        <div class="mx-4 mb-4 lg:w-2/5">
          <img src="~/assets/images/rarity-chart.png" />
        </div>
        <!-- blurbs -->
        <div class="lg:w-3/5 md:mr-4">
          <div
            class="
              rounded-lg
              bg-red-500
              p-4
              m-4
              ml-4
              text-xl
              md:text-2xl md:mb-16
            "
          >
            <p>
              Each Snowman is 100% unique. There are no Snowmen that are the
              same and some may have rarer attributes than others. However, all
              Snowmen are unified by being the select few members of The Lodge.
              Same same, but different.
            </p>
          </div>

          <div class="rounded-lg bg-red-500 p-4 m-4 text-xl md:text-2xl">
            <p>
              After mint, it is the Snowman responsibility to select who they
              want to join The Lodge. The power of who buys a Snowman in the
              secondary market is completely up to the members. You may let in
              fellow Chads or let in [REDACTED]s.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- tokenomics -->
    <tokenomics-section />
    <!-- team -->
    <section class="p-4 py-8 bg-gray-100 pb-12">
      <h2 class="text-3xl md:text-5xl text-center">Team</h2>
      <div class="text-center text-xl md:text-2xl lg:w-3/4 mx-auto">
        After experiencing the power of Avalanche first hand, our team of 5 came
        together to work on something that we would have fun building and
        engaging in. We collided our mixed passions for Art, Socializing, Gaming
        and Finance to create Savage Snowmen.
      </div>
      <div
        class="flex flex-row flex-wrap mx-8 mt-8 justify-center items-center"
      >
        <team-card name="Frosty" twitter="https://twitter.com/SavageFrosty_">
          <img
            class="h-12rem object-contain"
            fit="contain"
            src="~/assets/images/team-frosty-1.png"
          />
        </team-card>
        <team-card name="Esco" twitter="https://twitter.com/AvaxEsco">
          <img
            class="h-12rem object-contain"
            fit="contain"
            src="~/assets/images/team-esco-2.png"
          />
        </team-card>
        <team-card name="Karoh" twitter="https://twitter.com/KarohNFT">
          <img
            class="h-12rem object-contain"
            fit="contain"
            src="~/assets/images/team-karoh-3.png"
          />
        </team-card>
        <team-card name="BaconDev">
          <img
            class="h-12rem object-contain"
            fit="contain"
            src="~/assets/images/dev1-head.png"
          />
        </team-card>
        <team-card name="BeardDev">
          <img
            class="h-12rem object-contain"
            fit="contain"
            src="~/assets/images/dev2-head.png"
          />
        </team-card>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Mint",
  },
  layout: "WithFooter",
  name: "Mint",
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
        "0x8AE2823E151405A9D82Aa9d2F588aBaD7CC400B0"
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
