<template>
  <NuxtLink
    :to="to"
    v-bind="$attrs"
    class="
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