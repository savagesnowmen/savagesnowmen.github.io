<template>
  <div class="text-gray-900">
    <!-- Header & Navigation -->
    <header-bar />
    <!-- Page Content -->
    <main>
      <Nuxt/>
    </main>

    <footer class="bg-black">
      <div class="flex flex-row justify-between p-2">
        <social-icons/>
        <div class="flex flex-row">
          <s-link class="bg-indigo-500" to="/mint">Mint</s-link>
          <s-button class="bg-indigo-500" to="https://snowtrace.io/address/0x0814e598dE7318a5CE9Bc14DDB0F188cc469243e">Contract</s-button>
          <!-- <s-button class="bg-indigo-500">Farm</s-button>
        <s-button class="bg-indigo-500">Stake</s-button> -->
        </div>
      </div>
      <div>
        <img
          class="w-20rem mx-auto p-8"
          src="~/assets/images/snowmen-logo-stacked.png"
        />
      </div>
    </footer>
  </div>
</template>
<style scoped>
/* Add any Global Styles Here */
:root {
  --sno-red: hsla(0, 77%, 58%, 1);
}
.active--exact {
  /* Active Nav Link */
  @apply text-gray-900;
}
</style>