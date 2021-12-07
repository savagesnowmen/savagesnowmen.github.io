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
        class="w-12rem md:w-1/2"
        src="~/assets/images/savage-snowman-logo.png"
      />
    </NuxtLink>

    <img
      class="block sm:hidden"
      src="~/assets/images/menu-icon-black.svg"
      @click="showMenu = !showMenu"
    />
    <nav
      :class="`${showMenu ? 'flex' : 'hidden'} ${
        home ? 'sm:hidden' : 'sm:flex'
      } w-full sm:w-unset sm:visible sm:absolute sm:right-1 sm:ml-4 sm:flex-row flex-wrap`"
    >
      <s-link
        v-if="$route.path != '/'"
        to="/"
        class="w-full sm:w-auto bg-purple-500 text-2xl border-4 px-2"
        >Home</s-link
      >
      <s-link
        class="w-full sm:w-auto bg-purple-500 text-2xl border-4 px-2"
        to="/mint"
        >Mint</s-link>
      <!--<s-button class="bg-purple-500 text-2xl border-4 px-2">Farm</s-button>
      <s-button class="bg-purple-500 text-2xl border-4 px-2">Stake</s-button> -->
      <s-button
        class="w-full sm:w-auto bg-purple-500 text-2xl border-4 px-2"
        >Connect Wallet</s-button>
    </nav>
  </header>
</template>
<script>
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
};
</script>