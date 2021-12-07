
<template>
  <div class="mx-8">
    <div>
        <slot/>
    </div>
    <h5 class="text-center text-2xl">{{name}}</h5>
  </div>
</template>
<script>
export default {
    props: {
        src: String,
        name: String
    }
};
</script>