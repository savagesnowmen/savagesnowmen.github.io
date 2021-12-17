<template>
  <div>
    <section
      class="
        relative
        md:h-56vw md:min-h-565px md:min-w-1000px
        p-2
        py-8
        md:py-0 md:p-0
      "
    >
      <div
        class="
          bg-red-500
          text-white text-2xl
          px-20
          absolute
          mt-6rem
          content-center
          rounded
          mx-auto
        "
      >
        Stake Snowmen NFTs to earn $LODGE on PolientX
      </div>
      <!-- Change this image to the relevant one -->
      <img
        src="~/assets/images/home-hero-background-vector.svg"
        class="
          md:min-w-1000px md:min-h-565px
          hidden
          md:block
          sm:w-full
          absolute
          top-0
          -z-1
        "
      />
    </section>
    <section class="py-8">
      <div class="flex justify-center md:flex-row">
        <div class="mx-4 mb-4 lg:w-2/5">
          <img src="~/assets/images/rarity-chart-test.png" />
        </div>
      </div>
    </section>
    <!-- <s-card :img="" /> -->
  </div>
</template>

<script>
import SCard from "../components/SCard.vue";
import { mapMutations } from "vuex";
export default {
  components: { SCard },
  metaInfo: {
    title: "Home",
  },
  name: "Home",
  layout: "WithFooter",
  data() {
    return {
      snowmen: {},
    };
  },
  methods: {},
};
</script>