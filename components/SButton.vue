<template>
  <a 
    class="
      cursor-pointer
      border-4
      text-xl
      border-black
      text-center
      flex-grow
      my-2
      p-1
    "
  >
    <span class="text-white">
      <slot/>
    </span>
  </a>
</template>
<script>
export default {
  name: "SButton",
  props: {
    to: [String, undefined],
    default: "",
  },
};
</script>