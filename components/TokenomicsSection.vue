<template>
  <section class="py-8 relative text-white bg-rarity md:bg-transparent overflow-hidden">
    <img
      class="w-full absolute top-0 -z-1 hidden md:block"
      src="~/assets/images/roadmap-background.jpg"
    />
    <h2 class="m-4 text-5xl md:text-7xl flex items-center gap-4">
      <div class="hidden md:block w-8rem">
        <img src="~/assets/images/snowman-head-red-hat.png"/>
      </div>
      Tokenomics
    </h2>
    <div class="flex mb-20 md:relative flex-col justify-center items-center gap-8">
      <div class="flex flex-col md:flex-row m-4 m-8 gap-10 md:gap-16 text-center uppercase items-center">
        <div class="relative arrow-bottom md:arrow-right w-10rem bg-white text-black rounded text-xl leading-4 font-semibold px-8 py-10">Mint snowman</div>
        <div class="relative arrow-bottom md:arrow-right w-10rem bg-red-500 rounded-full text-xs px-5 py-3">Stake Snowman</div>
        <div class="relative arrow-bottom md:arrow-right w-10rem bg-white text-black rounded text-xl leading-4 px-8 py-10">earn $SNOW</div>
        <div class="relative arrow-bottom md:arrow-right w-10rem bg-red-500 rounded-full text-xs px-2 py-3">Stake SNOW/AVAX LP TOKENS</div>
        <div class="relative arrow-bottom md:arrow-right w-10rem bg-white text-black rounded text-xl leading-4 px-8 py-10">Mine $LODGE</div>
        <div class="relative arrow-left md:arrow-top w-10rem bg-red-500 rounded-full text-xs px-5 py-3">Single Stake LODGE TOKENS</div>
      </div>
      <div class="md:absolute md:-bottom-52 flex text-center uppercase items-center flex-col items-center">
        <div class="flex items-center gap-4 mb-10 flex-col md:flex-row">
          <div class="order-1 w-10rem bg-red-500 rounded-full text-xs px-5 py-3">Provide Liquidity to  LODGE/AVAX</div>
          <div class="order-3 md:order-2 relative arrow-bottom w-8rem bg-white text-black rounded text-xl leading-4 px-6 py-10">SNowmen Treasury</div>
          <div class="order-2 md:order-3 w-10rem bg-red-500 rounded-full text-xs px-5 py-3">Provide Liquidity to  SNOW/AVAX</div>
        </div>
        <div class="w-8rem bg-red-500 rounded-full text-xs px-5 py-3">BUYbacks</div>
      </div>
    </div>
    <div class="flex flex-col md:flex-row justify-between">
      <div class="bg-rarity/[.87] border-black border m-4 p-4 rounded-lg text-xl lg:w-1/4">
        <div class="underline md:text-2xl">$SNOW:</div>
        <p>- Staked Snowmen drop $SNOW.</p>
        <p>- Supply is inflationairy with a max supply of 250 million.</p>
        <p>- Stake SNOW/AVAX LPs to mine LODGE.</p>
        <div class="underline md:text-2xl mt-4">$LODGE:</div>
        <p>- Inflationary with extremely scarce token supply of 10,000. </p>
        <p>- Mint a Snowman 1:1 with LODGE to earn more $SNOW.</p>
      </div>
      <div class="bg-rarity/[.87] border-black border m-4 p-4 rounded-lg text-xl lg:w-1/4">
        <div class="underline md:text-2xl">Savage Snowman NFT:</div>
        <p>- Mint with AVAX or LODGE.</p>
        <p>- Stake to earn SNOW.</p>
        <p>- Stake SNOW/AVAX LPs to mine LODGE.</p>
        <div class="underline md:text-2xl mt-4">Snowmen Treasury</div>
        <p>- 20% of mint & 2.5% of each secondary market sale is allocated to the treasury. </p>
        <p>- Provides Liquidity to LODGE/AVAX</p>
        <p>- Provides Liquidity to SNOW/AVAX</p>
        <p>- Buybacks and Burns.</p>
    </div>
    </div>
  </section>
</template>
