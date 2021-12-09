<template>
<div>
  <div class="bg-white p-4 pt-6 pb-10 min-h-10rem relative">
    <p class="text-xl">
      {{ blurb }}
    </p>
    <p class="absolute text-sm bottom-0 right-0 text-gray-400 p-2 px-4">{{ step + 1 }} / {{blurbs.length}}</p>
  </div>
  <div class="flex flex-row flex-wrap justify-evenly">
    <s-link to="/mint" class="text-2xl bg-red-500 mx-2">THAT'S ENOUGH OLD MAN</s-link>
    <s-button class="text-2xl bg-red-500 mx-2" @click.native="step = (step + 1) % blurbs.length">TELL ME MORE!</s-button>
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
        "Ahh the good ole days of Aspen in the 80s. Sex, drugs, and rock and roll. There wasn’t a care in the world within that great town of fresh powder (oh you were thinking of snow! Yeah that too). Man, the partying just never stopped. that was before the great avalanches began...",
        "The seismologists and geologists couldn’t figure out what caused them, but every occurrence was wiping out hundreds of park goers. Soon they got so bad people started skipping the slopes and staying inside. It meant more partying anyway...",
        "A couple of weeks passed and the avalanches calmed down. The park goers mustered up the courage to get back out there and shred some pow. Next thing you know the park was packed again - who could resist wide open slopes. Then came the biggest avalanche yet. And it wiped out half the mountain…",
        "The town was devastated and the park closed for the rest of the season. As time went on, the park would close if anyone even mentioned the word ‘avalanche’. It was better to be safe than sorry…",
        "Eventually the monstrosities fizzled out and the seasons were back in full swing. Left behind were friends and family members erased from the mountains. One day enjoying their winter getaways in the lively town, the next day represented by a single flame within a sea of memorial candles. The park goers with no ties to those lost seemed to move on as if nothing happened, except for the workers…",
        "To this day, past stories of strange snowman sightings are kept alive amongst park workers. Most sightings were said to be scattered around the town late at night. They were so far up the mountain, you could barely make out their peculiar shape…",
        "There were even some stories, probably loosely translated over the years, that claimed the avalanche chaos caused supplies like booze and cigs to go missing from the storages. The thieves would leave no evidence behind except for the trail of snow they had tracked indoors from the dark, solemn night..."
      ],
      step: 0,
    };
  }
};
</script>