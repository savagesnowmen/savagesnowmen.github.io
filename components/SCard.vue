<template>
  <!-- <div
    v-bind="$attrs"
    class="border-4 text-xl border-black text-center flex-grow my-2 p-1"
  >
    <img src="img" alt="Attribute image" />
  </div> -->
  <div class="max-w-sm rounded mx-5 my-10 overflow-hidden shadow-lg">
    <img
      class="w-full"
      :src="`https://ipfs.io/ipfs/${img}`"
      alt="Attribute image"
    />
    <div class="px-4 py-4 text-black-700 bg-gray-500 text-center">
      <div class="font-bold text-xl mb-1">
        {{ heading }}
      </div>
      <div v-for="attribute in attributes" :key="attribute">
        <p class="text-base">{{ attribute.value }},</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SCard",
  props: {
    img: String,
    heading: "",
    attributes: [],
    default: "",
  },
  data() {
    return {};
  },
  methods: {
    curateData: async function () {},
  },

  beforeMount() {
    this.curateData();
  },
};
</script>