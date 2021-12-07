<template>
  <section class="relative md:h-56vw">
    <nav class="hidden sm:flex md:absolute md:w-1/5 md:mt-32 sm:ml-4 flex-col">
      <s-button class="bg-purple-500 mb-10 text-2xl"
        >Connect Wallet</s-button
      >
      <s-button to="/mint" class="bg-purple-500 text-2xl">Buy Snowmen</s-button>
      <!-- <s-button class="bg-purple-500 text-2xl">Stake Snowmen</s-button>
        <s-button class="bg-purple-500 text-2xl">Stake Snowmen</s-button> -->
    </nav>

    <div class="container mx-auto">
      <div class="md:pt-32">
        <div class="mx-auto lg:w-1/2">
          <story-box />
        </div>
      </div>
    </div>

    <s-button
      class="
        invisible
        md:visible
        text-3xl
        md:absolute
        w-20rem
        transform
        -translate-x-1/2 -translate-y-1/2
        sm:left-77% sm:top-43vw
      "
    >
      Mint Snowmen
    </s-button>

    <social-icons
      class="mx-auto justify-center sm:absolute sm:bottom-1 sm:left-1"
    />
    <video
      src="~/assets/videos/home-hero-background.mp4"
      autoplay
      loop
      class="hidden sm:block sm:w-full absolute top-0 -z-1"
    />
  </section>
</template>

<script>
import SButton from "~/components/SButton.vue";
import StoryBox from "~/components/StoryBox.vue";
import SocialIcons from "~/components/SocialIcons.vue";
export default {
  metaInfo: {
    title: "Home",
  },
  name: "Home",
  components: { SButton, StoryBox, SocialIcons },
};
</script>