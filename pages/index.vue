<template>
  <section class="relative md:h-56vw md:min-h-565px md:min-w-1000px" >
    <nav class="hidden md:flex md:absolute md:w-1/5 md:mt-32 sm:ml-4 flex-col">
      <s-button class="bg-indigo-500 mb-10 md:text-2xl lg:text-3xl min-w-7em"
        >Connect Wallet</s-button
      >
      <s-link to="/" class="bg-indigo-500 md:text-2xl lg:text-3xl min-w-7em">My Snowmen</s-link>
      <s-link to="/" class="bg-indigo-500 md:text-2xl lg:text-3xl min-w-7em">Stake Snowmen</s-link>
      <s-link to="/" class="bg-indigo-500 md:text-2xl lg:text-3xl min-w-7em">Buy $LODGE</s-link>
      <s-link to="/" class="bg-indigo-500 md:text-2xl lg:text-3xl min-w-7em">Farm $LODGE</s-link>
        <!--<s-button class="bg-indigo-500 text-2xl">Stake Snowmen</s-button> -->
    </nav>

    <div class="container mx-auto">
      <div class="md:pt-32">
        <div class="mx-auto md:w-28rem" style="transform: translateX(-3rem)">
          <story-box />
        </div>
      </div>
    </div>

    <s-link
      to="/mint"
      class="
        invisible
        md:visible
        md:text-2xl
        lg:text-4xl
        md:absolute
        w-max-content
        transform
        -translate-x-1/2 -translate-y-1/2
        sm:left-77% sm:top-43vw
        bg-red-500
      "
    >
      MINT SNOWMEN
    </s-link>

    <social-icons
      class="mx-auto justify-center md:absolute md:bottom-1 md:left-1"
    />
    <video
      src="~/assets/videos/home-hero-background.mp4"
      autoplay
      loop
      muted
      class="md:min-w-1000px md:min-h-565px hidden md:block sm:w-full absolute top-0 -z-1"
    />
  </section>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
  name: "Home"
};
</script>