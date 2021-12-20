<template>
  <div class="grid grid-cols-1">
    <div class="">
      <section class="relative md:h-56vw">
        <div class="container mx-auto relative md:pt-32">
          <!-- alert -->
          <div
            class="p-2 bg-red-500 text-white text-3xl rounded-lg text-center"
          >
            Stake Snowmen NFTs to earn $LODGE on PolientX
          </div>
          <!-- contains buttons and staking interface -->
        </div>
        <img
          class="hidden sm:block w-full absolute top-0 -z-1"
          src="~/assets/images/staking-background.jpeg"
        />
        <div class="mx-5 grid grid-cols-5 gap-2">
          <div v-for="snowman in snowmen" :key="snowman">
            <s-card
              :img="imageUrl"
              :heading="heading"
              :attributes="attributes"
            ></s-card>
          </div>
        </div>
      </section>
    </div>
    <div>
      <section class="py-8 mt-10">
        <div class="flex justify-center md:flex-row mt-20">
          <div class="mx-4 mb-4 lg:w-2/5">
            <img src="~/assets/images/rarity-chart-test.png" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SCard from "../components/SCard.vue";
import { mapMutations, mapActions, mapState } from "vuex";
import axios from "axios";
export default {
  components: { SCard },
  metaInfo: {
    title: "Home",
  },
  name: "Home",
  layout: "WithFooter",
  data() {
    return {
      snowmen: { 1: "1" },
      attributes: [],
      heading: "",
      imageUrl: "",
    };
  },
  methods: {
    ...mapActions({}),
    getSnowmen: async function () {
      const snowman = await axios.get(
        "https://ipfs.io/ipfs/QmRoQn3G24Y39u74TmB7axkwXkxyvWr7nFUjyx8QYjT98d/1.json"
      );
      this.heading = snowman.data.name;
      this.imageUrl = snowman.data.image.slice(7);
      this.attributes = snowman.data.attributes;
    },
  },

  beforeMount() {
    this.getSnowmen();
  },
};
</script>