<template>
  <section class="py-8 relative text-white">
    <img
      class="invisible md:visible w-full absolute top-0 -z-1"
      src="~/assets/images/roadmap-background.jpg"
    />
    <h2 class="m-4 text-5xl md:text-7xl flex items-center gap-4">
      <div class="hidden md:block w-8rem">
        <img src="~/assets/images/snowman-head-red-hat.png"/>
      </div>
      Tokenomics
    </h2>
    <div class="mb-20 relative flex flex-col justify-center items-center gap-8">
      <div class="flex m-4 m-8 gap-16 text-center uppercase items-center">
        <div class="relative arrow-right w-10rem bg-white text-black rounded text-xl leading-4 font-semibold px-8 py-10">Mint snowman</div>
        <div class="relative arrow-right w-10rem bg-red-500 rounded-full text-xs px-5 py-3">Stake Snowman</div>
        <div class="relative arrow-right w-10rem bg-white text-black rounded text-xl leading-4 px-8 py-10">earn $SNOW</div>
        <div class="relative arrow-right w-10rem bg-red-500 rounded-full text-xs px-2 py-3">Stake SNOW/AVAX LP TOKENS</div>
        <div class="relative arrow-right w-10rem bg-white text-black rounded text-xl leading-4 px-8 py-10">Mine $LODGE</div>
        <div class="relative arrow-back w-10rem bg-red-500 rounded-full text-xs px-5 py-3">Single Stake LODGE TOKENS</div>
      </div>
      <div class="absolute -bottom-52 flex text-center uppercase items-center flex-col items-center">
        <div class="flex items-center gap-4 mb-10">
          <div class="w-10rem bg-red-500 rounded-full text-xs px-5 py-3">Provide Liquidity to  LODGE/AVAX</div>
          <div class="relative arrow-bottom w-8rem bg-white text-black rounded text-xl leading-4 px-6 py-10">SNowmen Treasury</div>
          <div class="w-10rem bg-red-500 rounded-full text-xs px-5 py-3">Provide Liquidity to  SNOW/AVAX</div>
        </div>
        <div class="w-8rem bg-red-500 rounded-full text-xs px-5 py-3">BUYbacks</div>
      </div>
    </div>
    <div class="flex justify-between">
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
<style scoped>
.arrow-bottom::before{
  content:'';
  width: 1px;
  height: 2.5rem;
  background-color: rgb(239, 68, 68);
  position: absolute;
  bottom: -2.5rem;
  left: 50%;
}
.arrow-bottom::after{
  content: "";
  width: 0;
  height: 0;
  border: solid rgb(239, 68, 68);
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  position: absolute;
  bottom: calc(-2.5rem + 1px);
  left: calc(50% - 3px);
}
.arrow-right::before{
    content:'';
    width: 4rem;
    height: 1px;
    background-color: rgb(239, 68, 68);
    position: absolute;
    right: -4rem;
    top: 50%;
  }
.arrow-right::after{
  content: "";
  width: 0;
  height: 0;
  border: solid rgb(239, 68, 68);
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  position: absolute;
  top: calc(50% - 3px);
  right: calc(-4rem + 1px);
}
.arrow-back::before{
  content: "";
  height: 5rem;
  width: 14rem;
  position: absolute;
  border-radius: 8px;
  border: solid rgb(239, 68, 68);
  border-width: 0 1px 1px 1px;
  bottom: calc(-5rem + 24px);
  right: 50%;
  z-index: -1;
}
.arrow-back::after{
  content: "";
  width: 0;
  height: 0;
  border: solid rgb(239, 68, 68);
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);
  position: absolute;
  bottom: -2.25rem;
  left: calc(50% - 3px - 14rem);
}
</style>
