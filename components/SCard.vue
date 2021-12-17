<template>
  <div
    v-bind="$attrs"
    class="border-4 text-xl border-black text-center flex-grow my-2 p-1"
  >
    <img src="img" alt="Attribute image" />
  </div>
</template>
<script>
export default {
  name: "SCard",
  props: {
    img: String,
    default: "",
  },
};
</script>