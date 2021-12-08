<template>
  <div>
    <section class="relative md:h-56vw">
      <img
        class="hidden md:block w-1/4 absolute top-13vw left-20vw"
        src="~/assets/images/snowmen-carousel.gif"
      />
      <img
        class="invisible md:visible w-full absolute top-0 -z-1"
        src="~/assets/images/mint-page-hero.jpeg"
      />
    </section>
    <!-- the minting section -->
    <section class="w-full bg-gray-100 p-4">
      <div class="container mx-auto">
        <div class="flex md:flex-row justify-center">
          <div class="hidden md:block m-8">
            <img
              class="w-12rem"
              src="~/assets/images/snowman-head-red-hat.png"
            />
          </div>
          <div class="text-center text-xl md:text-2xl lg:w-2/3">
            Welcome to The Lodge. If you want to be a member you’ll need a
            snowman first. Nothing personal, just want to make sure you aren’t
            just anybody. The Lodge consists of only the most savage, laid back
            avax chads in all the snow caps. Fresh pow on deck, heaters inside,
            beer on tap, nothing beats The Lodge. You understand now, right?
          </div>
          <div class="hidden md:block m-8">
            <img class="w-12rem" src="~/assets/images/snowman-head-joint.png" />
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
    <!-- mint roadmap -->
    <section class="relative" style="min-height: 56vw">
      <div class="container mx-auto flex flex-col justify-center">
        <h2 class="text-center text-5xl">Mint Roadmap</h2>
        <div class="flex flex-col items-center">
          <roadmap-box>
            <template v-slot:percent> 25% </template>
            <template v-slot:text>
              -1,250 AVAX allocated to the Snowmen Treasury.<br />
              -Liquidity Pool (LDOGE-AVAX) opens on Trader Joe.<br />
              -625 AVAX paired with LODGE and added to the pool as initial liquidity.
            </template>
          </roadmap-box>
          <roadmap-box>
            <template v-slot:percent> 50% </template>
            <template v-slot:text>
              -2,500 AVAX allocated to the Snowmen Treasury.<br />
              -The Snowmen Treasury begins $LODGE buy backs.<br />
              -10 AVAX giveaway to 3 Snowmen holders.
            </template>
          </roadmap-box>
          <roadmap-box>
            <template v-slot:percent> 75% </template>
            <template v-slot:text>
              -3,750 AVAX allocated to the Snowmen Treasury.<br />
              -The Snowmen Treasury begins burning $LODGE.<br />
              -Random airdrops to stakers & LP farmers begin.
            </template>
          </roadmap-box>
          <roadmap-box>
            <template v-slot:percent> 100% </template>
            <template v-slot:text>
              -Snowmen Treasury is chalk full of AVAX.<br />
              -Giveaway of 10 Snowmen to Snowmen stakers.<br />
              -Savage Snowmen launch party (holders free entry)
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
    <section>
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
                Stake your Snowman and start earning $LODGE! 
                The earlier you accumulate the better. $LODGE is our meta token and the currency of The Lodge.
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
                Get your team to The Lodge first! Collaborate with fellow giga-brain Snowmen 
                to solve the mystery of the Savage Snowmen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--snowman rarity -->
    <section class="bg-gray-100">
      <h2 class="text-center m-4 text-3xl md:text-5xl">Snowmen Rarity</h2>
      <div class="flex flex-col md:flex-row">
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
    <section class="p-4 bg-gray-100 pb-12">
      <h2 class="text-3xl md:text-5xl text-center">Team</h2>
      <div class="text-center text-xl md:text-2xl lg:w-3/4 mx-auto">
        After experiencing the power of Avalanche first hand, our team of 5 came
        together to work on something that we would have fun building and
        engaging in. We collided our mixed passions for NFTs, Art, Socializing,
        Gaming and DeFi to create Savage Snowmen.
      </div>
      <div class="flex flex-row flex-wrap mx-8 justify-center">
        <team-card name="Frosty">
          <img
            class="w-12rem h-24rem object-contain"
            fit="contain"
            src="~/assets/images/team-frosty-1.png"
          />
        </team-card>
        <team-card name="Esco">
          <img
            class="w-12rem h-24rem object-contain"
            fit="contain"
            src="~/assets/images/team-esco-2.png"
          />
        </team-card>
        <team-card name="Karoh">
          <img
            class="w-12rem h-24rem object-contain"
            fit="contain"
            src="~/assets/images/team-karoh-3.png"
          />
        </team-card>
        <team-card name="Dev">
          <img
            class="w-12rem h-24rem object-contain"
            fit="contain"
            src="~/assets/images/dev1-head.png"
          />
        </team-card>
        <team-card name="Dev">
          <img
            class="w-14rem h-24rem object-contain"
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
    mint() {
      console.log("call minting function");
    },
  },
};
</script>
