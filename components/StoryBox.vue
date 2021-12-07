<template>
<div>
  <div class="bg-white p-4 py-6 min-h-10rem">
    <p class="text-xl">
      {{ blurb }}
    </p>
  </div>
  <div class="flex flex-row flex-wrap justify-evenly">
    <s-button to="" class="text-2xl">That's enough old man</s-button>
    <s-button to="" class="text-2xl" @click.native="step = step + 1">Tell me more!</s-button>
  </div>
</div>
</template>

<script>
export default {
  name: "StoryBox",
  computed: {
    blurb() {
      return this.blurbs[this.step % this.blurbs.length];
    },
  },
  data() {
    return {
      blurbs: [
        "Ahh the good ole days of Aspen in the 80s. Sex, drugs, and rock and roll. There wasn’t a care in the world within that great town of fresh powder (oh you were thinking of snow! Yeah that too). Man, the partying just never stopped. that was before the great avalanches began....",
        "Story continued here",
      ],
      step: 0,
    };
  },
};
</script>