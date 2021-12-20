<template>
  <div>
    <section class="relative md:h-56vw">
      <div class="container mx-auto relative md:pt-32">
        <!-- alert -->
        <div class="p-2 bg-red-500 text-white text-3xl rounded-lg text-center">
          Add liquidty to LODGE/AVAX on TraderJoeXYZ.com then stake your LP
          tokens below to earn $LODGE
        </div>
        <!-- contains buttons and staking interface -->
        <div class="mx-auto md:w-1/2 mt-8">
          <!-- stake and add liquidity buttons -->
          <div class="flex flex-row items-center justify-center m-2">
            <a
              class="
                text-2xl
                rounded-lg
                bg-opacity-75
                p-1
                px-12
                bg-indigo-800
                border-2 border-black
                mx-2
              "
              ><span class="text-white">Buy $LODGE</span></a
            >
            <a
              class="
                text-2xl
                rounded-lg
                bg-opacity-75
                p-1
                px-12
                bg-indigo-800
                border-2 border-black
                mx-2
              "
              ><span class="text-white">Add Liquidity</span></a
            >
          </div>
          <div
            class="
              bg-indigo-800 bg-opacity-75
              p-4
              rounded-lg
              border-2 border-black
              text-white
            "
          >
            <div class="flex flex-row justify-between">
              <div>
                <!-- AVAX LODGE token -->
                <img class="w-16" src="~/assets/images/token-pair.png" />
              </div>
              <div class="text-white text-xl">
                LODGE/AVAX<br />
                TraderJoe LP
              </div>
            </div>
            <div class="flex flex-row justify-between text-xl">
              <div>Earn</div>
              <div>$LODGE</div>
            </div>
            <div class="flex flex-row justify-between text-xl">
              <div>APY</div>
              <div>22%</div>
            </div>
            <div class="flex flew-row mt-4">
              <t-stake-input class="w-36" />
              <t-max-button>MAX</t-max-button>
              <a class="bg-indigo-300 rounded-full text-2xl p-1 px-8 mx-2">
                <span class="text-white align-middle">Stake</span>
              </a>
              <a class="bg-indigo-300 rounded-full text-2xl p-1 px-8">
                <span class="text-white align-middle">Claim</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        class="hidden sm:block w-full absolute top-0 -z-1"
        src="~/assets/images/staking-background.jpeg"
      />
    </section>
    <tokenomics-section />
  </div>
</template>
<script>
import WithFooter from "~/layouts/WithFooter.vue";
import TokenomicsSection from "~/components/TokenomicsSection.vue";
export default {
  name: "Stake",
  components: { TokenomicsSection, WithFooter },
};
</script>