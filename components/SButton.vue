<template>
  <a 
    class="
      cursor-pointer
      border-4
      text-xl
      border-black
      text-center
      flex-grow
      mx-2
      my-2
      p-1
      bg-red-500
      px-2
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