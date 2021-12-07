<template>
  <NuxtLink
    :to="to"
    class="
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
  </NuxtLink>
</template>
<script>
export default {
  name: "SButton",
  props: {
    to: String,
    default: "",
  },
};
</script>